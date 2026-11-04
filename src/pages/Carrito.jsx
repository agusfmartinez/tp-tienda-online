import { useState } from "react";
import { Link } from "react-router";
import ModalConfirmacion from "../components/ModalConfirmacion";

const Carrito = ({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
  vaciarCarrito,
  total,
  cantidadTotal
}) => {
  
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modalTitulo, setmodalTitulo] = useState('');
  const [modalMensaje, setmodalMensaje] = useState('');
  const [modalAccion, setmodalAccion] = useState(null);

  function abrirModalEliminar(producto) {
    setmodalTitulo('Eliminar producto');
    setmodalMensaje(`¿Seguro que querés eliminar "${producto.nombre}" del carrito?`)
    // al pasarl una funcion al use state, react la ejecuta y guarda el resultado, 
    // por eso para guardar una funcion se tiene que envolver dentro de otra funcion
    setmodalAccion(() => () => eliminarProducto(producto.id));
    setMostrarModal(true);
  }

  function abrirModalVaciar(producto) {
    setmodalTitulo('Vaciar carrito');
    setmodalMensaje('¿Seguro que querés eliminar todos los productos del carrito?')
    setmodalAccion(() => vaciarCarrito);
    setMostrarModal(true);
  }

  function confirmarAccion() {
    modalAccion()
    setMostrarModal(null);
  }

  function cancelarAccion() {
    setMostrarModal(null);
  }

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
                  <th >Producto</th>
                  <th >Precio unitario</th>
                  <th className="text-center">Cantidad</th>
                  <th className="text-center">Subtotal</th>
                  <th ></th>
                </tr>
              </thead>

              <tbody>
                {carrito.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>

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
                        onClick={() => abrirModalEliminar(producto)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td className="text-center">
                    <h5 className="tabla-carrito-totales">Productos: {cantidadTotal}</h5>
                  </td>
                  <td className="text-center">
                    <h5 className="tabla-carrito-totales">Total: ${total.toLocaleString('es-AR')}</h5>
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="botones-carrito">
            <div className="p-2">
              <button
                className="btn btn-danger"
                onClick={abrirModalVaciar}
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
        </>
      )}

      
      <ModalConfirmacion
        show={mostrarModal}
        titulo={modalTitulo }
        mensaje={modalMensaje}
        textoConfirmar="Eliminar"
        onConfirmar={confirmarAccion}
        onCancelar={cancelarAccion}
      />
    </div>
    
  );
}

export default Carrito;
