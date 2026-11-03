/* Componente principal de la app */
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import FormularioCompra from "./components/FormularioCompra";
import Footer from "./components/Footer";
import DetalleProducto from "./pages/DetalleProducto";
import Contacto from "./pages/Contacto";
import { useCarrito } from "./hooks/carritoHook";
import ToastCarrito from "./components/ToastCarrito";

function App() {
  // Este seria el carrito que se crea solo una vez
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
    cerrarToast,
  } = useCarrito();

  return (
    <>
      <Header cantidadTotal={cantidadTotal} />
      <ToastCarrito
        show={!!toast}
        titulo={toast?.titulo}
        mensaje={toast?.mensaje}
        tipo={toast?.tipo}
        onClose={cerrarToast}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Inicio agregarAlCarrito={agregarAlCarrito} />}
          />

          <Route
            path="/productos"
            element={<Productos agregarAlCarrito={agregarAlCarrito} />}
          />

          <Route
            path="/carrito"
            element={
              <Carrito
                carrito={carrito}
                aumentarCantidad={aumentarCantidad}
                disminuirCantidad={disminuirCantidad}
                eliminarProducto={eliminarProducto}
                vaciarCarrito={vaciarCarrito}
                total={total}
                cantidadTotal={cantidadTotal}
              />
            }
          />

          <Route path="/nosotros" element={<Nosotros />} />

          <Route
            path="/formularioCompra"
            element={
              <FormularioCompra
                carrito={carrito}
                total={total}
                vaciarCarrito={vaciarCarrito}
              />
            }
          />

          <Route path="/contacto" element={<Contacto />} />

          <Route
            path="/producto/:id"
            element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
