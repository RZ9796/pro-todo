const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
mongoose.connect(process.env.MONGO_URL);
const app = express();

app.use(express.json());
app.use(cors());
// route
app.use("/api/admin", require("./routes/todoRoute"));

mongoose.connection.once("open", () => {
  console.log("mongo connected");
  app.listen(5000, console.log("server running"));
});
