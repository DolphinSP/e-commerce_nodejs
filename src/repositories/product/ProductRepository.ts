import { Service } from "typedi";
import { IProduct, Product, ProductModel } from "../../db/models/product/product.model";


@Service()
export class ProductRepository {

  async getAll(): Promise<IProduct[] | null> {
    return await ProductModel.find();
  }
  async getOne(uuid:any): Promise<IProduct | null> {
    return await ProductModel.findById(uuid);
  }


  async postProductAll(product:()=>Product[]): Promise<IProduct[]> {
    const products=product();
    return await ProductModel.insertMany(products);
  }

  async postProductOne(product:Product): Promise<IProduct> {

    return await ProductModel.create(product);
  }

  async updateProductOne(uuid:string,updateData:Product){
    const filter={_id:uuid};
    return await ProductModel.updateOne(filter,updateData);
  }

  async deleteProductOne(uuid:string){
    const filter={_id:uuid}
    return await ProductModel.deleteOne(filter);
  }

  async deleteProductAll(){
    return await ProductModel.deleteMany();
  }
}