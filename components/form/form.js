require('bem-css-loader!./form.css');
var bemreact = require('../../lib/bemreact');
var React = require('react');

export class Form extends React.Component {
    render() {
        return bemreact({
            block: 'form',
            mods: {
                theme: this.props.theme,
                size: this.props.size
            },
            content: this.props.children
        });
    }
}
