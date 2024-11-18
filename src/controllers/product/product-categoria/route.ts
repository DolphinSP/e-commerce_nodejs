import { Router } from "express";

import {
  DeleteProductCategoryFake,
  GetProductCategoryFake,
  PostProductCategoryFake,
} from "./productCategoriaController";

const router = Router();

router.get("/", GetProductCategoryFake);
router.post("/", PostProductCategoryFake);
router.delete("/", DeleteProductCategoryFake);

export const ProductCategoryRoutes = router;
