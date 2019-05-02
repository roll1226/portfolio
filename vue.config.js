module.exports = {
  publicPath: '',
  outputDir: 'docs',

  pwa: {
    themeColor: '#2196f3',
    msTileColor: '#ffffff'
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
