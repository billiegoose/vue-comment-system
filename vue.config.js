var webpack = require("webpack");

module.exports = {
  title: 'semantic-comments',
  resolve: true,
  mergeConfig: {
    // Thanks mendlik! https://github.com/NextStepWebs/simplemde-markdown-editor/issues/150#issuecomment-224592210
    node: { fs: 'empty' }
  }
}
