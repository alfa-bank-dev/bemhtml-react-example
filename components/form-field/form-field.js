require('bem-css-loader!./form-field.css');
var bemreact = require('../../lib/bemreact');
var React = require('react');

export class FormField extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            mods: {
                theme: 'alfa-on-white',
                size: 'm',
                name: 'test',
            },
            content: [this.props.children]
        });
    }
}

export class FormFieldLabel extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            elem: 'label',
            content: [this.props.children]
        });
    }
}

export class FormFieldControl extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            elem: 'control',
            content: [this.props.children]
        });
    }
}
