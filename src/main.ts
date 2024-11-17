import "reflect-metadata";

import { json } from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import { Container } from "typedi";

import { connectMongoDB } from "./config";
import authController from "./controllers/authController";
import PartnerModel from "./db/models/partner";

dotenv.config();

function addDependencies() {
  // Adding mongo dependency to the IoC container
  console.log(
    "📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕📕Registering partern Model dependency"
  );
  Container.set("PartnerModel", PartnerModel);
}

async function createServer() {
  const app = express();
  app.use(cors());
  app.use(json());

  const port = process.env.PORT || 4400;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  app.use("/api", authController);
}

async function main() {
  try {
    addDependencies();
    await connectMongoDB();
    await createServer();
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
  }
}

main();
