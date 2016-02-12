var bemreact = require('../../lib/bemreact');
var React = require('react');
require('bem-css-loader!./select.css');

export class Select extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            hovered: false,
            focused: false
        };
    }

    render() {
        return bemreact({
            block: 'select',
            options: [{val: 1, text: 'option'}],
            val: 1,
            mods: {
                mode: 'radio',
                size: 'm',
                theme: 'alfa-on-white',
                hovered: this.state.hovered,
                focused: this.state.focused
            }
        });
    }
}
