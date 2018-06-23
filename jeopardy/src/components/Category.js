import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Category extends Component {
    render() {
        return (
            <div>
                <Link className="link-home" to="/">
                    <h2>Home</h2>
                </Link>
                <h2>Category title</h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    category: state.category
});

export default connect(
    mapStateToProps,
    null
)(Category);
