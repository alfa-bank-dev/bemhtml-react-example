var bemreact = require('../../lib/bemreact');
var React = require('react');
require('bem-css-loader!./page.css');

export class Page extends React.Component {
    render() {
        return bemreact({
            block: 'page',
            elem: 'inner',
            mods: { size: 'm', theme: 'alfa-on-white' },
            content: this.props.children
        });
    }
}
