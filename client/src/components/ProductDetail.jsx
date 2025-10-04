import React from "react";


export default function ProductDetail({ product, onBack, onAddToCart }) {
if (!product) return null;
return (
<section style={{padding:"24px 0"}}>
<div className="detail">
<img src={product.image} alt={product.name} />
<div>
<button className="btn" onClick={onBack}>&larr; Volver</button>
<h2 style={{marginTop:12, letterSpacing:".08em"}}>{product.name.toUpperCase()}</h2>
<p style={{color:"#7b512f", lineHeight:1.6}}>{product.description}</p>
{product.details && <p style={{color:"#7b512f", lineHeight:1.6}}>{product.details}</p>}
<p className="price" style={{fontSize:"1.2rem"}}>Precio: ${product.price.toLocaleString("es-AR")}</p>
<button className="btn" onClick={onAddToCart}>AÑADIR AL CARRITO</button>
</div>
</div>
</section>
);
}