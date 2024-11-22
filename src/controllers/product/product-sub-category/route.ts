import { Router } from "express";
import { ProductSubCategoryController } from "./productSubCategoryController";


const router = Router();
const productSubCategoryController= new ProductSubCategoryController();


router.get("/",(req,res)=>productSubCategoryController.GetProductSubCategoryAll(req,res));
router.get("/:id",(req,res)=>productSubCategoryController.GetProductSubCategoryOne(req,res));
router.post("/fake",(req,res)=>productSubCategoryController.PostProductSubCategoryAll(req,res));
router.post("/",(req,res)=>productSubCategoryController.PostProductSubCategoryOne(req,res));
router.put("/:id",(req,res)=>productSubCategoryController.PutProductSubCategoryOne(req,res));
router.delete("/:id",(req,res)=>productSubCategoryController.DeleteProductSubCategoryOne(req,res));
router.delete("/fake",(req,res)=>productSubCategoryController.DeleteProductSubCategoryAll(req,res));



export const ProductSubCategoryRoutes = router;
