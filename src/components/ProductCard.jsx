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

      <div className="card-body d-flex gap-3 flex-column">
        <h4 className="card-title">
          <Link to={`/producto/${id}`} className="tituloProducto">
            {nombre}
          </Link>
        </h4>
        <p className="texto-card"><strong>Categoría:</strong> {categoria}</p>
        <p className="texto-card"><strong>Unidades:</strong> {stock}</p>
        <h3>${precio.toLocaleString('es-AR')}</h3>

        <div className="d-flex flex-column gap-2 mt-auto">
          {stock <= 0 && (
            <p className="text-danger mt-2 productoSinStock text-center"><strong>No disponible</strong></p>
          )}
          <Link to={`/producto/${id}`} className='btn btn-light'>
            Ver más
          </Link>
          <button
            className="btn btn-primary"
            onClick={agregar}
            disabled={stock <= 0}
          >
            Añadir al carrito
          </button>
        </div> 
      </div>
    </div>
  )
}

export default ProductCard