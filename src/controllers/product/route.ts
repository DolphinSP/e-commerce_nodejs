import { Router } from "express";
import { ProductCategoryRoutes } from "./product-category/route";
import { ProductSubCategoryRoutes } from "./product-sub-category/route";
import { ProductRoutes } from "./product/route";

export const ProductMainRoutes = () => {
  const router = Router();

  router.use("/",ProductRoutes);
  router.use("/category",ProductCategoryRoutes)
  router.use("/sub-category",ProductSubCategoryRoutes)
  return router;
};
