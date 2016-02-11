'use strict';
require('bem-css-loader!./form-field.css');
var bemreact = require('../../lib/bemreact');
var React = require('react');

module.exports = class FormField extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            mods: {
                name: 'test',
            },
            content: this.props.children
        });
    }
}
