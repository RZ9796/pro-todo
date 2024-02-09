const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
mongoose.connect(process.env.MONGO_URL);
const app = express();

const path = require("path");
app.use(express.static(path.join(__dirname, "dist"))); //
app.use(express.json());
app.use(cors());
// route
app.use("/api/admin", require("./routes/todoRoute"));
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

mongoose.connection.once("open", () => {
  console.log("mongo connected");
  app.listen(5000, console.log("server running"));
});
