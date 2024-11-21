import { Request, Response } from "express";
import { seedProduct } from "../../../db/seeds";
import { BaseController } from "../../baseController";

export class ProductCategoryController extends BaseController{


    async GetProductCategoryAll(req: Request, res: Response) {

        try {
            const ReadProductCategoryAll = await this.categoryRepository.getAll();
            if(!ReadProductCategoryAll) return res.status(400).json({error:'Category not found'});
            res.status(200).json({ category: ReadProductCategoryAll });
          } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Server Error" });
          }
    }

    async GetProductCategoryOne(req: Request, res: Response) {

      try {
          console.log(req.params.id);
          
          const ReadProductCategoryOne = await this.categoryRepository.getOne(req.params.id);
          if(!ReadProductCategoryOne) return res.status(400).json({error:'Category not found'});
          res.status(200).json({ categoryOne: ReadProductCategoryOne });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
  }

    async PostProductFake (req: Request, res: Response){

        try {
          const InsertProductFake = await this.productRepository.postProduct(seedProduct);
          if(!InsertProductFake) return res.status(400).json({error:'Product not found'});
      
          res.status(200).json({ product: InsertProductFake });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
    };

    async DeleteProductFake (req: Request, res: Response)  {
      
      try {
        const DeleteProductFake = await this.productRepository.deleteProductAll();
        if(!DeleteProductFake) return res.status(400).json({error:'Product not found'});
    
        res.status(200).json({ product: DeleteProductFake });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }

    }
}