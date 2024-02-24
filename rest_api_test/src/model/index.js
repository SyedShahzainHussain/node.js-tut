const mongoose = require("mongoose");
const validator = require("validator");

const StudentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "This email is already taken"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Enter the correct email");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    min: 11,
  },
});

const StudentsModel = new mongoose.model("studentsData", StudentsSchema);

module.exports = StudentsModel;