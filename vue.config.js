module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Hex_Vue_week7/'
    : '/',
  chainWebpack: (config) => {
    config.performance.set('hints', false);
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
  },
};
