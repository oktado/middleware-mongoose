const express = require("express");
const Router = require("./routes");
const db = require("./config/connectionAtlas");
const errorHandler = require("./middleware/errorHandler");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Router);
app.use(errorHandler);

app.listen((PORT = 5000), () => {
  console.log(`server ready on ${PORT}`);
});
