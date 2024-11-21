import { Router } from "express";
import { DeleteProductCategoryFake, GetProductCategoryFake, PostProductCategoryFake } from "./productCategoriaFakeController";
import { ProductCategoryController } from "./productCategoriaController";


const router = Router();
const productCategoryController= new ProductCategoryController();

router.get("/fake", GetProductCategoryFake);
router.post("/fake", PostProductCategoryFake);
router.delete("/fake", DeleteProductCategoryFake);
router.get("/",(req,res)=>productCategoryController.GetProductCategoryAll);
router.get("/:id",(req,res)=>productCategoryController.GetProductCategoryOne);


export const ProductCategoryRoutes = router;
