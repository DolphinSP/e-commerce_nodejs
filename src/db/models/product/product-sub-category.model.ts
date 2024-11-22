// models/product.ts
import mongoose, { Document, Schema } from "mongoose";

export type SubCategory = {
  name: string;
  description: string;
  parentCategory:string;
  createdAt:Date;
  updatedAt:Date;
};
export const SubCategoryCollection = 'SubCategory'

export interface ISubCategory extends Document, SubCategory {}

const subCategorySchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  parentCategory:{
    type:Schema.Types.ObjectId,
    ref:"Category",
    require:true
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

export const SubCategoryModel = mongoose.model<ISubCategory>(SubCategoryCollection, subCategorySchema);
export type SubCategoryModelType = typeof SubCategoryModel;
