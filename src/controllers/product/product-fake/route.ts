import { Router } from "express";
import { ProductController } from "./productController";

const router = Router();
const productController=new ProductController();

router.get("/", (req,res)=> productController.GetProductFake(req,res));
router.post("/", (req,res)=> productController.PostProductFake(req,res));
router.delete("/", (req,res)=> productController.DeleteProductFake(req,res));

export const ProductRoutes = router;
