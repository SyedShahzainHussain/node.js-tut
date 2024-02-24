const express = require("express");
const router = express.Router();
const students = require("../model/index");
const multer = require("multer");

// ! upload image

const multerImage = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.filename + "-" + Date.now() + ".jpg");
    },
  }),
}).single("image");

router.post("/upload", multerImage, async (req, res) => {
  res.send("file");
});

// ! post students
router.post("/students", async (req, res) => {
  const student = new students(req.body);
  try {
    const response = await student.save();

    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error["message"]);
  }
});
//!get students
router.get("/students", async (req, res) => {
  try {
    const data = await students.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error["message"]);
  }
});
// ! get students by name
router.get("/students/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const data = await students.find({
      $or: [
        {
          name: { $regex: name },
        },
      ],
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error["message"]);
  }
});
// ! update api by id
router.put("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await students.findByIdAndUpdate(
      _id,
      { $set: { name: req.body.name } },
      { new: true }
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error["message"]);
  }
});
// ! deleted api by id
router.delete("/students/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await students.findByIdAndDelete(_id);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
