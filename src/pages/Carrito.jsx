import { Link } from "react-router";

const Carrito = ({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
  vaciarCarrito,
  total,
  cantidadTotal
}) => {

  return (
    <div className="container py-5">
      <div>
        <h1>Tu Carrito</h1>
      </div>

      {carrito.length === 0 ? (
        <div className="text-center py-5">
          <p>Tu carrito está vacío.</p>

          <Link to="/productos" className="btn btn-primary mt-3">
            Ver productos
          </Link>
        </div>
      ) : (
        <>
          <div className="table-responsive tabla-carrito">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th className="celda-eliminar">Producto</th>
                  <th className="celda-eliminar">Precio unitario</th>
                  <th className="celda-eliminar">Cantidad</th>
                  <th className="celda-eliminar">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td className="celda-eliminar">{producto.nombre}</td>

                    <td className="celda-eliminar">
                      ${producto.precio.toLocaleString('es-AR')}
                    </td>

                    <td className="celda-eliminar">
                      <button
                        className="btn btn-outline-dark btn-sm me-2"
                        onClick={() => disminuirCantidad(producto.id)}
                      >
                        −
                      </button>

                      {producto.cantidad}

                      <button
                        className="btn btn-outline-dark btn-sm ms-2"
                        onClick={() => aumentarCantidad(producto.id)}
                        disabled={producto.cantidad >= producto.stock}
                      >
                        +
                      </button>
                    </td>

                    <td className="celda-eliminar">
                      ${(producto.precio * producto.cantidad).toLocaleString('es-AR')}
                    </td>

                    <td className="celda-eliminar text-center pe-4">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarProducto(producto.id)}
                      >
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

            <h3>Total: ${total.toLocaleString('es-AR')}</h3>
            <button
              className="btn btn-danger"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
            <Link
              to="/formularioCompra"
              className="btn btn-success"
            >
              Finalizar compra
            </Link>

          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
