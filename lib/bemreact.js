const templates = require('../dist/bem-templates');
const React = require('react');

module.exports = function(bemJson) {
    var res = templates.apply(bemJson);
    // console.log('args start', res);
    return makeComponent(res);
}

let isValidReactElement = (obj) => {
    return typeof obj === 'object' && obj.$$typeof;
};

function makeComponent(args) {
    // console.log('args', args);
    if (args.filter(a => isValidReactElement(a)).length === args.length) {
        return React.createElement.apply(null, ['div', null].concat(args));
    }

    return React.createElement(
        args[0],
        args[1],
        Array.isArray(args[2]) ?
            makeComponent(args[2]) :
            args[2]);
}
