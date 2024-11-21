import { Service } from "typedi";
import { ISeedProduct } from "../../db/seeds";
import { IProduct, ProductModel } from "../../db/models/product/product.model";


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
