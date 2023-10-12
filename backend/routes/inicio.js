import { Router } from "express";
import { deleteInicio, getInicio, postInicio, putInicio } from "../controllers/inicio-controller.js";


export const rutasInicio = Router();

rutasInicio.get("/", getInicio);

rutasInicio.post("/", postInicio);

rutasInicio.put("/", putInicio);

rutasInicio.delete("/", deleteInicio);















