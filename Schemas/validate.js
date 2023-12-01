const Joi = require("joi");

const {
  nameRegexp,
  emailRegexp,
  phoneRegexp,
  commentRegexp,
  serviceVaild,
} = require("../constants/formValidate");

const validateSchema = Joi.object({
  name: Joi.string().pattern(nameRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  service: Joi.string()
    .valid(...serviceVaild)
    .required(),
  comment: Joi.string().pattern(commentRegexp),
});

module.exports = {
  validateSchema,
};
