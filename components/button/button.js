'use strict';
var bemreact = require('../../lib/bemreact');
// TODO
//
var React = require('react');
require('bem-css-loader!./button.css');

module.exports = class Button extends React.Component {
    render() {
        return bemreact({
            block: 'button',
            attrs: {
                onMouseEnter: function(e) {
                    console.log('hovered');
                }
            },
            mods: { size: 'm', theme: 'alfa-on-white', hovered: true },
            text: 'hi there'
        });
    }
}
