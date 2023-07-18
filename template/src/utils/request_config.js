/*
 * @Description:
 * @Author: XYA
 * @Date: 2023-05-24 16:38:49
 * @LastEditTime: 2023-07-06 14:28:30
 * @LastEditors: XYA
 */
import Qs from 'qs';
export const baseUrl = '/x/jryw-h5'
export const JsonConfig = {
  baseURL: baseUrl,
  transformResponse: [function(data) {
    if (typeof data === 'string') {
      return JSON.parse(data)
    }
    return data
  }],
  transformRequest: [
    function(data) {
      return data
    }
  ],
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  data: {},
  responseType: 'json'
}

export const config = {
  baseURL: baseUrl,

  transformRequest: [function(data) {
    return Qs.stringify(data)
  }],

  transformResponse: [function(data) {
    if (typeof data === 'string') {
      return JSON.parse(data)
    }
    return data
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  data: {},
  responseType: 'json'
}