import React from "react";


export default function ProductDetail({ product, onBack, onAddToCart }) {
if (!product) return null;
return (
<section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
<img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: 8 }} />
<div>
<button onClick={onBack}>&larr; Volver</button>
<h2>{product.name}</h2>
<p style={{ color: "#555" }}>{product.description}</p>
<p style={{ fontWeight: "bold" }}>${product.price.toLocaleString("es-AR")}</p>
<button onClick={onAddToCart}>Añadir al Carrito</button>
</div>
</section>
);
}