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
          <div className="table-responsive contenedor-tabla-carrito">
            <table className="table table-hover align-middle" id='tabla-carrito'>
              <thead>
                <tr>
                  <th className="celda-eliminar">Producto</th>
                  <th className="celda-eliminar">Precio unitario</th>
                  <th className="celda-eliminar text-center">Cantidad</th>
                  <th className="celda-eliminar text-center">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td text-center>{producto.nombre}</td>

                    <td>
                      ${producto.precio.toLocaleString('es-AR')}
                    </td>

                    <td className="text-center">
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

                    <td className="text-center">
                      ${(producto.precio * producto.cantidad).toLocaleString('es-AR')}
                    </td>

                    <td className="text-center pe-4">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-center">
                    <h5 className="tabla-carrito-totales">Total: {cantidadTotal}</h5>
                  </td>
                  <td className="text-center">
                    <h5 className="tabla-carrito-totales">Total: ${total.toLocaleString('es-AR')}</h5>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="botones-carrito">
            <div className="p-2">
              <button
                className="btn btn-danger"
                onClick={vaciarCarrito}
              >
              Vaciar carrito
              </button>
            </div>
            <div className="p-2">
              <Link
                to="/formularioCompra"
                className="btn btn-primary"
              >
              Finalizar compra
              </Link>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
