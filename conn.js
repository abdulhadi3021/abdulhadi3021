import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load the .env file

const Connection = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;  // Make sure this is correct

        console.log("MongoDB URI from .env:", mongoURI);  // Log the URI

        if (!mongoURI) {
            throw new Error("MongoDB URI is not defined in the .env file");
        }

        await mongoose.connect(mongoURI);  // Use mongoURI variable here
        console.log("Database connected");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
}

export default Connection;
