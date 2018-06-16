import React from 'react';
import { shallow, mount } from 'enzyme';
import { StackForm } from './StackForm';

describe('StackForm', () => {
    const stackForm = shallow(<StackForm />);

    it('renders the form title', () => {
        expect(stackForm.contains(<h4>Create New Stack</h4>));
    });

    it('renders a Link Home', () => {
        expect(stackForm.contains(<h4>Home</h4>));
    });

    it('renders a Form element', () => {
        expect(stackForm.contains('Form'));
    });

    it('renders a button to add a new Card', () => {
        expect(
            stackForm
                .find('Button')
                .at(0)
                .props().children
        ).toEqual('Add Card');
    });

    it('renders a button to submit the form', () => {
        expect(
            stackForm
                .find('Button')
                .at(1)
                .props().children
        ).toEqual('Save and Add the Stack');
    });
});
