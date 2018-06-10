import React, { Component } from 'react';
import { connect } from 'react-redux';
import stacks from '../data/stacks.json';
import Link from 'react-router-dom/Link';
import { setStack } from '../actions';

class Stacklist extends Component {
    render() {
        return (
            <div>
                {stacks.map(stack => (
                    <Link
                        to="/stack"
                        key={stack.id}
                        onClick={() => this.props.setStack(stack)}
                    >
                        <h4>{stack.title}</h4>
                    </Link>
                ))}
            </div>
        );
    }
}

export default connect(
    null,
    { setStack }
)(Stacklist);
