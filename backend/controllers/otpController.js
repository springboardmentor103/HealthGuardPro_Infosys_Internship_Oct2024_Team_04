const crypto = require('crypto');
const nodemailer = require('nodemailer');
const OtpUser = require('../models/otpUser'); // Import OtpUser model

// Setup Nodemailer transporter using environment variables for security
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use the email from the .env file
    pass: process.env.EMAIL_PASS // Use the password from the .env file (app-specific password)
  }
});

// Send OTP to email
exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }

  try {
    // Generate a random 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();

    // Save OTP and email to MongoDB (using OtpUser model)
    const user = await OtpUser.findOneAndUpdate(
      { email },
      { otp, otpExpiry: Date.now() + 10 * 60 * 1000 }, // 10 minutes expiry
      { upsert: true, new: true }
    );

    // Log the user for debugging or validation purposes
    console.log('Updated User Document:', user);

    // Prepare the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use email from .env file
      to: email,
      subject: 'OTP for Forgot Password',
      text: `Your OTP is: ${otp}. It will expire in 10 minutes.`
    };

    // Send the OTP email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error details:', error); // Log the full error object for debugging
        return res.status(500).json({ message: 'Error sending email', error: error.message });
      }
      // The info object contains the response details from the email server
      console.log('Email sent:', info);  // Log info to see the email response
      res.status(200).json({ message: 'OTP sent successfully', user }); // Optionally include user in the response
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required' });
  }

  try {
    // Find the user by email using the OtpUser model
    const user = await OtpUser.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Email not found' });
    }

    // Check if the OTP is correct
    if (user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Check if the OTP has expired
    if (Date.now() > user.otpExpiry) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    // Log user for debugging or validation purposes
    console.log('Verified User Document:', user);

    // OTP is valid
    res.status(200).json({ message: 'OTP verified successfully', user }); // Optionally include user in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
