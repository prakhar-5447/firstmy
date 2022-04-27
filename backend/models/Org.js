const mongoose = require("mongoose");
const { Schema } = mongoose;

const orgSchema = new Schema({
  orgName: { type: String, required: true },
  owner: { type: String, required: true },
  email: { type: String, unique: true , required: true},
  password: { type: String, required: true },
  address: { type: String, required: true},
  contact: { type: String,unique:true, required: true },
});

const User = mongoose.model("org", orgSchema);
module.exports = User;
