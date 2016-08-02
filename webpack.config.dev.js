var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'master/jsx/App')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/dist/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot']
        }, {
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react'],
                compact: true
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            loader: 'url?prefix=font/&limit=10000'
        }],
        postLoaders: [
          {
            test: /\.js[x]$/,
            loaders: ['es3ify-loader']
          }
        ]
    }
};