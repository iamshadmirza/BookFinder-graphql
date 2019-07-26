const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'book-store';

mongoose.connect(connectionUrl + '/' + databaseName, { useNewUrlParser: true }, (error, client) => {
    console.log({ error, client });
    if (error) {
        return console.log('Unable to connect to database');
    }
    console.log('connected to mongodb database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening to port 4000');
});