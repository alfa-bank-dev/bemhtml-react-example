'use strict';
var bemreact = require('../../lib/bemreact');
var React = require('react');
require('bem-css-loader!./button.css');

export class Button extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false
        };
    }

    render() {
        return bemreact({
            block: 'button',
            attrs: {
                onMouseEnter: () => {
                    this.setState({ hovered: true });
                },
                onMouseLeave: () => {
                    this.setState({ hovered: false });
                }
            },
            mods: { size: 'm', theme: 'alfa-on-white', hovered: this.state.hovered },
            text: this.props.children
        });
    }
}
