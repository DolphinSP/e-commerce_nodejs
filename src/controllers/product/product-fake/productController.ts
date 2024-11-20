import { Request, Response } from "express";
import { seedProduct } from "../../../db/seeds";
import { BaseController } from "../../baseController";

export class ProductController extends BaseController{


    async GetProductFake(req: Request, res: Response) {

        try {
            const ReadProductFake = await this.productRepository.getAll();
            if(!ReadProductFake) return res.status(400).json({error:'Product not found'});
            res.status(200).json({ product: ReadProductFake });
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