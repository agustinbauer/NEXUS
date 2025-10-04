import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container cols">
        
        <div className="small">
          <strong>Hermanos Jota — Casa Taller</strong><br/>
          Av. San Juan 2847<br/>
          C1123AAB — Barrio de San Cristóbal<br/>
          CABA, Argentina<br/>
          <br/>Horarios:<br/>
          Lunes a Viernes: 10:00 - 19:00
        </div>

        <div className="small">
          <span className="label">Sitio web:</span>&nbsp; hermanosjota.com.ar<br/>
          <span className="label">Email general:</span>&nbsp; info@hermanosjota.com.ar<br/>
          <span className="label">Ventas:</span>&nbsp; ventas@hermanosjota.com.ar
        </div>

        <div className="small">
          <span className="label">Instagram:</span>&nbsp; @hermanosjota_ba<br/>
          <span className="label">WhatsApp:</span>&nbsp; +54 11 4567-8900
        </div>
        
      </div>
    </footer>
  );
}
