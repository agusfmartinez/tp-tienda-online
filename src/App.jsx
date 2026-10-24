/* Componente principal de la app */


//import styles from "./App.module.css";
import { Routes, Route } from "react-router";
import { useState } from 'react'
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Carrito from "./pages/Carrito";
import DatosUsuario from "./pages/DatosUsuario";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import IniciarSesion from "./pages/IniciarSesion";
import FormularioCompra from "./components/FormularioCompra";
import Footer from "./components/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/datosUsuario" element={<DatosUsuario/>}/>
          <Route path="/iniciarSesion" element={<IniciarSesion/>}/>
          <Route path="/formularioCompra" element={<FormularioCompra/>} />
        </Routes>
      <Footer/>
    </main>
  );
}

export default App;
