//Dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log(`Successfully connected to Mongo`);
});


const messageRouter = require("./routes/messageRoutes");
app.use("/messages", messageRouter );




app.listen(PORT, function () {
  console.log(`App server listening on ${PORT}`);
});
