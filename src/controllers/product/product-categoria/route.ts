import { Router } from "express";
import { ProductCategoryController } from "./productCategoriaController";


const router = Router();
const productCategoryController= new ProductCategoryController();


router.get("/",(req,res)=>productCategoryController.GetProductCategoryAll(req,res));
router.get("/:id",(req,res)=>productCategoryController.GetProductCategoryOne(req,res));
router.post("/fake",(req,res)=>productCategoryController.PostProductCategoryAll(req,res));
router.post("/",(req,res)=>productCategoryController.PostProductCategoryOne(req,res));
router.put("/:id",(req,res)=>productCategoryController.PutProductCategoryOne(req,res));
router.delete("/:id",(req,res)=>productCategoryController.DeleteProductOne(req,res));
router.delete("/fake",(req,res)=>productCategoryController.DeleteProductAll(req,res));



export const ProductCategoryRoutes = router;
