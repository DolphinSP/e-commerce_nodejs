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

  async updateCategoryOne(uuid:string,updateData:Category){
    const filter={_id:uuid};
    return await CategoryModel.updateOne(filter,updateData);
  }

  async deleteCategoryOne(uuid:string){
    const filter={_id:uuid}
    return await CategoryModel.deleteOne(filter);
  }

  async deleteCategoryAll(){
    return await CategoryModel.deleteMany();
  }
}