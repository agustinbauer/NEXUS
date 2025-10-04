# 🛋️ E-commerce Mueblería Hermanos Jota (Sprint 3 y 4)

## 👥 Integrantes del equipo
- **Aldave, Daniel**
- **Arrestegui, Tomás**
- **Avendaño Zacarias, Tomás**
- **Bardini, Eugenio**
- **Bauer, Agustín**

---

## 📄 Descripción
Este proyecto corresponde al **Sprint 3 y 4** del desarrollo de la plataforma de e-commerce para **Mueblería Hermanos Jota**.  

El objetivo principal fue evolucionar la maqueta inicial hacia una aplicación **full stack** simple:
- **Backend** en **Node.js + Express**, que expone una API REST con los productos desde un **array local**.
- **Frontend** en **React (Create React App)**, que consume esa API, renderiza el catálogo, gestiona un carrito básico y un formulario de contacto controlado.

---

## ✨ Funcionalidades
- 🛍️ **Catálogo** cargado dinámicamente desde el backend (`GET /api/productos`).  
- 🔎 **Detalle de producto** por renderizado condicional (sin React Router).  
- 🛒 **Carrito básico**: contador en la barra de navegación que refleja productos agregados.  
- 📬 **Formulario de contacto controlado** en React, con validación mínima y confirmación en pantalla.  
- ⚙️ **Manejo de estados de carga y error** al consumir la API.  
- 📡 **API modularizada en Express** con middlewares para logging, 404 y manejo de errores.  

---

## 🧱 Estructura del repositorio
```
📦 NEXUS
├─ 📄 README.md
├─ 📄 .gitignore
├─ 📂 backend
│  ├─ 📄 package.json
│  ├─ 📄 package-lock.json
│  └─ 📂 src
│     ├─ 📄 server.js
│     ├─ 📂 data
│     │  └─ 📄 products.js
│     ├─ 📂 routes
│     │  └─ 📄 products.routes.js
│     └─ 📂 middlewares
│        ├─ 📄 logger.js
│        ├─ 📄 notFound.js
│        └─ 📄 errorHandler.js
├─ 📂 client
│  ├─ 📄 package.json
│  ├─ 📄 package-lock.json
│  ├─ 📂 public
│  │  ├─ 📄 index.html
│  │  ├─ 📄 logo-hj.svg
│  │  └─ 📂 img
│  │     ├─ 🖼️ Aparador-Uspallata.png
│  │     ├─ 🖼️ Biblioteca-Recoleta.png
│  │     ├─ 🖼️ Butaca-Mendoza.png
│  │     ├─ 🖼️ Escritorio-Costa.png
│  │     ├─ 🖼️ Mesa-Comedor-Pampa.png
│  │     ├─ 🖼️ Mesa-de-Centro-Araucaria.png
│  │     ├─ 🖼️ Mesa-de-Noche-Aconcagua.png
│  │     ├─ 🖼️ Silla-de-Trabajo-Belgrano.png
│  │     ├─ 🖼️ Sillas-Cordoba.png
│  │     ├─ 🖼️ Sillon-Copacabana.png
│  │     └─ 🖼️ Sofa-Patagonia.png
│  └─ 📂 src
│     ├─ 📄 App.js
│     ├─ 📄 index.js
│     ├─ 📄 index.css
│     ├─ 📄 api.js
│     ├─ 📂 components
│     │  ├─ 📄 Navbar.jsx
│     │  ├─ 📄 Footer.jsx
│     │  ├─ 📄 Hero.jsx
│     │  ├─ 📄 ProductCard.jsx
│     │  ├─ 📄 ProductList.jsx
│     │  ├─ 📄 ProductDetail.jsx
│     │  └─ 📄 ContactForm.jsx
│     └─ 📂 pages
│        ├─ 📄 HomePage.jsx
│        ├─ 📄 ProductsPage.jsx
│        └─ 📄 ContactPage.jsx


```

---

## 🛠️ Tecnologías
### Backend
- **Node.js (v18.20.8 LTS) + Express** → API REST.  
- **CORS y middlewares propios** → logging, 404 y errores.  
- **Array local** → fuente de datos de productos.  

### Frontend
- **React (CRA)** → Renderizado de componentes.  
- **Hooks (`useState`, `useEffect`)** → manejo de estados, efectos y formularios.  
- **Fetch API** → consumo del backend.  
- **CSS base** → estilos simples y diseño responsivo.  

---

## 🔌 Endpoints de la API
- `GET /api/productos` → lista de todos los productos.  
- `GET /api/productos/:id` → detalle de un producto por id.  
  - **404** si no existe.  

---

## 🚀 Ejecución del proyecto
### 1) Backend
```bash
cd backend
npm install
npm run start   # o npm run dev con nodemon
```
API disponible en `http://localhost:4000/api/productos`.

### 2) Frontend
En otra terminal:
```bash
cd client
npm install
npm start
```
App disponible en `http://localhost:3000`.

> El frontend tiene `"proxy": "http://localhost:4000"` en `client/package.json`, por lo que puede pedir directamente `/api/productos` sin problemas de CORS.

---

## ✅ Checklist de la consigna
- [x] API Express con `GET /api/productos` y `GET /api/productos/:id`.  
- [x] Datos desde archivo `.js` (array local).  
- [x] Middlewares: logger, 404, error handler.  
- [x] React que consume la API.  
- [x] Renderizado condicional para detalle de producto.  
- [x] Carrito básico (contador en Navbar).  
- [x] Formulario controlado de contacto.  
- [x] README con instrucciones y detalles.  
