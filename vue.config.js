const webpack = require('webpack')
 
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'development',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl',
      }),
    ],
  },
}