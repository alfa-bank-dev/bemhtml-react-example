var React = require('react');
var ReactDom = require('react-dom');
var Button = require('./components/button/button');
var FormField = require('./components/form-field/form-field');

ReactDom.render(React.createElement(FormField, {}, Button), document.getElementById('root'));
