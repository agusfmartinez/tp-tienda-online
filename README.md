# 🐾 El Doggy Style: tienda de mascotas

Tienda online de productos para mascotas desarrollada con **React** como trabajo práctico de la materia **Construcción de Interfaces de Usuario** (UNAHUR).

La aplicación permite recorrer un catálogo de productos, filtrarlos por categoría, ver el detalle de cada uno, armar un carrito de compras y finalizar la compra mediante un formulario.

## 👥 Integrantes

| Nombre | GitHub |
|---|---|
| Sebastian Masatti | [@sebanyus](https://github.com/sebanyus) |
| Ezequiel Piñeyro | [@ezequielpineyro15-sys](https://github.com/ezequielpineyro15-sys) |
| Agustin Martinez | [@agusfmartinez](https://github.com/agusfmartinez) |

## 🛠️ Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router 7](https://reactrouter.com/)
- [Bootstrap 5](https://getbootstrap.com/) + [React Bootstrap](https://react-bootstrap.github.io/)
- ESLint

## 🚀 Instalación y ejecución

Requisitos: [Node.js](https://nodejs.org/) 20 o superior.

```bash
# 1. Clonar el repositorio
git clone https://github.com/agusfmartinez/tp-tienda-online.git
cd tp-tienda-online

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Luego abrir en el navegador la URL que muestra la consola (por defecto `http://localhost:5173`).

Otros scripts disponibles:

| Comando | Descripción |
|---|---|
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente la versión de producción |
| `npm run lint` | Revisa el código con ESLint |

## 📄 Páginas

| Ruta | Página | Descripción |
|---|---|---|
| `/` | Inicio | Hero de bienvenida, categorías y presentación de la tienda |
| `/productos` | Productos | Catálogo completo con filtro por categoría, búsqueda y ordenamiento |
| `/producto/:id` | Detalle | Información completa de un producto y botón para agregarlo al carrito |
| `/carrito` | Carrito | Listado de productos agregados, cantidades, subtotales y total |
| `/formularioCompra` | Finalizar compra | Formulario con los datos del cliente para confirmar la compra |
| `/nosotros` | Nosotros | Información sobre la tienda |
| `/contacto` | Contacto | Formulario de contacto con validación |

## ✨ Funcionalidades

- **Catálogo** de productos y categorías cargados desde archivos JSON (`public/productos.json` y `public/categorias.json`).
- **Filtro por categoría** mediante la URL (`/productos?categoria=Juguetes`), accesible también desde las tarjetas de categoría del inicio.
- **Búsqueda y ordenamiento** de productos.
- **Detalle de producto** con ruta dinámica (`/producto/:id`).
- **Carrito de compras** compartido entre todas las páginas:
  - Agregar, aumentar, disminuir y eliminar productos.
  - Control de stock: no se pueden agregar más unidades que las disponibles.
  - Cálculo de subtotales, total y cantidad de productos.
  - Persistencia en `localStorage` (el carrito se mantiene al recargar la página).
  - Contador en la barra de navegación.
- **Notificaciones** (Toast) al agregar productos o cuando no hay stock.
- **Formulario de compra** que vacía el carrito al confirmar.
- **Diseño responsive** adaptado a celulares, tablets y escritorio.

## 📁 Estructura del proyecto

```
tp-tienda-online/
├── public/
│   ├── productos.json      # Datos de los productos
│   ├── categorias.json     # Datos de las categorías
│   └── logo.webp
├── src/
│   ├── components/         # Componentes reutilizables (NavBar, ProductCard, Footer, etc.)
│   ├── hooks/              # Custom hooks (useCarrito, useProductos, useCategorias)
│   ├── pages/              # Páginas asociadas a cada ruta
│   ├── App.jsx             # Rutas y estado global del carrito
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos globales
└── index.html
```

## 🧠 Decisiones de diseño

- El estado del carrito se maneja con un custom hook (`useCarrito`) que se ejecuta **una sola vez en `App`** y se comparte con las páginas mediante **props** (*lifting state up*).
- Los productos y categorías se obtienen con `fetch` desde la carpeta `public/`, simulando una API.
