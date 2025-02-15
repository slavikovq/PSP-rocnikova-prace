const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const ownerSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String,required: true, },
  role: {type: String,default: "owner", },
});


ownerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});


ownerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Owner = mongoose.model("Owner", ownerSchema);

module.exports = Owner;
