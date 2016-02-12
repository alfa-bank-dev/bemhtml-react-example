var bemreact = require('../../lib/bemreact');
var React = require('react');
require('bem-css-loader!./heading.css');

export class Heading extends React.Component {

    render() {
        return bemreact({
            block: 'heading',
            mods: {
                size: this.props.size,
                theme: 'alfa-on-white'
            },
            content: this.props.children
        });
    }
}
