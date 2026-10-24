import React from 'react'

const CategoryCard = () => {
  return (
    <div className="card my-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://picsum.photos/id/250/200/200" className="img-fluid rounded-circle p-2" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="d-flex align-items-center justify-content-start h-100 p-3">
                    <h5 className="mb-0">Categoria titulo</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard