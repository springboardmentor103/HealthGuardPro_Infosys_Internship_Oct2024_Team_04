const mongoose = require('mongoose');

const otpUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: String },
  otpExpiry: { type: Date }
});

const OtpUser = mongoose.model('OtpUser', otpUserSchema);


module.exports = OtpUser;
