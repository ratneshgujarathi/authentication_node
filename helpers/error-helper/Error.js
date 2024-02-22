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
class ValidationError extends BaseError {
  constructor(data) {
    let description = "required validation failed on: " + data.map(e => e.field).join(', ');
    super('MISSING FIELDS', HttpStatusCode.BAD_REQUEST, true, description);
  }
}
module.exports = { APIError, ValidationError }