const express = require("express");

const { sendData } = require("../../controllers/sendData");

const validateBody = require("../../helpers/validateBody");

const { validateSchema } = require("../../Schemas/validate");

const router = express.Router();

router.post("/", validateBody(validateSchema), sendData);

module.exports = router;
