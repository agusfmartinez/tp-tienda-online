import { Link } from 'react-router'

const CategoryCard = ({ nombre, imagen }) => {
  return (
    <Link
      to={`/productos?categoria=${encodeURIComponent(nombre)}`}
      className="card h-100 text-center text-decoration-none categoriaCard"
    >
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <img src={imagen} alt={nombre} className="rounded-circle mb-3 categoriaImg" />
        <h5 className="card-title mb-0">{nombre}</h5>
      </div>
    </Link>
  )
}

export default CategoryCard
