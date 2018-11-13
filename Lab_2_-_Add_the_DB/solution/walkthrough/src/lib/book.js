// Require the AWS SDK
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
const { queryExpression, updateExpression } = require('./dynamodb');
// Instantiate a new document client to talk to DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.BOOK_TABLE_NAME;

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
    let params = {
        TableName: tableName,
        Key: {
            bookId: `${bookId}`
        },
        ...updateExpression({ title, author, year })
    };

    return documentClient.update(params).promise();
    // TODO: Update an existing record in DynamoDB using the update method
};

module.exports.getAll = () => {
    let params = {
        TableName: tableName
    };

    return documentClient.scan(params).promise();
};

module.exports.get = (bookId) => {
    let params = {
        TableName: tableName,
        Key: {
            bookId: bookId
        }
    };

    return documentClient.put(params).promise();
};

module.exports.delete = (bookId) => {
    let params = {
        TableName: tableName,
        Key: {
            bookId: bookId
        }
    };

    return documentClient.delete(params).promise();
};