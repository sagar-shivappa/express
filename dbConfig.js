const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbUrl =
  "mongodb+srv://admin123:admin123@sagarshivappa.7afcf.mongodb.net/test";

module.exports = { mongodb, MongoClient, dbUrl };
