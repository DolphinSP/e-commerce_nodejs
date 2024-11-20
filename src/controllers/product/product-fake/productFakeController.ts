import { Request, Response } from "express";

import { seedProduct } from "../../../db/seeds";
import { ProductModel } from "../../../db/models/product.model";

export const GetProductFake = async (req: Request, res: Response) => {
  try {
    const ReadProductFake = await ProductModel.find();
    res.status(200).json({ product: ReadProductFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
};

export const PostProductFake = async (req: Request, res: Response) => {
  try {
    const InsertProductFake = await ProductModel.insertMany(seedProduct());

    res.status(200).json({ product: InsertProductFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
};

export const DeleteProductFake = async (req: Request, res: Response) => {
  try {
    const DeleteProductFake = await ProductModel.deleteMany();

    res.status(200).json({ product: DeleteProductFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
};
