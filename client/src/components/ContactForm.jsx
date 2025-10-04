import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email); // validación básica
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!form.name.trim()) {
      setError("Por favor, ingresá tu nombre.");
      setSubmitted(false);
      return;
    }
    if (!form.email.trim() || !validateEmail(form.email)) {
      setError("Por favor, ingresá un correo electrónico válido.");
      setSubmitted(false);
      return;
    }
    if (!form.message.trim()) {
      setError("Por favor, escribí un mensaje.");
      setSubmitted(false);
      return;
    }

    // Si pasa todas las validaciones
    console.log("Contacto:", form);
    setError("");          // limpio error
    setSubmitted(true);    // muestro mensaje de éxito
    setForm({ name: "", email: "", message: "" }); // limpio formulario
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Tu nombre"
        value={form.name}
        onChange={onChange}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="tu@email.com"
        value={form.email}
        onChange={onChange}
      />

      <label htmlFor="message">Mensaje</label>
      <textarea
        id="message"
        name="message"
        placeholder="Escribí tu mensaje…"
        rows={5}
        value={form.message}
        onChange={onChange}
      />

      <button className="btn soft" type="submit">
        Enviar
      </button>

      {error && <p className="form-error">{error}</p>}
      {submitted && <p className="form-success">¡Gracias! Te responderemos pronto.</p>}
    </form>
  );
}
