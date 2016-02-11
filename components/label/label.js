'use strict';
require('bem-css-loader!./label.css');
var bemreact = require('../../lib/bemreact');
var React = require('react');

export class Label extends React.Component {
    render() {
        return bemreact({
            block: 'label',
            mods: {
                theme: 'alfa-on-white',
                size: 'm',
                name: 'test',
            },
            content: 'This is label'
        });
    }
}
