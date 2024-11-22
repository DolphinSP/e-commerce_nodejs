import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import mongoose, { isValidObjectId } from "mongoose";
import { seedProduct, seedProductCategory, seedProductSubCategory } from "../../../db/seeds";
import { Product } from "../../../db/models/product/product.model";

export class ProductController extends BaseController{


    async GetProductAll(req: Request, res: Response) {

        try {
            const ReadProductAll = await this.productRepository.getAll();
            if(!ReadProductAll) return res.status(400).json({error:'product not found'});
            res.status(200).json({ product: ReadProductAll });
          } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Server Error" });
          }
    }

    async GetProductOne(req: Request, res: Response) {

          const uuid=req.params.id;
          if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});

      try {
          const ReadProductOne = await this.productRepository.getOne(uuid);
          console.log(ReadProductOne);
          
          if(!ReadProductOne) return res.status(400).json({error:'Product not found'});
          res.status(200).json({ productOne: ReadProductOne });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
  }

    async PostProductAll (req: Request, res: Response){

        try {
          const InsertProductAll = await this.productRepository.postProductAll(seedProduct);
          if(!InsertProductAll) return res.status(400).json({error:'Product not found'});
      
          res.status(200).json({ product: InsertProductAll });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
    };

    async PostProductOne (req: Request, res: Response){

      const body:Product= req.body;
      console.log({productdata:body});
      
      if(!body || Object.keys(body).length===0) return res.status(400).json({error: "data not found - category"});
      if(!isValidObjectId(body.subcategory)) return res.status(400).json({error:"subCategory incorrect"});

      try {
        const InsertProductOne = await this.productRepository.postProductOne(body);
        if(!InsertProductOne) return res.status(400).json({error:'Product not found'});
    
        res.status(200).json({ product: InsertProductOne });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }
  };

    async PutProductOne(req: Request, res: Response) {

      const uuid=req.params.id;
      const body:Product=req.body;

      if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});
      if(!body || Object.keys(body).length===0) return res.status(400).json({error: "data not found - category"});
      if(!isValidObjectId(body.subcategory)) return res.status(400).json({error:"subCategory incorrect"});

      try {
          const PutProduct = await this.productRepository.updateProductOne(uuid,body);
          if(!PutProduct ) return res.status(400).json({error:'product not found'});
          res.status(200).json({ Product: PutProduct  });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
      }

    async DeleteProductAll (req: Request, res: Response)  {

      try {
        const DeleteProductAll = await this.productRepository.deleteProductAll()
        if(!DeleteProductAll) return res.status(400).json({error:'Product not found'});
    
        res.status(200).json({ product: DeleteProductAll });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }

    }

    async DeleteProductOne (req: Request, res: Response)  {
      
      const uuid=req.params.id;
      if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});

      try {
        const DeleteProductOne = await this.productRepository.deleteProductOne(uuid)
        if(!DeleteProductOne) return res.status(400).json({error:'Product not found'});
    
        res.status(200).json({ product: DeleteProductOne });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }

    }


    async InsertSeedProducts(req:Request, res:Response){

      const session= await mongoose.startSession();
      try {

        const [seedProduct,seedProductCategory,seedProductSubCategory]=req.body;
        
        
      } catch (error) {
        
      }
    }
}