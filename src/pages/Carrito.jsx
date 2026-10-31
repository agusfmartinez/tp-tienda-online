import React from 'react'
import { Link } from "react-router";
import { useCarrito } from '../hooks/carritoHook';


const Carrito = () => {

  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    total,
    cantidadTotal,
  } = useCarrito();

  return (
    // En la parte del "Eliminar" quiero dejar el boton por fuera de la tabla,
    // Resta reorganizar las columnas
    <main className="container py-5">
      <div>
        <h1>Acá irá el carrito</h1>
      </div>
      {carrito.length === 0 ? (
        <div className="text-center py-5">
          <p>Tu carrito está vacío.</p>

          <Link to="/productos" className="btn btn-primary mt-3">
            Ver productos
          </Link>
        </div>
      ) :
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

              <p>
                Cantidad total de productos: <strong>{cantidadTotal}</strong>
              </p>

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