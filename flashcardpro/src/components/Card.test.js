import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { card as cardData } from '../data/fixtures';

describe('Card', () => {
    const props = { card: cardData };
    const card = shallow(<Card {...props} />);

    it('shows the prompt', () => {
        expect(card.find('.card-prompt').text()).toEqual(props.card.prompt);
    });

    it('starts with a not `reveal` state', () => {
        expect(card.state().reveal).toBe(false);
    });

    it('applies the `text-hidden` class to the answer', () => {
        expect(card.find('.card-answer .text-hidden').exists()).toBe(true);
    });

    describe('when clicking on the card', () => {
        beforeEach(() => {
            card.simulate('click');
        });

        it('updates `reveal` to be true', () => {
            expect(card.state().reveal).toBe(true);
        });

        it('applies the `text-reveal` class to the answer', () => {
            expect(card.find('.card-answer .text-revealed').exists()).toBe(
                true
            );
        });
    });
});
