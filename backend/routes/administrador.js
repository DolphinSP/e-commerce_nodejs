import { Router } from "express";
import { getAdministrador, postAdministrador, putAdministrador, deleteAdministrador, getPuntualAdministrador } from "../controllers/administrador-controller.js";


export const rutasAdministrador = Router();

rutasAdministrador.get("/administrador", getAdministrador);

rutasAdministrador.post("/administrador", postAdministrador);

rutasAdministrador.put("/administrador/:id", putAdministrador);

rutasAdministrador.delete("/administrador/:id", deleteAdministrador);

rutasAdministrador.get("/administrador/:id", getPuntualAdministrador);

