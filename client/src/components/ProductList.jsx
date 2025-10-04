import React, { useMemo, useState } from "react";
import ProductCard from "./ProductCard";


export default function ProductList({ products, onSelect }) {
const [q, setQ] = useState("");
const filtered = useMemo(() => {
const s = q.trim().toLowerCase();
if (!s) return products;
return products.filter(p =>
p.name.toLowerCase().includes(s) || String(p.price).includes(s)
);
}, [products, q]);


if (!products?.length) return <p>No hay productos para mostrar.</p>;


return (
<section>
<div className="search">
<input placeholder="Buscar productos..." value={q} onChange={e=>setQ(e.target.value)} />
<button className="btn" onClick={()=>{}} aria-label="buscar">🔍</button>
</div>
<div className="grid">
{filtered.map(p => (
<ProductCard key={p.id} product={p} onClick={() => onSelect(p)} />
))}
</div>
</section>
);
}