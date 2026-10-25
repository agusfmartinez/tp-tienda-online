import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Productos = () => {
  const [busqueda, setBusqueda] = useState('');
  const [orden, setOrden] = useState('');

  let [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        return response.json();
      })
      .then(data => setProductos(data))
      .catch((error) => {
        console.error(error);
      });
  });

  const productosFiltrados = [...productos]
    .filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )
    .sort((a, b) => {
      if (orden === 'menor') {
        return a.precio - b.precio;
      }

      if (orden === 'mayor') {
        return b.precio - a.precio;
      }

      return 0;
    });

  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito") || "[]");
  });

  function agregarAlCarrito(producto) {
    const existente = carrito.find(
      (item) => item.id === producto.id
    );

    const cantidadActual = existente
      ? existente.cantidad
      : 0;

    if (cantidadActual >= producto.stock) {
      return;
    }

    let nuevoCarrito;

    if (existente) {
      nuevoCarrito = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
    } else {
      nuevoCarrito = [
        ...carrito,
        { ...producto, cantidad: 1 }
      ];
    }

    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  }

  return (
    <main>
      <section className="container py-5">
        <h2>Productos</h2>


        <div className="row py-3">
          <div className="col-12 col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>


          <div className="col-12 col-md-6 mb-3">
            <select
              className="form-select"
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
            >
              <option value="">Orden original</option>
              <option value="">Categoria</option>
              <option value="menor">Precio: menor a mayor</option>
              <option value="mayor">Precio: mayor a menor</option>
            </select>
          </div>
        </div>


        <div className="row py-2">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (


              <div
                className="col-12 col-md-3 mb-4"
                key={producto.id}
              >
                <ProductCard
                  nombre={producto.nombre}
                  precio={producto.precio}
                  agregar={() => agregarAlCarrito(producto)}
                  categoria={producto.categoria}
                  descripcion={producto.descripcion}
                  stock={producto.stock}
                />
              </div>
            ))
          ) : (
            <p>No se encontraron productos.</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Productos;