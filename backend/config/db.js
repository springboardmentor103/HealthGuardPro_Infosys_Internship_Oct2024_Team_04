const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error("No MongoDB connection string provided in MONGO_URI or MONGODB_URI");
    return;
  }

  try {
    await mongoose.connect(mongoUri, {
      // options noted as deprecated in newer drivers, kept for compatibility
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
