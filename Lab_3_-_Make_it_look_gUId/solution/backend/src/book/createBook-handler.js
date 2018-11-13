const book = require('../lib/book');

module.exports.handler = async (event, context) => {

  const bookObj = event.body && JSON.parse(event.body).book;

  if (!bookObj) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'No book passed through'
      })
    };
  }

  const { title, author, year } = bookObj;

  const result = await book.create(title, author, year);

  return {
    statusCode: result ? 201 : 500,
    body: JSON.stringify({
      message: 'Create successful'
    }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };

};