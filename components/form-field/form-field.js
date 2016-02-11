'use strict';
require('bem-css-loader!./form-field.css');
var bemreact = require('../../lib/bemreact');
var React = require('react');

module.exports = class FormField extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            mods: {
                theme: 'alfa-on-white',
                size: 'm',
                name: 'test',
            },
            content: [
                {
                    elem: 'label',
                    content: [this.props.label]
                },
                // FIXME: render last - trouble in bemreact
                {
                    elem: 'control',
                    content: [this.props.control]
                }
            ]
        });
    }
}
