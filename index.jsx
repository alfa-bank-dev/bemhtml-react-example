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
        <Heading theme='alfa-on-white' size='xl'>
            Заголовок нах
        </Heading>
        <Form theme='alfa-on-white' size='m'>
            <FormField theme='alfa-on-white' size='m' name='test1'>
                <Select/>
            </FormField>
            <FormField name='test2' theme='alfa-on-white' size='m' view='line'>
                <FormFieldLabel>
                    <Label>it is a label</Label>
                </FormFieldLabel>
                <FormFieldControl>
                    <Input/>
                </FormFieldControl>
            </FormField>
            <FormField name='test3' theme='alfa-on-white' size='m'>
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
