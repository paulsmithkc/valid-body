const Joi = require('joi');
const { RequestHandler } = require('express');

/**
 * Uses Joi to validate the request body against a schema
 * and updates the body to the sanitized value.
 *
 * Calls the next middleware if body is valid.
 * Sends a 400 response if the body is invalid.
 *
 * @param {Joi.ObjectSchema} schema
 * @returns {RequestHandler} a middleware
 */
function validBody(schema) {
  return (req, res, next) => {
    const validateResult = schema
      .required()
      .label('req.body')
      .validate(req.body, { abortEarly: false });

    if (validateResult.error) {
      validateResult.error.status = 400;
      return next(validateResult.error);
    } else {
      req.body = validateResult.value;
      return next();
    }
  };
}

module.exports = validBody;
