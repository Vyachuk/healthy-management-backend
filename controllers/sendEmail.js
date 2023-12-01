const { ctrlWrapper } = require("../helpers");
const { sendDataToEmail } = require("../helpers/elasticEmailSend");

const sendEmail = (req, res, next) => {
  // console.log({ ...req.body });
  sendDataToEmail({ ...req.body });
  res.json({ message: "List was successfully sent" });
};

module.exports = {
  sendEmail: ctrlWrapper(sendEmail),
};
