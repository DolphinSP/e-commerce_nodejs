import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { seedProductCategory } from "../../../db/seeds/product/seedProductCategory";
import { Category } from "../../../db/models/product/product-category.model";
import { isValidObjectId } from "mongoose";

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

          const uuid=req.params.id;
          if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});

      try {
          const ReadProductCategoryOne = await this.categoryRepository.getOne(uuid);
          console.log(ReadProductCategoryOne);
          
          if(!ReadProductCategoryOne) return res.status(400).json({error:'Category not found'});
          res.status(200).json({ categoryOne: ReadProductCategoryOne });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
  }

    async PostProductCategoryAll (req: Request, res: Response){

        try {
          const InsertProductCategoryAll = await this.categoryRepository.postCategoryAll(seedProductCategory);
          if(!InsertProductCategoryAll) return res.status(400).json({error:'Product not found'});
      
          res.status(200).json({ category: InsertProductCategoryAll });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
    };

    async PostProductCategoryOne (req: Request, res: Response){

      const body:Category= req.body;
      console.log({categorydata:body});
      
      if(!body || Object.keys(body).length===0) return res.status(400).json({error: "data not found - category"});

      try {
        const InsertProductCategoryOne = await this.categoryRepository.postCategoryOne(body);
        if(!InsertProductCategoryOne) return res.status(400).json({error:'Product not found'});
    
        res.status(200).json({ category: InsertProductCategoryOne });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }
  };

    async PutProductCategoryOne(req: Request, res: Response) {

      const uuid=req.params.id;
      const body:Category=req.body;
      if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});

      try {
          const PutProductCategory = await this.categoryRepository.updateCategoryOne(uuid,body);
          if(!PutProductCategory ) return res.status(400).json({error:'Category not found'});
          res.status(200).json({ Category: PutProductCategory  });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
      }

    async DeleteProductAll (req: Request, res: Response)  {

      try {
        const DeleteProductCategoryAll = await this.categoryRepository.deleteCategoryAll()
        if(!DeleteProductCategoryAll) return res.status(400).json({error:'Product not found'});
    
        res.status(200).json({ category: DeleteProductCategoryAll });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }

    }

    async DeleteProductOne (req: Request, res: Response)  {
      
      const uuid=req.params.id;
      if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});

      try {
        const DeleteProductCategoryAll = await this.categoryRepository.deleteCategoryOne(uuid)
        if(!DeleteProductCategoryAll) return res.status(400).json({error:'Product not found'});
    
        res.status(200).json({ category: DeleteProductCategoryAll });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }

    }
}