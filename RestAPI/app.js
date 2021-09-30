const express = require("express");

const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const cors = require('cors');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.json())

// Middlewares
// app.use("/posts", () => {
//   console.log("This is a middleware running for posts");
// });

// app.use("/", () => {
//     console.log("This is a middleware running for home");
//   });

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Import
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);
// app.use("/specific", postsRoute);

// app.get("/posts", (req, res) => {
//   res.send("We are on posts");
// });

// Connect To DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("connected to DB!")
);

// HOW TO WE START LISTENING TO THE SERVER
app.listen(3000);

