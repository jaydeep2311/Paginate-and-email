const mongoose = require("mongoose");
const users = new mongoose.Schema({
  id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String },
  email: { type: String, required: true },
  type: { type: String, required: true },
});
module.exports = mongoose.model("users", users);
