import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the flashcard pro title', () => {
        const appTitle = 'Flashcard Pro';
        expect(app.find('h2').text()).toEqual(appTitle);
    });

    it('renders the stacklist', () => {
        expect(app.find('Connect(Stacklist)').exists()).toBe(true);
    });

    it('renders a link to create new stacks', () => {
        const createStackText = 'Create a New Stack';
        //console.log(app.debug());
        expect(app.find('Link h4').text()).toEqual(createStackText);
    });
});
