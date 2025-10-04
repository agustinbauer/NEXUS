import React from "react";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";

export default function ProductsPage({ products, selected, setSelected, cart, setCart, loading, error }) {
  return (
    <main className="container">
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
          <ProductList products={products} onSelect={setSelected} />
        )
      )}
    </main>
  );
}
