var mongoose = require("mongoose");
var validator = require("validator");

var emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value) => {
      return validator.isEmail(value);
    },
  },
});

var studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
    default: 000000,
  },
});

const Student = mongoose.model("Student", studentSchema);
const Email = mongoose.model("Email", emailSchema);

module.exports = { Email, Student };
