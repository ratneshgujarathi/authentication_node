const {HttpStatusCode} = require('./error-constants');

// Define the BaseError class
class BaseError extends Error {
  constructor(name, httpCode, isOperational, description) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    this.description = description;

    Error.captureStackTrace(this);
  }
}

// Define the APIError class extending BaseError
class APIError extends BaseError {
  constructor(name, description = 'internal server error', httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true) {
    super(name.toUpperCase(), httpCode, isOperational, description);
  }
}
// Define Personalized error messages for each type of error
class HTTP400Error extends BaseError {
  constructor(description = 'bad request') {
    super('NOT FOUND', HttpStatusCode.BAD_REQUEST, true, description);
  }
}

class InternalError extends APIError{
  constructor(description = 'Internal Server Error'){
    super("INTERNAL SERVER ERROR",description, HttpStatusCode.INTERNAL_SERVER, true )
  }
}

module.exports = { HTTP400Error, APIError, InternalError }