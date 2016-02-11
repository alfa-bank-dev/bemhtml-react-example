'use strict';
var bemreact = require('../../lib/bemreact');
// TODO
//
var React = require('react');
require('bem-css-loader!./button.css');

module.exports = class Button extends React.Component {
    render() {
        // return React.createElement('div', { onMouseEnter: () => { console.log('okkafdsf'); } }, 'hi there');
        return bemreact({
            attrs: {
                onMouseEnter: function() {
                    console.log('hovered');
                    // return 'hi there';
                }
            },
            block: 'button',
            text: 'hi there',
            mods: { size: 'm', theme: 'alfa-on-white', hovered: true }
        });
    }
}
