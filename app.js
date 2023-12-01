const express = require("express");

const cors = require("cors");

const sendEmail = require("./routes/api/sendEmail");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/sendemail", sendEmail);

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

module.exports = app;
