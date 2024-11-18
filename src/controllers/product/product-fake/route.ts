import { Router } from "express";

import {
  DeleteProductFake,
  GetProductFake,
  PostProductFake,
} from "./productFakeController";

const router = Router();

router.get("/", GetProductFake);
router.post("/", PostProductFake);
router.delete("/", DeleteProductFake);

export const ProductRoutes = router;
