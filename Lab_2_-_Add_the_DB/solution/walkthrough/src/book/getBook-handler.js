const book = require('../lib/book');

module.exports.handler = async (event, context) => {

  const result = await book.getAll();

  return {
    statusCode: 200,
    body: JSON.stringify({
      books: result && result.Items || []
    })
  };

};