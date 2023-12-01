const { ctrlWrapper } = require("../helpers");
const { sendDataToEmail } = require("../helpers/elasticEmailSend");

const sendData = (req, res, next) => {
  // console.log({ ...req.body });
  sendDataToEmail({ ...req.body });
  res.json({ message: "List was successfully sent" });
};

module.exports = {
  sendData: ctrlWrapper(sendData),
};
