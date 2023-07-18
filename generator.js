/*
 * @Description:
 * @Author: XYA
 * @Date: 2023-07-14 15:27:25
 * @LastEditTime: 2023-07-17 17:26:51
 * @LastEditors: XYA
 */
module.exports = (api, options, rootOptions) => {
  // return {}
  api.extendPackage({
    name: 'vue_model',
    version: '0.1.0',
    private: true,
    scripts: {
      serve: 'vue-cli-service serve',
      build: 'vue-cli-service build',
      lint: 'vue-cli-service lint'
    },
    dependencies: {
      axios: '^1.4.0',
      'core-js': '^3.8.3',
      vant: '^4.6.2',
      vue: '^3.2.13',
      'vue-loader': '^17.2.2',
      'vue-router': '^4.0.3',
      vuex: '^4.0.0'
    },
    devDependencies: {
      '@babel/core': '^7.12.16',
      '@babel/eslint-parser': '^7.12.16',
      '@vue/cli-plugin-babel': '~5.0.0',
      '@vue/cli-plugin-eslint': '~5.0.0',
      '@vue/cli-plugin-router': '~5.0.0',
      '@vue/cli-plugin-vuex': '~5.0.0',
      '@vue/cli-service': '~5.0.0',
      eslint: '^7.32.0',
      'eslint-config-prettier': '^8.3.0',
      'eslint-plugin-prettier': '^4.0.0',
      'eslint-plugin-vue': '^8.0.3',
      'filemanager-webpack-plugin': '^8.0.0',
      less: '3.9.0',
      'less-loader': '4.1.0',
      'lint-staged': '^11.1.2',
      mock: '^0.1.1',
      'postcss-pxtorem': '^6.0.0',
      prettier: '^2.4.1',
      'progress-bar-webpack-plugin': '^2.1.0',
      'svg-sprite-loader': '^6.0.11'
    },
    gitHooks: {
      'pre-commit': 'lint-staged'
    }
  })
  api.render('../template')
}
