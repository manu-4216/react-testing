import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Stack extends Component {
    render() {
        const { title, cards } = this.props.stack;

        return (
            <div>
                <Link to="/">Home</Link>
                <h3>{title}</h3>
                <br />
                {cards.map(card => <div key={card.id}>{card.prompt}</div>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    stack: state
});

export default connect(
    mapStateToProps,
    null
)(Stack);
