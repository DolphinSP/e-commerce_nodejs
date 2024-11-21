import { Router } from "express";
import { ProductController } from "./productController";

const router = Router();
const productController=new ProductController();

router.get("/fake", (req,res)=> productController.GetProductFake(req,res));
router.post("/fake", (req,res)=> productController.PostProductFake(req,res));
router.delete("/fake", (req,res)=> productController.DeleteProductFake(req,res));

export const ProductRoutes = router;
