// Require the AWS SDK
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
// Instantiate a new document client to talk to DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.BOOK_TABLE_NAME;

module.exports.create = (book) => {
    let params = {
        TableName: tableName,
        Item: {
            ...book,
            bookId: uuid()
        }
    };

    return documentClient.put(params).promise();
};

module.exports.update = (book) => {
    let params = {
        TableName: tableName,
        Key: {
            bookId: `${book.id}`
        }
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