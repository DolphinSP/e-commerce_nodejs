import { Router } from "express";

import {UserRoute} from "./controllers/user/auth/route";
import { ProductMainRoutes } from "./controllers/product/route";

export const Routes = () => {
  const router = Router();

  router.use("/product", ProductMainRoutes());
  router.use("/users",UserRoute)
  return router;
};
