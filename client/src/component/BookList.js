import React from 'react';
import { getBookList } from '../queries';
import { graphql } from "react-apollo";

function BookList(props) {
    const displayBooks = () => {
        const { data } = props;
        if (data.loading) {
            return <div>Loading books...</div>
        } else {
            return data.books.map((book, index) => {
                return (
                    <li key={index}>{book.name}</li>
                );
            })
        }
    }
    return (
        <div className="BookList">
            <ul id="book-list">
                {displayBooks()}
            </ul>
        </div>
    );
}

export default graphql(getBookList)(BookList);
