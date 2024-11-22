import { Request, Response } from "express";
import { BaseController } from "../../baseController";
import { isValidObjectId } from "mongoose";
import { seedProductSubCategory } from "../../../db/seeds/product/seedProductSubCategory";
import { SubCategory } from "../../../db/models/product/product-sub-category.model";

export class ProductSubCategoryController extends BaseController{


    async GetProductSubCategoryAll(req: Request, res: Response) {

        try {
            const ReadProductSubCategoryAll = await this.subCategoryRepository.getAll();
            if(!ReadProductSubCategoryAll) return res.status(400).json({error:'SubCategory not found'});
            res.status(200).json({ subCategory: ReadProductSubCategoryAll });
          } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Server Error" });
          }
    }

    async GetProductSubCategoryOne(req: Request, res: Response) {

          const uuid=req.params.id;
          if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});

      try {
          const ReadProductSubCategoryOne = await this.subCategoryRepository.getOne(uuid);
          console.log(ReadProductSubCategoryOne);
          
          if(!ReadProductSubCategoryOne) return res.status(400).json({error:'subCategory not found'});
          res.status(200).json({ subCategoryOne: ReadProductSubCategoryOne });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
  }

    async PostProductSubCategoryAll (req: Request, res: Response){

        try {
          const InsertProductSubCategoryAll = await this.subCategoryRepository.postSubCategoryAll(seedProductSubCategory);
          if(!InsertProductSubCategoryAll) return res.status(400).json({error:'subCategory not found'});
      
          res.status(200).json({ subCategory: InsertProductSubCategoryAll });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
    };

    async PostProductSubCategoryOne (req: Request, res: Response){

      const body:SubCategory= req.body;
      if(!body || Object.keys(body).length===0) return res.status(400).json({error: "data not found - subCategory"});

      if(!isValidObjectId(body.parentCategory)) return res.status(400).json({error:"category incorrect"});
      
      try {
        const InsertProductSubCategoryOne = await this.subCategoryRepository.postSubCategoryOne(body);
        if(!InsertProductSubCategoryOne) return res.status(400).json({error:'subCategory not found'});
    
        res.status(200).json({ subCategory: InsertProductSubCategoryOne });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }
  };

    async PutProductSubCategoryOne(req: Request, res: Response) {

      const uuid=req.params.id;
      const body:SubCategory=req.body;
      
      if(!isValidObjectId(uuid))                return res.status(400).json({error:'uuid invalid or not found'});
      if(!body || Object.keys(body).length===0) return res.status(400).json({error: "data not found - subCategory"});
      if(!isValidObjectId(body.parentCategory)) return res.status(400).json({error:"category incorrect"});

      try {
          const PutProductSubCategory = await this.subCategoryRepository.updateSubCategoryOne(uuid,body);
          if(!PutProductSubCategory ) return res.status(400).json({error:'subCategory not found'});
          res.status(200).json({ Category: PutProductSubCategory  });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server Error" });
        }
      }

    async DeleteProductSubCategoryAll (req: Request, res: Response)  {

      try {
        const DeleteProductSubCategoryAll = await this.subCategoryRepository.deleteSubCategoryAll()
        if(!DeleteProductSubCategoryAll) return res.status(400).json({error:'subCategory not found'});
    
        res.status(200).json({ subCategory: DeleteProductSubCategoryAll });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }

    }

    async DeleteProductSubCategoryOne (req: Request, res: Response)  {
      
      const uuid=req.params.id;
      if(!isValidObjectId(uuid)) return res.status(400).json({error:'uuid invalid or not found'});

      try {
        const DeleteProductSubCategoryOne = await this.subCategoryRepository.deleteSubCategoryOne(uuid)
        if(!DeleteProductSubCategoryOne) return res.status(400).json({error:'subCategory not found'});
    
        res.status(200).json({ subCategory: DeleteProductSubCategoryOne });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
      }

    }
}