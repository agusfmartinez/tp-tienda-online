/* Componente principal de la app */

import Header from "./components/Header";
import styles from "./App.module.css";
import { Routes, Route } from "react-router";
import Inicio from "./pages/Inicio"

import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
      </Routes>
    </main>
  );
}

export default App;
