import { useParams, Link } from 'react-router';
import { useProductos } from '../hooks/productosHook';
import { useCarrito } from '../hooks/carritoHook';

const DetalleProducto = () => {
  const { id } = useParams();
  const productos = useProductos();
  const { agregarAlCarrito } = useCarrito();

  const producto = productos.find((p) => p.id === Number(id));

  if (productos.length === 0) {
    return <main className="container py-5"><p>Cargando...</p></main>;
  }

  if (!producto) {
    return (
      <main className="container py-5">
        <p>Producto no encontrado.</p>
        <Link to="/productos" className="btn btn-secondary">Volver al catálogo</Link>
      </main>
    );
  }

  return (
    <main className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid rounded" />
        </div>

        <div className="col-12 col-md-6">
          <h2>{producto.nombre}</h2>
          <p className="text-muted">Categoría: {producto.categoria}</p>
          <h3>${producto.precio}</h3>
          <p>{producto.descripcion}</p>

          <h5>Características</h5>
          <ul>
            {producto.caracteristicas.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          {producto.stock > 0 ? (
            <p>Stock disponible: {producto.stock}</p>
          ) : (
            <p className="text-danger">Sin stock</p>
          )}

          <div className="d-flex gap-2">
            <button
              className="btn btn-primary"
              onClick={() => agregarAlCarrito(producto)}
              disabled={producto.stock <= 0}
            >
              Añadir al carrito
            </button>
            <Link to="/productos" className="btn btn-secondary">
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetalleProducto;
