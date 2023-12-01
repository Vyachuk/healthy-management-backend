const { ctrlWrapper } = require("../helpers");
const { sendDataToEmail } = require("../helpers/elasticEmailSend");
const { sendMsgTelegram } = require("../helpers/sendMsgTelegram");

const sendData = (req, res, next) => {
  sendDataToEmail({ ...req.body });
  sendMsgTelegram({ ...req.body });
  res.json({ message: "The application has been successfully sent" });
};

module.exports = {
  sendData: ctrlWrapper(sendData),
};
