var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack({
  // configuration
});

new WebpackDevServer(compiler, {
  contentBase: "./dist",
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  filename: "bundle.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: "/assets/",
  stats: { colors: true },
}).listen(8080, "localhost", function(err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Webpack dev server listening at localhost:8080');
    }
});
