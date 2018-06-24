import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Category extends Component {
    constructor() {
        super();

        this.state = { clues: [] };
    }

    componentDidMount() {
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
            .then(response => response.json())
            .then(json => this.setState({ clues: json }));
    }

    render() {
        return (
            <div>
                <Link className="link-home" to="/">
                    <h2>Home</h2>
                </Link>
                <h2>{this.props.category.title}</h2>
                {this.state.clues.map(clue => {
                    return <Clue key={clue.id} clue={clue} />;
                })}
            </div>
        );
    }
}

const Clue = ({ clue }) => (
    <div>
        <div>{clue.question}</div>
        <div>{clue.answer}</div>
        <hr />
    </div>
);

const mapStateToProps = state => ({
    category: state.category
});

export default connect(
    mapStateToProps,
    null
)(Category);
