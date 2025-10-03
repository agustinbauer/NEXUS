import { Router } from "express";
import { products } from "../data/products.js";


const router = Router();


// GET /api/productos → lista completa
router.get("/", (req, res) => {
res.json(products);
});


// GET /api/productos/:id → un producto por id
router.get("/:id", (req, res, next) => {
const id = Number(req.params.id);
const product = products.find(p => p.id === id);
if (!product) {
const err = new Error("Producto no encontrado");
err.status = 404;
return next(err);
}
res.json(product);
});


export default router;