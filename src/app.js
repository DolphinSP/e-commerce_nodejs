import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());

app.disable("x-powered-by");

export default app;
