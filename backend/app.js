import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import { rutasInicio } from "./routes/inicio.js";
import { rutasRegistro } from "./routes/registro.js";
import { rutasLogin } from "./routes/login.js";
import { rutasAdministrador } from "./routes/administrador.js";
import { rutasCliente } from "./routes/cliente.js";
import { rutasCompras } from "./routes/carrito-compras.js";






const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./files"
}))
app.use(
    rutasInicio,
    rutasRegistro,
    rutasLogin,
    rutasAdministrador,
    rutasCliente,
    rutasCompras
    );

app.use((req, res) => {

res.redirect("/");

});


export default app;