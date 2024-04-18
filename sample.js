const express = require("express");
const app = express();
const mongoose = require("mongoose");

const notepadRoute = require("./routes/notepadroute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/notepad");

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});



mongoose.connection.on("error", (err) => {
  console.log("error in mongoDB:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.use(express.static("public"));
app.use(express.static("views"))

app.use("/", notepadRoute);

const PORT = 3001;
app.listen(PORT, () => {
  console.log("server started");
});

