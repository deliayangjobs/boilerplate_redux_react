import React, { Component } from 'react';

import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    //return got set to this.props
    return {
        books: state.books
    };
}

// returns will be this.props
// can call this.props.selectBook
function mapDispatchToProps(dispatch) {
    //whenever action selectBook is called
    //bindActionCreators get the result to all reducers, with dispatch
    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
