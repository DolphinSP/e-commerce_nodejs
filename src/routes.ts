import { Router } from "express";

import { ProductRoutes } from "./controllers/product/route";

export const Routes = () => {
  const router = Router();

  router.use("/product-fake", ProductRoutes);

  return router;
};
