import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Listen for the 'connected' event AFTER we initiate the connection
    mongoose.connection.on("connected", () => {
      console.log("Database connected successfully");
    });

    let mongodbURI = process.env.MONGODB_URI;
    const projectName = 'resume-builder';

    // Check if the mongodbURI environment variable is set
    if (!mongodbURI) {
      throw new Error("MONGODB_URI environment variable not set.");
    }

    // Trim trailing slash if exists
    if (mongodbURI.endsWith("/")) {
      mongodbURI = mongodbURI.slice(0, -1);
    }

    // Attempt to connect to MongoDB
    await mongoose.connect(`${mongodbURI}/${projectName}`);
    
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
};

export default connectDB;
