# valid-body-joi
Express middleware for validating the request body with Joi.

## Install
```
npm install valid-body-joi
```

## Usage
Import the middleware and Joi as below:
```
const validBody = require('valid-body-joi');
const Joi = require('joi');
```

Define a schema:
```
const loginSchema = Joi.objectId({
  email: Joi.string().trim().email().required(),
  password: Joi.string().trim().required(),
})
```

Install the middleware on a route:
```
app.post('/api/auth/login', validBody(loginSchema), (req, res, next) => {
  const login = req.body;
  // ... 
});
```

## Implementation
1. The middleware validates the request body against the provided schema.

2. If request body is validated, the body is replaced by the sanitized data, and control passes to the next middleware.

3. Otherwise, a 400 response is sent.
