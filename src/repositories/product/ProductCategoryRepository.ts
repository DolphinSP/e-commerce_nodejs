import { Service } from "typedi";
import { Category, CategoryModel, ICategory } from "../../db/models/product/product-category.model";


@Service()
export class CategoryRepository {

  async getAll(): Promise<ICategory[] | null> {
    return await CategoryModel.find();
  }
  async getOne(uuid:any): Promise<ICategory | null> {
    return await CategoryModel.findById(uuid);
  }


  async postCategoryAll(category:()=>Category[]): Promise<ICategory[]> {
    const categories=category();
    return await CategoryModel.insertMany(categories);
  }

  async postCategoryOne(category:Category): Promise<ICategory> {

    return await CategoryModel.create(category);
  }

  async updateCategoryOne(uuid:any){
    return await CategoryModel.updateOne(uuid);
  }

  async deleteCategoryOne(uuid:any){
    return await CategoryModel.deleteOne(uuid);
  }

  async deleteCategoryAll(){
    return await CategoryModel.deleteMany();
  }
}