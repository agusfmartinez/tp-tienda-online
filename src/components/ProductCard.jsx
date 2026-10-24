import React from 'react'

const ProductCard = () => {
  return (
    <div className="card">
      <img src="https://picsum.photos/id/450/200/200" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Producto Titulo</h5>
        <p className="card-text">Descripcion</p>
        <div className='d-flex gap-2 mt-auto'>
          <a href="#" className="btn btn-primary btn-sm text-nowrap">Añadir al carrito</a>
          <a href="#" className="btn btn-outline-secondary btn-sm text-nowrap">Ver más</a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

