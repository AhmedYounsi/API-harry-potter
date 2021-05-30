const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");

var routes = require("./routes/route");
app.use(cors());
app.use("/api", routes);

// INIT PORT
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + "/build/"));

// handle production
if (process.env.NODE_ENV === "production") {
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });
} else {
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
