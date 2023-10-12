import { Router } from "express";


export const rutasCliente = Router();

rutasCliente.get("/cliente", (req,res) => {res.send("<h1>peticion cliente get</h1>")});

rutasCliente.post("/cliente", (req, res) => {res.send("<h1>peticion cliente post</h1>")});

rutasCliente.put("/cliente/:id", (req, res) => {res.send("<h1>peticion cliente put</h1>")});

rutasCliente.delete("/cliente/:id", (req, res) => {res.send("<<h1>peticion cliente delete</h1>")});

rutasCliente.get("/cliente/:id", (req, res) => {res.send("<h1>peticion cliente get puntual</h1>")});

