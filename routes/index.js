var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const { Email, Student } = require("../Schema");
const { dbUrl, mongodb, MongoClient } = require("../dbConfig");

mongoose.connect(dbUrl);
/* GET home page. */
router.get("/", async (req, res) => {
  const emails = await Email.find();
  res.send(emails);
});

module.exports = router;
