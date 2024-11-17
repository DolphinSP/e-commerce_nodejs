import express, { Request, Response } from "express";

import { ProductModel } from "../db/models/product";
import { seedProduct } from "../db/seeds";

const router = express.Router();

router.get("/test", (req: Request, res: Response) => {
  res.send("Hello World testeo");
});

router.get("/product-fake", async (req: Request, res: Response) => {
  try {
    const ReadProductFake = await ProductModel.find();
    res.status(200).json({ product: ReadProductFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
});

router.post("/product-fake", async (req: Request, res: Response) => {
  try {
    const InsertProductFake = await ProductModel.insertMany(seedProduct());

    res.status(200).json({ product: InsertProductFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
});

router.delete("/product-fake", async (req: Request, res: Response) => {
  try {
    const DeleteProductFake = await ProductModel.deleteMany();

    res.status(200).json({ product: DeleteProductFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
});

export default router;
