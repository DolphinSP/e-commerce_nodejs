// models/product.ts
import mongoose, { Document, Schema } from "mongoose";

export type Product = {
  ProductName: string;
  Price: string;
};

// Let's extend Document using our Product type
interface IProduct extends Document, Product {}

const productSchema: Schema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: false,
  },
});

export const ProductModel = mongoose.model<IProduct>("Product", productSchema);
