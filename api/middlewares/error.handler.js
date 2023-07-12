// -- Catch any error
// -- Middleware error type
function logErrors(err, req, res, next) {
  next(err); // important to indicate that it is being passed to an error middleware, if the error is not passed, it means it's being sent to a normal middleware
  }

// -- Catch an error but It will create a format
function errorHandler(err, req, res, next) { // even if 'next' is not used in the code, it must be included here since an error middleware has all four parameters
  res.status(500).json({ // indicate that the error is a 500 Internal Server Error
  message: err.message, // show the error message to the client
  stack: err.stack, // show error information
  })
  }

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

const { ValidationError } = require('sequelize');

const sqlErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError)
    boomErrorHandler(boom.badRequest(err.message), req, res, next);
  next(err);
};

module.exports = { logErrors, errorHandler, boomErrorHandler, sqlErrorHandler }
