const express = require("express");

const { sendEmail } = require("../../controllers/sendEmail");

const validateBody = require("../../helpers/validateBody");

const { validateSchema } = require("../../Schemas/validate");

const router = express.Router();

router.post("/", validateBody(validateSchema), sendEmail);



module.exports = router;
