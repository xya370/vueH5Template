/*
 * @Description: 
 * @Author: XYA
 * @Date: 2023-07-17 16:56:20
 * @LastEditTime: 2023-07-17 16:58:05
 * @LastEditors: XYA
 */
/*
 * @Description:
 * @Author: XYA
 * @Date: 2023-06-01 14:30:22
 * @LastEditTime: 2023-06-01 14:42:32
 * @LastEditors: XYA
 */
const Mock = require("mockjs");
const { param2Obj } = require("./utils");
// const app = require('./app')
// const caseList = require('./case')
// const label  = require('./label')
// const activity = require('./activity')
// const sjbActivity = require('./sjbActivity')
// const file = require('./file')

const mocks = [
  // ...app,
  // ...caseList,
  // ...label,
  // ...activity,
  // ...sjbActivity,
  // ...file
  // ...user,
  // ...table
];

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;

  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false;

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType;
      }
    }
    this.proxy_send(...arguments);
  };

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null;
      if (respond instanceof Function) {
        const { body, type, url } = options;
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body,
          query: param2Obj(url),
        });
      } else {
        result = respond;
      }
      return Mock.mock(result);
    };
  }

  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || "get",
      XHR2ExpressReqWrap(i.response)
    );
  }
}

module.exports = {
  mocks,
  mockXHR,
};
