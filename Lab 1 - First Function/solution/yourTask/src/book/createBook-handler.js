module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Create'
    })
  };

  callback(null, response);
};