import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

//components
import BookList from './component/BookList';
import AddBook from './component/AddBook';


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
