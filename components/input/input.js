var bemreact = require('../../lib/bemreact');
var React = require('react');
require('bem-css-loader!./input.css');

export class Input extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false,
            focused: false
        };
    }

    render() {
        return bemreact({
            block: 'input',
            attrs: {
                onMouseEnter: () => {
                    this.setState({ hovered: true });
                },
                onFocus: () => {
                    this.setState({ focused: true });
                },
                onMouseLeave: () => {
                    this.setState({ hovered: false });
                },
                onBlur: () => {
                    this.setState({ focused: false });
                }
            },
            mods: {
                size: 'm',
                theme: 'alfa-on-white',
                hovered: this.state.hovered,
                focused: this.state.focused
            }
        });
    }
}
