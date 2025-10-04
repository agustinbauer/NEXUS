import React from "react";


export default function Navbar({ cartCount }) {
return (
<header className="nav">
<div className="logo">
<img src="/logo-hj.svg" alt="Hermanos Jota" width={56} height={56} onError={(e)=>{e.currentTarget.src='/logo-hj.png';}} />
<strong>Hermanos Jota</strong>
</div>
<nav>
<ul>
<li><a href="#inicio">INICIO</a></li>
<li><a href="#productos">PRODUCTOS</a></li>
<li><a href="#contacto">CONTACTO</a></li>
<li><span className="badge" title="Carrito">{cartCount} 🛒</span></li>
</ul>
</nav>
</header>
);
}