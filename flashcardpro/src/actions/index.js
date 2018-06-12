export const SET_STACK = 'SET_STACK';
export const LOAD_STACKS = 'LOAD_STACKS';

export const setStack = stack => ({
    type: SET_STACK,
    stack
});

export const loadStacks = stacks => ({
    type: LOAD_STACKS,
    stacks
});
