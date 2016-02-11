var React = require('react');
var ReactDom = require('react-dom');
var Label = require('./components/label/label');
var Button = require('./components/button/button');
var FormField = require('./components/form-field/form-field');

if (!document.querySelector('#root')) {
    var div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
}

ReactDom.render(
    React.createElement(FormField, {
        label: Label,
        control: Button
    }),
    document.getElementById('root')
);
