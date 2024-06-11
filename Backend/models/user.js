const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: "true",
  },
  email: {
    type: "string",
    required: "true",
  },
  phone: {
    type: "string",
    required: "true",
  },
  address: {
    type: "string",
    required: "true",
  },
});
module.exports = mongoose.model("user", UserSchema);
