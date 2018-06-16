import React from 'react';
import { shallow, mount } from 'enzyme';
import { StackList } from './StackList';
import { MemoryRouter } from 'react-router-dom';
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

            describe('and clicks on an item', () => {
                const props = {
                    stacks,
                    setStack: jest.fn()
                };

                // MemoryRouter is needed to provide context to Link
                // see: https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/testing.md
                let stackList = mount(
                    <MemoryRouter>
                        <StackList {...props} />
                    </MemoryRouter>
                );

                stackList
                    .find('Link')
                    .first()
                    .simulate('click');

                it('calls setStack on clicked item', () => {
                    expect(props.setStack).toHaveBeenCalled();
                });
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
