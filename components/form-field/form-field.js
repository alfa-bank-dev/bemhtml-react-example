require('bem-css-loader!./form-field.css');
var bemreact = require('../../lib/bemreact');
var React = require('react');

export class FormField extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            mods: {
                view: this.props.view,
                theme: this.props.theme,
                size: this.props.size,
                name: this.props.name
            },
            content: this.props.children
        });
    }
}

export class FormFieldLabel extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            elem: 'label',
            content: this.props.children
        });
    }
}

export class FormFieldControl extends React.Component {
    render() {
        return bemreact({
            block: 'form-field',
            elem: 'control',
            content: this.props.children
        });
    }
}
