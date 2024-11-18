import { Router } from "express";

import { ProductCategoryRoutes } from "./controllers/product/product-categoria/route";
import { ProductRoutes } from "./controllers/product/product-fake/route";

export const Routes = () => {
  const router = Router();

  router.use("/product-fake", ProductRoutes);
  router.use("/product-category-fake", ProductCategoryRoutes);

  return router;
};
