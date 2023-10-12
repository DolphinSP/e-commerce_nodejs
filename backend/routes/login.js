import { Router } from "express";
import { getLogin, postLogin, putLogin, deleteLogin, getPuntualLogin } from "../controllers/login-controller.js";


export const rutasLogin = Router();

rutasLogin.get("/login", getLogin);

rutasLogin.post("/login", postLogin);

rutasLogin.put("/login/:id", putLogin);

rutasLogin.delete("/login/:id", deleteLogin);

rutasLogin.get("/login/:id", getPuntualLogin);

