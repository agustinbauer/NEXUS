import React from "react";
import ProductCard from "./ProductCard";


export default function ProductList({ products, onSelect }) {
if (!products?.length) return <p>No hay productos para mostrar.</p>;


return (
<section
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
gap: "1rem"
}}
>
{products.map(p => (
<ProductCard key={p.id} product={p} onClick={() => onSelect(p)} />
))}
</section>
);
}