// models/product.ts
import mongoose, { Document, Schema } from "mongoose";

export type ProductCategory = {
  ProductCategoryName: string;
  Description: string;
  Image: string;
};

// Let's extend Document using our ProductCategory type
interface IProductCategory extends Document, ProductCategory {}

const productCategorySchema: Schema = new Schema({
  ProductCategoryName: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: false,
  },
  Image: {
    type: String,
    required: false,
  },
});

export const ProductCategoryModel = mongoose.model<IProductCategory>(
  "ProductCategory",
  productCategorySchema
);
