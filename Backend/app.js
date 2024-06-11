const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");

const PORT = 5000;

app.use(bodyparser.json());
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
//mongodb connection
const { HandleMOngoDb } = require("./mongodb/database");
HandleMOngoDb("mongodb://localhost:27017/EmployeeDetails")
  .then(() => console.log("connected to mongodb"))
  .catch(() => console.log("failed to connect to mongodb"));

const indexRouter = require("./routes/index");

// app.use("/", indexRouter);
const { insertdata } = require("./Controllers/connection");
app.post("/", insertdata);

// listening port
app.listen(PORT, () => {
  console.log(`port is running on  ${PORT}`);
});
