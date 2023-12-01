const express = require("express");

const cors = require("cors");

const sendData = require("./routes/api/sendData");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/senddata", sendData);

app.use("/api/wakeup", (req, res, next) => {
  res.json({ message: true });
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

//
const TelegramBot = require("node-telegram-bot-api");

require("dotenv").config();

const { TELEGRAM_API_KEY } = process.env;

const bot = new TelegramBot(process.env.TELEGRAM_API_KEY, {
  polling: true,
});

bot.on("polling_error", (err) => console.log(err.data.error.message));

bot.on("text", async (msg) => {
  console.log(msg.chat.id);
  await bot.sendMessage(msg.chat.id, msg.text);
});
//

module.exports = app;
