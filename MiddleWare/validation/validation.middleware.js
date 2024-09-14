// // validationMiddleware.js

const { validationResult } = require('express-validator');

const validationMiddleware = (validations) => {

  return async (req, res, next) => {
    console.log(req.body)
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success:0, errors: errors.array() });
    }
    next();
  };
};

module.exports = validationMiddleware;
// validationMiddleware.js

// const { validationResult } = require('express-validator');

// const validationMiddleware = (validations) => {
//   return async (req, res, next) => {
//     // Check if the request content type is JSON
//     if (req.is('json')) {
//       console.log('Received JSON data:', req.body);
//       await Promise.all(validations.map(validation => validation.run(req)));
//     } else if (req.is('multipart/form-data')) {
//       console.log('Received form-data:', req.body);
//       // You might need to adjust this part based on your specific form-data structure
//       // e.g., if the form-data contains files, additional handling may be needed
//       await Promise.all(validations.map(validation => validation.run({ body: req.body })));
//     } else {
//       // Handle other content types if needed
//     }

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     next();
//   };
// };

// module.exports = validationMiddleware;


// validationMiddleware.js

// const { validationResult } = require('express-validator');
// const multer = require('multer');
// const upload = multer();

// const validationMiddleware = (validations) => {
//   return async (req, res, next) => {
//     // Check if the request content type is JSON
//     if (req.is('json')) {
//       console.log('Received JSON data:', req.body);
//       await Promise.all(validations.map(validation => validation.run(req)));
//     } else if (req.is('multipart/form-data')) {
//       // Use multer to parse form-data
//       upload.none()(req, res, async err => {
//         if (err) {
//           console.error('Error parsing form-data:', err);
//           return res.status(500).json({ error: 'Internal Server Error' });
//         }

//         console.log('Received form-data:', req.body);
//         // Perform validations
//         await Promise.all(validations.map(validation => validation.run({ body: req.body })));
//       });
//     } else {
//       // Handle other content types if needed
//     }

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     next();
//   };
// };

// module.exports = validationMiddleware;


 
  

// const { plainToClass } = require('class-transformer');
// const { validate, ValidationError } = require('class-validator');
// const { HttpException } = require('express');

// const validationMiddleware = (
//   type,
//   value,
//   skipMissingProperties = false,
//   whitelist = true,
//   forbidNonWhitelisted = true,
// ) => {
//   return (req, res, next) => {
//     validate(plainToClass(type, req[value]), { skipMissingProperties, whitelist, forbidNonWhitelisted })
//       .then((errors) => {
//         if (errors.length > 0) {
//           const message = errors.map((error) => Object.values(error.constraints)).join(', ');
//           next(new HttpException(400, message));
//         } else {
//           next();
//         }
//       })
//       .catch((err) => console.log('Validation Error', err));
//   };
// };

// module.exports = validationMiddleware;

