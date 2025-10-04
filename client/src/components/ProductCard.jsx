import React from "react";


export default function ProductCard({ product, onClick }) {
return (
<article className="card product">
<img src={product.image} alt={product.name} />
<div className="content">
<h3 style={{margin:"0 0 6px"}}>{product.name}</h3>
<div className="price">${product.price.toLocaleString("es-AR")}</div>
<button className="btn secondary" onClick={onClick}>VER MÁS</button>
</div>
</article>
);
}