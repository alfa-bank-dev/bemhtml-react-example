var bemreact = require('../../lib/bemreact');
var React = require('react');
require('bem-css-loader!./paragraph.css');

export class Paragraph extends React.Component {

    render() {
        return bemreact({
            block: 'paragraph',
            mods: {
                view: this.props.view,
                theme: 'alfa-on-white'
            },
            content: this.props.children
        });
    }
}
