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

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/" element={<Productos/>}/>
          <Route path="/" element={<Carrito/>}/>
          <Route path="/" element={<Nosotros/>}/>
          <Route path="/" element={<DatosUsuario/>}/>
        </Routes>
    </main>
  );
}

export default App;
