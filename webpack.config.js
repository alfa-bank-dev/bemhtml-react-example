var path = require('path');
var CollectBemAssetsPlugin = require('bem-css-loader').CollectBemAssetsPlugin;
var generateBemHtml = require('bem-css-loader').generateBemHtml;
var bemCssLoaderSetData = require('bem-css-loader').setData;

var postCssPlugins = require('ui/.enb/config/techs.js').postcss.plugins;
var bemLevels = require('ui/.enb/config/levels.js').map(l => l.path);
var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var bemxjst = require('bem-xjst');

module.exports = {
    entry: './index.jsx',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ].join('!')
            },
            {
                test: /\.(svg)$/i,
                loaders: [
                    'url-loader?mimetype=image/svg+xml'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new CollectBemAssetsPlugin({
            done: function(data) {
                bemCssLoaderSetData(data['post.css']);
                if (process.env.STANDALONE) {
                    var out = bemxjst.bemreact.generate(generateBemHtml(data.bemhtml));
                    fs.writeFileSync(
                        './dist/bem-templates.js',
                        out
                    );
                }
            },
            techs: ['post.css', 'bemhtml'],
            levels: bemLevels
            // levels: [ path.resolve(process.cwd(), './node_modules/ui/common.blocks') ]
        }),
    ],
    postcss: postCssPlugins,
};
