// Require the AWS SDK
const AWS = require('aws-sdk');
// Instantiate a new document client to talk to DynamoDB
const documentClient = new AWS.DynamoDB.DocumentClient();

const tableName = ;//Insert table name from environment variable;

module.exports.create = (book) => {

    let params = {
        TableName: tableName,
        Item: book
    };

    // Create a book record in DynamDB using put
    return documentClient.put(params).promise();
};

module.exports.update = (book) => {
    // Update an existing record in DynamoDB using the update method
};
module.exports.getAll = () => {
    // Get all the records in the table using scan method
};
module.exports.get = (bookId) => {
    // Get a single record with the hash key and the query method
};
module.exports.delete = (bookId) => {
    // Delete a book with the hash key using the delete method
};