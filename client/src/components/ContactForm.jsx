import React, { useState } from "react";


export default function ContactForm() {
const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
const [sent, setSent] = useState(false);


const handleChange = (e) => {
const { name, value } = e.target;
setForm(prev => ({ ...prev, [name]: value }));
};


const handleSubmit = (e) => {
e.preventDefault();
console.log("Contacto enviado:", form);
setSent(true);
};


return (
<section style={{ maxWidth: 520 }}>
<h3>Contacto</h3>
<form onSubmit={handleSubmit}>
<div style={{ marginBottom: 12 }}>
<label htmlFor="nombre">Nombre</label><br />
<input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
</div>
<div style={{ marginBottom: 12 }}>
<label htmlFor="email">Email</label><br />
<input id="email" type="email" name="email" value={form.email} onChange={handleChange} required />
</div>
<div style={{ marginBottom: 12 }}>
<label htmlFor="mensaje">Mensaje</label><br />
<textarea id="mensaje" name="mensaje" rows="4" value={form.mensaje} onChange={handleChange} required />
</div>
<button type="submit">Enviar</button>
</form>
{sent && <p style={{ color: "green" }}>¡Gracias! Te contactaremos pronto.</p>}
</section>
);
}