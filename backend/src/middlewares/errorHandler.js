// Manejador centralizado de errores
export function errorHandler(err, req, res, next) {
console.error("[ERROR]", err);
const status = err.status || 500;
res.status(status).json({ error: err.message || "Error interno del servidor" });
}