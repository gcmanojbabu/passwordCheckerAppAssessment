const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passwordSchema = new Schema({
  id: {
    type: String,
  },
  password: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model("password", passwordSchema);
