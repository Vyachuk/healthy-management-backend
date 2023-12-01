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

module.exports = app;
