import React, { useState } from 'react';
import { getBookList } from '../queries';
import { graphql } from "react-apollo";
import BookDetails from './BookDetails';

function BookList(props) {
    const [selected, setSelectedBook] = useState(null);
    const displayBooks = () => {
        const { data } = props;
        if (data.loading) {
            return <div>Loading books...</div>
        } else {
            return data.books.map((book, index) => {
                return (
                    <li key={index} onClick={e => setSelectedBook(book.id)}>{book.name}</li>
                );
            })
        }
    }
    return (
        <div className="BookList">
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails bookId={selected}></BookDetails>
        </div>
    );
}

export default graphql(getBookList)(BookList);
