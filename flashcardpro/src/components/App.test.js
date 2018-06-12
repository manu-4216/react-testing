import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders the flashcard pro title', () => {
        const appTitle = 'Flashcard Pro';
        expect(app.find('h2').text()).toEqual(appTitle);
    });
});
