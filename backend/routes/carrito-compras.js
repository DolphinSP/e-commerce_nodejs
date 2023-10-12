import { Router } from "express";
import { getCarrito, postCarrito, putCarrito, deleteCarrito, getPuntualCarrito } from "../controllers/carrito-controller.js";


export const rutasCompras = Router();

rutasCompras.get("/compras", getCarrito);

rutasCompras.post("/compras", postCarrito);

rutasCompras.put("/compras/:id", putCarrito);

rutasCompras.delete("/compras/:id", deleteCarrito);

rutasCompras.get("/compras/:id", getPuntualCarrito);

