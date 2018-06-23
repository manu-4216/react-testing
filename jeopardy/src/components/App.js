import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCategories } from '../actions';

class App extends Component {
    componentDidMount() {
        if (this.props.categories.length === 0) {
            fetch('http://jservice.io/api/categories?count=20')
                .then(response => response.json())
                .then(json => this.props.setCategories(json));
        }
    }

    render() {
        console.log(this.props.categories);

        return (
            <div>
                <h2>Jeopardy!</h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state
});

export default connect(
    mapStateToProps,
    { setCategories }
)(App);
