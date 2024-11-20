// models/product.ts
import mongoose, { Document, Schema } from "mongoose";

export type Product = {
  ProductName: string;
  description:string;
  Price: number;
  stock:number;
  subcategory:string;
  images:string[];
  createdAt:Date;
  UpdatedAt:Date;
};
export const ProductCollection = 'Product'

export interface IProduct extends Document, Product {}

const productSchema: Schema = new Schema({
  ProductName: {
    type: String,
    required: true,
  },
  description: {
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
  stock: {
    type: Number,
    required: false,
    set: (value: string | number) => {
      // Convierte el valor a número si es un string
      return typeof value === "string" ? parseFloat(value) : value;
    },
  },
  SubCategory:{
    type:Schema.Types.ObjectId,
    ref:"SubCategory"
  },
  images:{
    type:[String],
    default:[]
  },
  createdAt:{
    type: Date,
    required: true,
    default:Date.now,
  },
  updatedAt:{
    type: Date,
    required: true,
    default:Date.now,
  }
});

export const ProductModel = mongoose.model<IProduct>(ProductCollection, productSchema);
export type ProductModelType = typeof ProductModel;
