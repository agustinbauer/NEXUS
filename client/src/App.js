import React, { useEffect, useState } from "react";
import { apiGet } from "./api";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

function getRoute() {
  const h = (window.location.hash || "#inicio").replace("#", "").toLowerCase();
  return ["inicio", "productos", "contacto"].includes(h) ? h : "inicio";
}

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [cart, setCart] = useState([]);
  const [route, setRoute] = useState(getRoute());

  // cargar productos
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await apiGet("/api/productos");
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // router hashchange
  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute());
      setSelected(null);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="app">
      <Navbar cartCount={cart.length} />

      {route === "inicio" && (
        <HomePage
          products={products}
          selected={selected}
          setSelected={setSelected}
          cart={cart}
          setCart={setCart}
          loading={loading}
          error={error}
        />
      )}

      {route === "productos" && (
        <ProductsPage
          products={products}
          selected={selected}
          setSelected={setSelected}
          cart={cart}
          setCart={setCart}
          loading={loading}
          error={error}
        />
      )}

      {route === "contacto" && <ContactPage />}

      <Footer />
    </div>
  );
}

export default App;
