import React from 'react'
import { Link } from 'react-router'

const CategoryCard = ({nombre}) => {
  return (
    <div className="card">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://picsum.photos/id/250/200/200" className="img-fluid rounded-circle p-2" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="d-flex align-items-center justify-content-start h-100 p-3">
                    <Link to={`/productos?categoria=${encodeURIComponent(nombre)}`} className='mb-0'>
                        <h5>{nombre}</h5>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard