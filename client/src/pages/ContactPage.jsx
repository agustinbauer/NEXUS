import React from "react";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="container contact-page" style={{ maxWidth: 680 }}>
      <h2 className="section-title">CONTACTO</h2>
      <ContactForm />
    </main>
  );
}

