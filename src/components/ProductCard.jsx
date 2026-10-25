import React from 'react';

const ProductCard = ({ nombre, precio, agregar }) => {
  return (
    <div className="card h-100">
      <img
        src="https://picsum.photos/id/450/200/200"
        className="card-img-top"
        alt={nombre}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>

        <p className="card-text">
          Precio: ${precio}
        </p>

        <div className="d-flex gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-primary btn-sm text-nowrap"
            onClick={agregar}
          >
            Añadir al carrito
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary btn-sm text-nowrap"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;