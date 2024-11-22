import { Router } from "express";
import { ProductController } from "./productController";


const router = Router();
const productController= new ProductController();


router.get("/",(req,res)=>productController.GetProductAll(req,res));
router.get("/:id",(req,res)=>productController.GetProductOne(req,res));
router.post("/fake",(req,res)=>productController.PostProductAll(req,res));
router.post("/",(req,res)=>productController.PostProductOne(req,res));
router.put("/:id",(req,res)=>productController.PutProductOne(req,res));
router.delete("/:id",(req,res)=>productController.DeleteProductOne(req,res));
router.delete("/fake",(req,res)=>productController.DeleteProductAll(req,res));


router.post("/fake-global",(req,res)=>productController.InsertSeedProducts(req,res));



export const ProductRoutes = router;
