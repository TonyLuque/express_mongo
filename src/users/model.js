const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
    profile: { type: mongoose.Types.ObjectId },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
