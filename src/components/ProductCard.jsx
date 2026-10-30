import React from 'react'

const ProductCard = ({
  nombre,
  precio,
  agregar,
  categoria,
  descripcion,
  stock,
  imagen
}) => {
  return (
    <div className="card">
      <img
        src={imagen}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>

        <p className="card-text">{descripcion}</p>
        <p className="card-text">Categoría: {categoria}</p>
        <p className="card-text">Precio: ${precio}</p>
        <p className="card-text">Stock: {stock}</p>

         <div className="d-flex gap-2">
          <button
            className="btn btn-primary"
            onClick={agregar}
            disabled={stock <= 0}
          >
            Añadir al carrito
          </button>

          <button className="btn btn-secondary">
            Ver más
          </button>
        </div>

        {stock <= 0 && (
          <p className="text-danger mt-2">Producto sin stock</p>
        )}
      </div>
    </div>
  )
}

export default ProductCard