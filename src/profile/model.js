const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    secondName: { type: String },
    lastName: { type: String, required: true },
    secondLastName: { type: String },
    imageProfile: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
