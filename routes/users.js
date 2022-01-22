var express = require("express");
var router = express.Router();
const { dbUrl, mongodb, MongoClient } = require("../dbConfig");

/* GET users listing. */
router.post("/register", async (req, res) => {
  // res.send("respond with a resource");
  const client = await MongoClient.connect(dbUrl);
  try {
    let db = await client.db("my-students");
    let user = await db
      .collection("details")
      .findOne({ email: req.body.email });
    if (user) {
      res.json({
        message: "User Exsist!! ",
      });
    } else {
      let document = await db.collection("details").insertOne(req.body);
      res.json({
        message: "success register!!",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

router.get("/all", async (req, res) => {
  // res.send("respond with a resource");
  const client = await MongoClient.connect(dbUrl);
  try {
    let db = await client.db("my-students");
    let document = await db.collection("details").find().toArray();
    res.json({
      message: "success data!!",
      data: document,
    });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

router.put("/edit/:id", async (req, res) => {
  const client = await MongoClient.connect(dbUrl);
  try {
    let db = await client.db("my-students");
    let document = await db
      .collection("details")
      .findOneAndReplace({ _id: mongodb.ObjectId(req.params.id) }, req.body);
    console.log(document);
    if (document.value) {
      res.json({
        message: "updated",
      });
    } else {
      res.json({
        message: "error id",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

router.delete("/delete/:id", async (req, res) => {
  const client = await MongoClient.connect(dbUrl);
  try {
    let db = await client.db("my-students");
    let document = await db
      .collection("details")
      .findOneAndDelete({ _id: mongodb.ObjectId(req.params.id) });
    console.log(document);
    if (document.value) {
      res.json({
        message: "deleted",
      });
    } else {
      res.json({
        message: "error id",
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});

module.exports = router;
