import React from 'react'
import ProductCard from '../components/ProductCard';

const Productos = () => {
  return (
    <main>
        <section className='container py-5'>
            <h2>Productos</h2>
            <div className='row py-2'>
                <div className="col-12 col-md-3">
                    <ProductCard />
                </div>
                <div className="col-12 col-md-3">
                    <ProductCard />
                </div>
                <div className="col-12 col-md-3">
                    <ProductCard />
                </div>
                <div className="col-12 col-md-3">
                    <ProductCard />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Productos;