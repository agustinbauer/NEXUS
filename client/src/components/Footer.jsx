import React from "react";


export default function Footer() {
return (
<footer style={{ textAlign: "center", padding: "1rem", borderTop: "1px solid #eee" }}>
<small>© {new Date().getFullYear()} Mueblería Hermanos Jota</small>
</footer>
);
}