import React from 'react';
import { shallow, mount } from 'enzyme';
import { StackList } from './StackList';
import { stacks } from '../data/fixtures';

describe('StackList', () => {
    describe('when it mounts', () => {
        describe('and it has already stacks', () => {
            const props = {
                stacks
            };
            let stackList = shallow(<StackList {...props} />);

            it('renders the existent stacks', () => {
                expect(stackList.find('Link').length).toBe(stacks.length);
            });
        });

        describe('and it has no stacks', () => {
            const props = {
                stacks: [],
                loadStacks: jest.fn()
            };
            let stackList = mount(<StackList {...props} />);

            it('calls `loadStacks`', () => {
                expect(props.loadStacks).toHaveBeenCalled();
            });
        });
    });
});
