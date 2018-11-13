const book = require('../lib/book');

module.exports.handler = async (event, context) => {

  const bookId = event.body && JSON.parse(event.body).bookId;

  if (!bookId) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'No book ID passed through'
      })
    };
  }

  const result = await book.delete(bookId);

  return {
    statusCode: result ? 200 : 500,
    body: JSON.stringify({
      message: `Deleted book ${bookId}`
    }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};