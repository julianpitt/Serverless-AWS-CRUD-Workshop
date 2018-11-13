// Require the AWS SDK
const AWS = require('aws-sdk');
// Instantiate a new document client to talk to DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient();
const { queryExpression, updateExpression } = require('./dynamodb');

const tableName = ;// TODO: Insert table name from environment variable;

// This method is done for you
module.exports.create = (title, author, year) => {

    const book = {
        title,
        author,
        year,
        bookId: uuid()
    };

    let params = {
        TableName: tableName,
        Item: book
    };

    return documentClient.put(params).promise();
};

module.exports.update = (bookId, title, author, year) => {
    // TODO: Update an existing record in DynamoDB using the update method
};
module.exports.getAll = () => {
    // TODO: Get all the records in the table using scan method
};
module.exports.get = (bookId) => {
    // TODO: Get a single record with the hash key and the query method
};
module.exports.delete = (bookId) => {
    // TODO: Delete a book with the hash key using the delete method
};