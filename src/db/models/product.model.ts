// models/product.ts
import mongoose, { Document, Schema } from "mongoose";

export type Product = {
  ProductName: string;
  Price: number;
};
export const ProductCollection = 'Product'

export interface IProduct extends Document, Product {}

const productSchema: Schema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: false,
    set: (value: string | number) => {
      // Convierte el valor a número si es un string
      return typeof value === "string" ? parseFloat(value) : value;
  },
  },
});

export const ProductModel = mongoose.model<IProduct>(ProductCollection, productSchema);
export type ProductModelType = typeof ProductModel;
