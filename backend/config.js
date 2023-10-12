import dotenv from "dotenv";


dotenv.config({path: "./.env"});

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://base-de-datos1.ypdk7cs.mongodb.net/testdb";
export const PORT = process.env.PORT || 3000;

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET



