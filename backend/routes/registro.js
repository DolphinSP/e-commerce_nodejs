import { Router } from "express";
import { deleteRegistro, getRegistro, postRegistro, putRegistro, getPuntualRegistro } from "../controllers/registro-controller.js";


export const rutasRegistro = Router();

rutasRegistro.get("/registro", getRegistro);

rutasRegistro.post("/registro", postRegistro);

rutasRegistro.put("/registro/:id", putRegistro);

rutasRegistro.delete("/registro/:id", deleteRegistro);

rutasRegistro.get("/registro/:id", getPuntualRegistro);

