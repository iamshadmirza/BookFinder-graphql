import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from "react-apollo";

const getBookList = gql`
    {
        books{
            name,
            id
        }
    }
`;

function BookList(props) {
    const displayBooks = () => {
        const { data } = props
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
