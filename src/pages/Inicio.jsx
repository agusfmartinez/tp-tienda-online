import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import { useProductos } from '../hooks/productosHook';
import { useCategorias } from '../hooks/categoriasHook';
import { Link } from 'react-router';

const Inicio = ({ agregarAlCarrito, carrito }) => {

    const categorias = useCategorias();
    const productos = useProductos();

    return (
        <>
            <Hero />

            <section className='container py-5'>
                <h2>Categorias</h2>
                <div className='row py-2'>
                    {categorias.map((c) => (
                        <div key={c.id} className="col-6 col-md-4 col-lg-2 pb-3">
                            <CategoryCard
                                nombre={c.categoria}
                                imagen={c.imagen}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className='container py-5'>
                <h2>Nuestros productos destacados</h2>
                <div className='row py-2'>
                    {productos
                        .filter((producto) => producto.destacado)
                        .slice(0, 4)
                        .map((producto) => {

                            const productoEnCarrito = carrito.find(
                                item => item.id === producto.id
                            );

                            const stockDisponible = producto.stock - (
                                productoEnCarrito ? productoEnCarrito.cantidad : 0
                            );

                            return (
                                <div key={producto.id} className="col-12 col-sm-6 col-lg-3 pb-3">
                                    <ProductCard
                                        id={producto.id}
                                        nombre={producto.nombre}
                                        precio={producto.precio}
                                        agregar={() => agregarAlCarrito(producto)}
                                        categoria={producto.categoria}
                                        stock={stockDisponible}
                                        imagen={producto.imagen}
                                    />
                                </div>
                            );
                        })}
                </div>
            </section>

            <section className='container py-5'>
                <div className='row align-items-center g-4'>
                    <div className='col-12 col-md-6'>
                        <h2>Sobre nosotros</h2>
                        <p>
                            En <strong>El Doggy Style</strong> ofrecemos productos para el
                            cuidado, bienestar y diversión de tus mascotas. Alimentos,
                            juguetes, camas, accesorios e higiene, todo en un solo lugar.
                        </p>
                        <div className='d-flex gap-2 flex-wrap'>
                            <Link to="/nosotros" className='btn btn-light'>
                                Conocenos
                            </Link>
                            <Link to="/contacto" className='btn btn-primary'>
                                Contactanos
                            </Link>
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <img
                            src="https://imgs.search.brave.com/UDR-tRwF9TmVpewW2hxq41U80syQwXybjFG-XneFG9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/ODM3MjMzMC9lcy9m/b3RvL3BhZHJlLXkt/aGlqby1wZXF1ZSVD/MyVCMW8tY29tcHJh/bi1lbi10aWVuZGEt/ZGUtbWFzY290YXMt/Y29uLXNjaG5hdXpl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZEE2bnE4Ty1D/SUN1ZWpRVnVhY2p4/eEVGODNQNTA2S0RM/T3ZFUEN5SW9Ocz0"
                            alt="Interior de la tienda El Doggy Style"
                            className='img-fluid rounded-3 shadow-sm imagenNosotros'
                        />
                    </div>

                </div>
            </section>

        </>
    );
};

export default Inicio;