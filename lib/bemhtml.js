const templates = require('../.tmp/templates');
const React = require('react');

module.exports = function(block) {
    return makeComponent(teamplates.apply(block));
}

function makeComponent(args) {
    return React.createElement(
        args[0],
        args[1],
        Array.isArray(args[2]) ?
            makeComponent(args[2]) :
            args[2]);
}
