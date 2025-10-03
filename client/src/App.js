import React, { useEffect, useState } from "react";
import { apiGet } from "./api";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import ContactForm from "./components/ContactForm";


function App() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [selected, setSelected] = useState(null); // producto seleccionado para detalle
const [cart, setCart] = useState([]); // estado del carrito en App


// Cargar catálogo desde API
useEffect(() => {
async function load() {
try {
setLoading(true);
const data = await apiGet("/api/productos");
setProducts(data);
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
}
load();
}, []);


const handleSelect = (product) => setSelected(product);
const handleBackToList = () => setSelected(null);
const handleAddToCart = (product) => {
setCart(prev => [...prev, product]);
};


return (
<div className="app">
<Navbar cartCount={cart.length} />


<main className="container" style={{ padding: "1rem" }}>
{loading && <p>Cargando…</p>}
{error && <p style={{ color: "red" }}>Error al cargar los productos: {error}</p>}


{!loading && !error && (
selected ? (
<ProductDetail
product={selected}
onBack={handleBackToList}
onAddToCart={() => handleAddToCart(selected)}
/>
) : (
<ProductList products={products} onSelect={handleSelect} />
)
)}


<hr style={{ margin: "2rem 0" }} />
<ContactForm />
</main>


<Footer />
</div>
);
}


export default App;