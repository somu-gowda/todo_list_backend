const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const router = require("./routes/ToDoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Successfully connected ");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
