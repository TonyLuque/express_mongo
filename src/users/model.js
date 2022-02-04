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

userSchema.static({
  create: async function (data) {
    try {
      const user = new this(data);
      return await user.save();
    } catch (error) {
      console.error("Error model create | ", error.message);
    }
  },
});

module.exports = mongoose.model("User", userSchema);
