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
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
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
            }
        ]
    },
    plugins: [
        new CollectBemAssetsPlugin({
            done: function(data) {
                bemCssLoaderSetData(data['post.css']);
                fs.writeFileSync(
                    './bem-templates.js',
                    // generateBemHtml(_.pick(data.bemhtml, ['button']))
                    bemxjst.bemreact.generate(generateBemHtml(data.bemhtml))
                );
            },
            techs: ['post.css', 'bemhtml'],
            // levels: bemLevels // FIXME - doesn't work with all levels
            levels: [ path.resolve(process.cwd(), './node_modules/ui/common.blocks') ]
        }),
    ],
    postcss: postCssPlugins
};
