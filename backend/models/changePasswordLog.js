const mongoose = require('mongoose');

// Schema for password change logs
const changePasswordLogSchema = new mongoose.Schema({
  email: { type: String, required: true },
  currentPassword: { type: String, required: true },  // Store the current password (hashed ideally)
  newPassword: { type: String, required: true },  // Store the new password (hashed ideally)
  
});

// Create a model from the schema
const ChangePasswordLog = mongoose.model('ChangePasswordLog', changePasswordLogSchema);

module.exports = ChangePasswordLog;