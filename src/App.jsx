/* Componente principal de la app */


//import styles from "./App.module.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";
import DatosUsuario from "./pages/DatosUsuario";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import IniciarSesion from "./pages/IniciarSesion";
import FormularioCompra from "./components/FormularioCompra";
import Footer from "./components/Footer";
import DetalleProducto from "./pages/DetalleProducto";
import Contacto from "./pages/Contacto";
import { useCarrito } from "./hooks/carritoHook";

function App() {

  // Este seria el carrito que se crea solo una veez
  const {
    carrito,
    agregarAlCarrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    vaciarCarrito,
    total,
    cantidadTotal,
    toast,
    cerrarToast
  } = useCarrito();

  return (
    <main>
      <Header cantidadTotal={cantidadTotal} />
      <Routes>
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />

        <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />

        <Route path="/carrito" element={<Carrito
          carrito={carrito}
          aumentarCantidad={aumentarCantidad}
          disminuirCantidad={disminuirCantidad}
          eliminarProducto={eliminarProducto}
          total={total}
          cantidadTotal={cantidadTotal}
          toast={toast}
          cerrarToast={cerrarToast} />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/datosUsuario" element={<DatosUsuario />} />

        <Route path="/iniciarSesion" element={<IniciarSesion />} />

        <Route path="/formularioCompra" element={<FormularioCompra
          carrito={carrito}
          total={total}
          vaciarCarrito={vaciarCarrito} />} />

        <Route path="/contacto" element={<Contacto />} />

        <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
