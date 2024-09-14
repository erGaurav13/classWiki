const { body } = require("express-validator");

const createUserValidations = [
  body("username").isString().withMessage("Please provide a valid string "),
  body("username").notEmpty(),

  body("email").isEmail(),
  body("email").notEmpty().withMessage("Please provide a email string "),
  // Add other validations for req.body properties as needed
  // body("i").custom((value, { req }) => {
  //   if (!req.files) {
  //     throw new Error("File is required");
  //   }

  //   // Add additional checks for the file if needed
  //   // For example: Check file type, size, etc.

  //   return true;
  // }),
];

module.exports = { createUserValidations };
