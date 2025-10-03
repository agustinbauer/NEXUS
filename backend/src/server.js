import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.routes.js";
import { logger } from "./middlewares/logger.js";
import { notFound } from "./middlewares/notFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";


const app = express();
const PORT = process.env.PORT || 4000;


// Middlewares globales
app.use(cors());
app.use(express.json()); // listo para futuras peticiones POST
app.use(logger);


// Rutas de API, organizadas por módulo
app.use("/api/productos", productsRouter);


// 404 y manejador de errores
app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
console.log(`API corriendo en http://localhost:${PORT}`);
});