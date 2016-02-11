var React = require('react');
var ReactDom = require('react-dom');
import { Label } from './components/label/label';
import { Button } from './components/button/button';
import { FormField, FormFieldLabel, FormFieldControl } from './components/form-field/form-field';

if (!document.querySelector('#root')) {
    var div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
}

ReactDom.render(
     <FormField>
        <FormFieldLabel>
            <Label/>
        </FormFieldLabel>
        { // <FormFieldControl>
        //     <Button/>
        // </FormFieldControl>
        }
     </FormField>,
     document.getElementById('root')
);
