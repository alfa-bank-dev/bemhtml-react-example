var React = require('react');
var ReactDom = require('react-dom');
import { Label } from './components/label/label';
import { Button } from './components/button/button';
import { FormField, FormFieldLabel, FormFieldControl } from './components/form-field/form-field';
import { Form } from './components/form/form';
import { Input } from './components/input/input';
import { Page } from './components/page/page';

if (!document.querySelector('#root')) {
    var div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
}

ReactDom.render(
    <Page>
        <Form>
            <FormField>
                <Input/>
            </FormField>
            <FormField>
                <FormFieldLabel>
                    <Label>it is a label</Label>
                </FormFieldLabel>
                <FormFieldControl>
                    <Button>DEBUG test!!!</Button>
                </FormFieldControl>
            </FormField>
        </Form>
    </Page>,
    document.getElementById('root')
);
