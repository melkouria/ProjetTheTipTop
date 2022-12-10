const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const apiRoutes = require("./apiRoute/apiRoute");

const cors = require("cors");

let app = express();
let port = 7777;

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://34.28.122.68:4100");
  res.setHeader("Access-Control-Request-Method", '"');
  res.setHeader("Access-Control-Allow-Headers", '"');
  next();
});
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose
  .connect("mongodb://localhost:27017/PF", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conneté a la BDD");
  })
  .catch((err) => {
    console.log("Erreur de connexion", err);
  });

app.use("/", apiRoutes);
server.listen(7777, 'http://146.148.75.158'); // or server.listen(3001, '0.0.0.0'); for all interfaces
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
