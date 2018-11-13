const book = require('../lib/book');

module.exports.handler = async (event, context) => {

  const bookObj = event.body && JSON.parse(event.body).book;

  if (!bookObj) {
    console.log(bookObj);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'No book passed through'
      })
    };
  }

  const result = await book.create(bookObj);

  return {
    statusCode: result ? 201 : 500,
    body: JSON.stringify({
      message: 'Create successful'
    })
  };

};