const axios = require("axios");
const HttpError = require("./HttpError");

const TELEGRAM_API = "https://api.telegram.org/bot";

require("dotenv").config();

const { TELEGRAM_API_KEY, TELEGRAM_CHAT_ID } = process.env;

const sendMsgTelegram = async (data) => {
  const { name, email, phone, service, comment } = data;
  const telegramMessage = `Вітаю. Вам поступила нова заявка: \nІм'я: ${name}\nE-mail: ${email}\nТелефон: ${phone}\nПослуга: ${service}\n${
    comment && `Повідомлення: ${comment}`
  }`;

  try {
    const { data } = await axios.post(
      `${TELEGRAM_API}${TELEGRAM_API_KEY}/sendMessage`,
      {
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
      }
    );
    return data.ok;
  } catch (error) {
    throw HttpError(500, "Telegram is not working");
  }
};

module.exports = { sendMsgTelegram };
