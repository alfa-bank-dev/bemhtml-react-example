const templates = require('../bem-templates');
const React = require('react');

module.exports = function(bemJson) {
    return makeComponent(templates.apply(bemJson));
}

function makeComponent(args) {
    return React.createElement(
        args[0],
        args[1],
        Array.isArray(args[2]) ?
            makeComponent(args[2]) :
            args[2]);
}
