import { Router } from "express";
import { ProductRoutes } from "./product-fake/route";
import { ProductCategoryRoutes } from "./product-categoria/route";

export const ProductMainRoutes = () => {
  const router = Router();

  router.use("/",ProductRoutes );
  router.use("/category",ProductCategoryRoutes)
  return router;
};
