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

    describe('and updating the title', () => {
        const customTitle = 'changed title';

        beforeEach(() => {
            stackForm.find('FormControl').simulate('change', {
                target: { value: customTitle }
            });
        });

        it('updates the title in state', () => {
            expect(stackForm.state().title).toEqual(customTitle);
        });
    });

    describe('when adding a new card', () => {
        beforeEach(() => {
            stackForm
                .find('Button')
                .at(0)
                .simulate('click');
        });

        afterEach(() => {
            stackForm.setState({ cards: [] });
        });

        it('adds a new card to the state', () => {
            expect(stackForm.state().cards.length).toEqual(1);
        });

        it('renders the prompt section', () => {
            expect(
                stackForm
                    .find('ControlLabel')
                    .at(1)
                    .props().children
            ).toEqual('Prompt:');
        });

        it('renders the answer section', () => {
            expect(
                stackForm
                    .find('ControlLabel')
                    .at(2)
                    .props().children
            ).toEqual('Answer:');
        });

        describe('and updating the card prompt', () => {
            const customPrompt = 'changed prompt';

            beforeEach(() => {
                stackForm
                    .find('FormControl')
                    .at(1)
                    .simulate('change', {
                        target: { value: customPrompt }
                    });
            });

            it('updates the prompt in the state', () => {
                expect(stackForm.state().cards[0].prompt).toEqual(customPrompt);
            });
        });

        describe('and updating the card answer', () => {
            const customAnswer = 'changed answer';

            beforeEach(() => {
                stackForm
                    .find('FormControl')
                    .at(2)
                    .simulate('change', {
                        target: { value: customAnswer }
                    });
            });

            it('updates the answer in the state', () => {
                expect(stackForm.state().cards[0].answer).toEqual(customAnswer);
            });
        });
    });
});
