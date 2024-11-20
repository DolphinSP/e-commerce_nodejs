import { Router } from "express";

import { ProductCategoryRoutes } from "./controllers/product/product-categoria/route";
import { ProductRoutes } from "./controllers/product/product-fake/route";
import {UserRoute} from "./controllers/user/auth/route";

export const Routes = () => {
  const router = Router();

  router.use("/product-fake", ProductRoutes);
  router.use("/product-category-fake", ProductCategoryRoutes);
  router.use("/users",UserRoute)
  return router;
};
