
import { Link } from 'react-router'

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
    <div className="card h-100">
      <img
        src={imagen}
        className="card-img-top"
        alt={nombre}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>

        <p className="card-text">{descripcion}</p>
        <p className="card-text">Categoría: {categoria}</p>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Stock: {stock}</p>

         <div className="d-flex flex-wrap gap-2 mt-auto">
          <button
            className="btn btn-primary"
            onClick={agregar}
            disabled={stock <= 0}
          >
            Añadir al carrito
          </button>

          <Link to={`/producto/${id}`} className='btn btn-secondary'>
              Ver más
          </Link>
        </div>

        {stock <= 0 && (
          <p className="text-danger mt-2">Producto sin stock</p>
        )}
      </div>
    </div>
  )
}

export default ProductCard