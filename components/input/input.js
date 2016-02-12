var bemreact = require('../../lib/bemreact');
var React = require('react');
require('bem-css-loader!./input.css');

export class Input extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return bemreact({
            block: 'input',
            attrs: {
                onMouseEnter: () => {
                    this.setState({ hovered: true });
                },
                onMouseLeave: () => {
                    this.setState({ hovered: false });
                }
            },
            mods: { size: 'm', theme: 'alfa-on-white', hovered: this.state.hovered },
            content: this.props.children
        });
    }
}
