import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

class Stack extends Component {
    render() {
        const { title, cards } = this.props.stack;

        return (
            <div>
                <Link to="/" className="link-home">
                    <h4>Home</h4>
                </Link>
                <h3>{title}</h3>
                <hr />
                {cards && cards.map(card => <Card key={card.id} card={card} />)}
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
