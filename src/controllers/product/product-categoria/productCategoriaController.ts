import { Request, Response } from "express";

import { ProductCategoryModel } from "../../../db/models/product-category.model";
import { seedProductCategory } from "../../../db/seeds/seedProductCategory";

export const GetProductCategoryFake = async (req: Request, res: Response) => {
  try {
    const ReadProductCategoryFake = await ProductCategoryModel.find();
    res.status(200).json({ product: ReadProductCategoryFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "ProductCategorys not found" });
  }
};

export const PostProductCategoryFake = async (req: Request, res: Response) => {
  try {
    const InsertProductCategoryFake = await ProductCategoryModel.insertMany(
      seedProductCategory()
    );

    res.status(200).json({ product: InsertProductCategoryFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
};

export const DeleteProductCategoryFake = async (
  req: Request,
  res: Response
) => {
  try {
    const DeleteProductCategoryFake = await ProductCategoryModel.deleteMany();

    res.status(200).json({ product: DeleteProductCategoryFake });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Products not found" });
  }
};
