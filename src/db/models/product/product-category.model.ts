// models/product.ts
import mongoose, { Document, Schema } from "mongoose";

export type Category = {
  name: string;
  description: string;
  createdAt:Date;
  updatedAt:Date;
};
export const CategoryCollection = 'Category'

export interface ICategory extends Document, Category {}

const categorySchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "El campo name es obligatorio"],
  },
  description: {
    type: String,
    required: [true,"El campo `description` es obligatorio"],
  },
  createdAt:{
    type: Date,
    required: false,
    default:Date.now,
  },
  updatedAt:{
    type: Date,
    required: false,
    default:Date.now,
  }
});

export const CategoryModel = mongoose.model<ICategory>(CategoryCollection, categorySchema);
export type CategoryModelType = typeof CategoryModel;
