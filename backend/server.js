import {conexionDB} from "./db.js"
import {PORT} from "./config.js";
import app from "./app.js";


conexionDB();

app.listen(PORT);

console.log("servidor en funcionamiento en el puerto:", PORT);






