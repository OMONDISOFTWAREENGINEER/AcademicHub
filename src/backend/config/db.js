const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/academichub';
    
    // Check if it's a local or Atlas connection
    const isAtlas = mongoURI.includes('mongodb.net') || mongoURI.includes('mongodb+srv');
    
    mongoose.set('bufferCommands', false);

    const options = {
      serverSelectionTimeoutMS: 10000,
      // For local MongoDB - no special options needed
      ...(isAtlas ? {
        // For MongoDB Atlas
        retryWrites: true,
        w: 'majority'
      } : {})
    };

    const conn = await mongoose.connect(mongoURI, options);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    
    // Provide helpful error messages
    if (error.message.includes('SSL')) {
      console.log('SSL Connection Error - This usually means:');
      console.log('1. You\'re connecting to MongoDB Atlas but SSL is not properly configured');
      console.log('2. Your connection string might be missing required parameters');
      console.log('3. Try using mongodb+srv:// instead of mongodb:// for Atlas');
    }
    
    // Fail fast so requests don't hang and later throw 500s due to buffering
    process.exit(1);
  }
};

module.exports = connectDB; 