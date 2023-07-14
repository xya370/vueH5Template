modules.exports = (api, options, rootOptions) => {
  // return {}
  api.extendPackage({
    "scripts": {
      "serve": "vue-cli-service serve",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    "dependencies": {
      "core-js": "^3.8.3",
      "vue": "^3.2.13",
      "vue-router": "^4.0.3",
      "vuex": "^4.0.0"
    },
    "devDependencies": {
      "@babel/core": "^7.12.16",
      "@babel/eslint-parser": "^7.12.16",
      "@vue/cli-plugin-babel": "~5.0.0",
      "@vue/cli-plugin-eslint": "~5.0.0",
      "@vue/cli-plugin-router": "~5.0.0",
      "@vue/cli-plugin-vuex": "~5.0.0",
      "@vue/cli-service": "~5.0.0",
      "eslint": "^7.32.0",
      "eslint-config-prettier": "^8.3.0",
      "eslint-plugin-prettier": "^4.0.0",
      "eslint-plugin-vue": "^8.0.3",
      "less": "^4.0.0",
      "less-loader": "^8.0.0",
      "lint-staged": "^11.1.2",
      "prettier": "^2.4.1"
    },
    "gitHooks": {
      "pre-commit": "lint-staged"
    }
  })
  api.render('../template');
}