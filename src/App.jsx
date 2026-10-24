/* Componente principal de la app */

import Header from "./components/Header";
import styles from "./App.module.css";


import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header/>
    </main>
  );
}

export default App;
