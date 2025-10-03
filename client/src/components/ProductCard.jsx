import React from "react";


export default function ProductCard({ product, onClick }) {
return (
<article
onClick={onClick}
style={{
cursor: "pointer",
border: "1px solid #ddd",
borderRadius: 8,
overflow: "hidden",
boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
}}
>
<img src={product.image} alt={product.name} style={{ width: "100%", height: 200, objectFit: "cover" }} />
<div style={{ padding: "0.75rem" }}>
<h3 style={{ margin: 0 }}>{product.name}</h3>
<p style={{ margin: "0.5rem 0", color: "#555" }}>${product.price.toLocaleString("es-AR")}</p>
</div>
</article>
);
}