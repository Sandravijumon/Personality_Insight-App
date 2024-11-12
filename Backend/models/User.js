const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  empid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  phoneno: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  designation: { type: String, required: true },
  dob: { type: Date, required: true },
  comname: { type: String, required: true },
  password: { type: String, required: true },
  personalityPrediction: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
