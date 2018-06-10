import React, { Component } from 'react';
import stacks from '../data/stacks.json';

class Stacklist extends Component {
    render() {
        return (
            <div>
                {stacks.map(stack => <h4 key={stack.id}>{stack.title}</h4>)}
            </div>
        );
    }
}

export default Stacklist;
