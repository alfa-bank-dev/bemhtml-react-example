var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var compiler = webpack(webpackConfig);

new WebpackDevServer(compiler, {
    contentBase: './',
    hot: true,
    quiet: false,
    noInfo: false,
    filename: 'index.js',
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    stats: { colors: true },
}).listen(8080, 'localhost', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Webpack dev server listening at localhost:8080');
    }
});
