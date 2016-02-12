const templates = require('../dist/bem-templates');
const React = require('react');

module.exports = function(bemJson) {
    return makeComponent(templates.apply(bemJson));
}

function makeComponent(args) {
    console.log('args',args);
    if (typeof args[0] !== 'string' && typeof args[0] !== 'function') {
        return args[0];
    }

    return React.createElement(
        args[0],
        args[1],
        Array.isArray(args[2]) ?
            makeComponent(args[2]) :
            args[2]);
}
