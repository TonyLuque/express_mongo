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

profileSchema.static({
  create: async function (data) {
    try {
      const profile = new this(data);
      return await profile.save();
    } catch (error) {
      console.error("Error model create | ", error.message);
    }
  },
});

module.exports = mongoose.model("Profile", profileSchema);
