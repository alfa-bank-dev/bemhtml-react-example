var React = require('react');
var ReactDom = require('react-dom');
import { Label } from './components/label/label';
import { Button } from './components/button/button';
import { FormField, FormFieldLabel, FormFieldControl } from './components/form-field/form-field';
import { Form } from './components/form/form';
import { Input } from './components/input/input';
import { Heading } from './components/heading/heading';
import { Paragraph } from './components/paragraph/paragraph';
import { Select } from './components/select/select';
import { Page } from './components/page/page';

if (!document.querySelector('#root')) {
    var div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
}

ReactDom.render(
    <Page>
        <Heading size='xl'>
            Заголовок нах
        </Heading>
        <Form>
            <FormField>
                <Select/>
            </FormField>
            <FormField view='line'>
                <FormFieldLabel>
                    <Label>it is a label</Label>
                </FormFieldLabel>
                <FormFieldControl>
                    <Input/>
                </FormFieldControl>
            </FormField>
            <FormField>
                <FormFieldLabel>
                    <Label>it is a label</Label>
                </FormFieldLabel>
                <FormFieldControl>
                    <Button text='DEBUG test!!!'></Button>
                </FormFieldControl>
            </FormField>
        </Form>
    </Page>,
    document.getElementById('root')
);
