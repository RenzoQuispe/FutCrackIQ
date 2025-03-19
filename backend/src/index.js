import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { conexionDB } from "./lib/db.js";

dotenv.config();
const app = express();

app.use(cookieParser());


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server ejecutandose en el puerto:" + PORT);
    conexionDB();
});
/*
// Conectar antes de iniciar el servidor
conexionDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server ejecutandose en el puerto:" + PORT);
        });
    })
    .catch(error => {
        console.error('No se pudo conectar a la base de datos:', error.message);
        process.exit(1); // Cerrar el proceso si hay error grave
    });
*/
