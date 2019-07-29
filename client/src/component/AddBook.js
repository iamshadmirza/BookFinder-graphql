import React, { useState } from 'react';
import { getAuthorQuery, addBookMutation, getBookList } from '../queries';
import { graphql, compose } from "react-apollo";

function AddBook(props) {
    const [name, setBookName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        props.addBookMutation({
            variables: {
                name,
                genre,
                authorId
            },
            refetchQueries: [{ query: getBookList }]
        });
    }

    const displayAuthors = () => {
        const data = props.getAuthorQuery;
        if (data.loading) {
            return <option disabled>Loading authors...</option>;
        }
        return data.authors.map(author => {
            return <option key={author.id} value={author.id}>{author.name}</option>;
        });
    }

    return (
        <form id="add-book" onSubmit={e => onSubmitForm(e)}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={e => setBookName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => setGenre(e.target.value)} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={e => setAuthorId(e.target.value)}>
                    <option>Select author:</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default compose(
    graphql(getAuthorQuery, { name: "getAuthorQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);