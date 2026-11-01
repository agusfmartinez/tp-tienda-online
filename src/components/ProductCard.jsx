
import { Link } from 'react-router'
import { CloseButton } from 'react-bootstrap'

const ProductCard = ({
  id,
  nombre,
  precio,
  agregar,
  categoria,
  descripcion,
  stock,
  imagen
}) => {
  return (
    <div className="card h-100 productoCard">
      <Link to={`/producto/${id}`}>
        <img
          src={imagen}
          className="card-img-top"
          alt={nombre}
        />
      </Link>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link to={`/producto/${id}`} className="tituloProducto">
            {nombre}
          </Link>
        </h5>

        <p className="card-text">{descripcion}</p>
        <p className="card-text">Categoría: {categoria}</p>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Stock: {stock}</p>

         <div className="d-flex flex-wrap gap-2 mt-auto">
          <button
            className="btn btn-primary"
            onClick={agregar}
            disabled={stock <= 0}
            id="liveToastBtn"
          >
            Añadir al carrito
          </button>

          <Link to={`/producto/${id}`} className='btn btn-secondary'>
              Ver más
          </Link>
        </div>

        <div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <CloseButton dismiss="toast" />
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

        {stock <= 0 && (
          <p className="text-danger mt-2">Producto sin stock</p>
        )}
      </div>
    </div>
  )
}

export default ProductCard