const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

// routes
const { adminRoutes } = require("./Routes/index");
const SubjectRoutes = require("./Routes/SubjectRoutes/Subject.Routes");
const ClassRoutes = require("./Routes/ClassRoutes");
const ChaptersRoutes = require("./Routes/ChapterRoutes/ChapterRoutes");
const TopicRoutes = require("./Routes/TopicRoutes/TopicRoutes");

// db
const connect = require("./config/db");
connect.connectDbMain();

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(fileUpload());
/************************************ API *************************************/

app.use("/v1/admin", adminRoutes);
app.use("/api/class", ClassRoutes);
app.use("/api/subject", SubjectRoutes);
app.use("/api/chapter", ChaptersRoutes);
app.use("/api/topic", TopicRoutes);
app.use("/", (req, res) => {
  console.log("response");
  res.send("Hello");
});

module.exports = app;
