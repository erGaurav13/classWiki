const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  _id: {
    type: String,
    default:new mongoose.Types.ObjectId,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: String,
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;
