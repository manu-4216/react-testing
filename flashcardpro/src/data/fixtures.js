export const stack = {
    id: 0,
    title: 'test title',
    cards: [
        { id: 0, prompt: 'test prompt', answer: 'test answer' },
        { id: 1, prompt: 'test 2', answer: 'answer 2' }
    ]
};

const stack2 = {
    id: 0,
    title: 'another stack title',
    cards: [
        { id: 0, prompt: '2- test prompt', answer: '2- test answer' },
        { id: 1, prompt: '2- test 2', answer: '2- answer 2' }
    ]
};

export const stacks = [stack, stack2];
