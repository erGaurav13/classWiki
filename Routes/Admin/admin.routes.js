const router = require("express").Router();
const { adminController } = require("../../Controller/index");
const {
  createUserValidations,
} = require("../../Validations/admin/admin.validation");
const validationMiddleware = require("../../MiddleWare/validation/validation.middleware");


// ...........START 

router.post(
  "/create-admin",
  validationMiddleware(createUserValidations),
  adminController.createAdmin
);

module.exports = router;
