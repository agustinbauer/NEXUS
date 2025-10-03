import React from "react";


export default function Navbar({ cartCount }) {
return (
<nav style={{
display: "flex",
alignItems: "center",
justifyContent: "space-between",
padding: "1rem",
borderBottom: "1px solid #eee"
}}>
<strong>Mueblería Hermanos Jota</strong>
<div>Carrito: <span data-testid="cart-count">{cartCount}</span></div>
</nav>
);
}