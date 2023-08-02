const boom = require('@hapi/boom');

// --  Middleware no error type
// It is a dynamic middleware
function validatorHandler(schema, property) {
  // We use closures as a middleware creator
  return (req, res, next) => {
    // Depending what type of request is (req.body, req.params, req.query ) is how the data will be structured
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
