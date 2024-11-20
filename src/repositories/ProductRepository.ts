import { Service } from "typedi";
import { IProduct, ProductModel } from "../db/models/product.model";
import { ISeedProduct } from "../db/seeds";

@Service()
export class ProductRepository {

  async postProduct(product:()=>ISeedProduct[]): Promise<IProduct[]> {
    const products=product();
    return await ProductModel.insertMany(products);
    
  }

  async getAll(): Promise<IProduct[] | null> {
    return await ProductModel.find();
  }

  async deleteProductAll(){
    return await ProductModel.deleteMany();
  }
}
