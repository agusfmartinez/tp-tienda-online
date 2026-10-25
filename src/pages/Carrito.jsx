import React from 'react'
import { useState } from 'react';
import { Link } from "react-router";

function Carrito() {
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito") || "[]");
  });

  function actualizarCarrito(nuevoCarrito) {
    setCarrito(nuevoCarrito);
    // Usamos el localStorage para mantenter persistido el carrito
    // y debemos pasarlo a string porque localStorage solo acepta texto
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  }

  function aumentarCantidad(id) {
    const producto = carrito.find((item) => item.id === id);
    if (!producto || producto.cantidad >= producto.stock) {
      return;
    }

    const nuevoCarrito = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );

    actualizarCarrito(nuevoCarrito);
  }

  function disminuirCantidad(id) {
    const nuevoCarrito = carrito.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
    ).filter((item) =>
      item.cantidad > 0);

    actualizarCarrito(nuevoCarrito);
  }

  function eliminarProducto(id) {
    const nuevoCarrito = carrito.filter((item) =>
      item.id !== id
    );

    actualizarCarrito(nuevoCarrito);
  }

  const total = carrito.reduce((suma, item) =>
    suma + item.precio * item.cantidad, 0
  );

  return (
    // En la parte del "Eliminar" quiero dejar el boton por fuera de la tabla,
    // Resta reorganizar las columnas
    <main className="container py-5">
      <div>
        <h1>Acá irá el carrito</h1>
      </div>
      {carrito.length === 0 ? (<p>Tu carrito está vacío.</p>) :
        (
          <>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Precio unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.nombre}</td>
                      <td>${producto.precio}</td>

                      <td>
                        <button className="btn btn-outline-dark btn-sm me-2"
                          onClick={() => disminuirCantidad(producto.id)}>
                          −
                        </button>

                        {producto.cantidad}

                        <button className="btn btn-outline-dark btn-sm ms-2"
                          onClick={() => aumentarCantidad(producto.id)}
                          disabled={producto.cantidad >= producto.stock}>
                          +
                        </button>
                      </td>

                      <td>
                        ${(producto.precio * producto.cantidad)}
                      </td>

                      <td>
                        <button className="btn btn-danger btn-sm"
                          onClick={() => eliminarProducto(producto.id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
              <h3>Total: ${total}</h3>

              <Link
                to="/formularioCompra"
                className="btn btn-success"
              >
                Finalizar compra
              </Link>
            </div>
          </>
        )
      }
    </main>
  );
}

export default Carrito;