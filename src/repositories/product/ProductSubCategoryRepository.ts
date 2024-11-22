import { Service } from "typedi";
import { ISubCategory, SubCategory, SubCategoryModel } from "../../db/models/product/product-sub-category.model";



@Service()
export class SubCategoryRepository {

  async getAll(): Promise<ISubCategory[] | null> {
    return await SubCategoryModel.find();
  }
  async getOne(uuid:string): Promise<ISubCategory | null> {
    return await SubCategoryModel.findById(uuid);
  }


  async postSubCategoryAll(subCategory:()=>SubCategory[]): Promise<ISubCategory[]> {
    const SubCategories=subCategory();
    return await SubCategoryModel.insertMany(SubCategories);
  }

  async postSubCategoryOne(subCategory:SubCategory): Promise<ISubCategory> {

    return await SubCategoryModel.create(subCategory);
  }

  async updateSubCategoryOne(uuid:string,updateData:SubCategory){
    const filter={_id:uuid};
    return await SubCategoryModel.updateOne(filter,updateData);
  }

  async deleteSubCategoryOne(uuid:string){
    const filter={_id:uuid}
    return await SubCategoryModel.deleteOne(filter);
  }

  async deleteSubCategoryAll(){
    return await SubCategoryModel.deleteMany();
  }
}