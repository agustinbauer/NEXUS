import React from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

export default function HomePage({ products, selected, setSelected, cart, setCart, loading, error }) {
  return (
    <>
      <Hero />
      <main className="container">
        <h2 className="section-title">PRODUCTOS DESTACADOS</h2>
        {loading && <p>Cargando…</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && (
          selected ? (
            <ProductDetail
              product={selected}
              onBack={() => setSelected(null)}
              onAddToCart={() => setCart([...cart, selected])}
            />
          ) : (
            <ProductList
              products={products.slice(0, 4)}  // solo 4 destacados
              onSelect={setSelected}
              showSearch={false}
            />
          )
        )}
      </main>
    </>
  );
}
