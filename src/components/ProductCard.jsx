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
        <p className="card-text"> Precio: ${precio.toLocaleString('es-AR')}</p>
        <p className="card-text">Stock: {stock}</p>

        <div className="d-flex flex-wrap gap-2 mt-auto">
          {stock <= 0 && (
            <p className="text-danger mt-2 productoSinStock">Producto sin stock</p>
          )}
          <button
            className="btn btn-primary"
            onClick={agregar}
            disabled={stock <= 0}
          >
            Añadir al carrito
          </button>

          <Link to={`/producto/${id}`} className='btn btn-light'>
            Ver más
          </Link>
        </div> 
      </div>
    </div>
  )
}

export default ProductCard