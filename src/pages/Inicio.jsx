import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import {useProductos} from '../hooks/productosHook'
import {useCategorias} from '../hooks/categoriasHook'

const Inicio = ({ agregarAlCarrito}) => {

    const categorias = useCategorias();
    const productos = useProductos();
  return (
    <>
        <Hero/>

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
                {productos.filter((producto) => producto.destacado)
                    .slice(0,4)
                    .map((producto) => (
                        <div key={producto.id} className="col-12 col-sm-6 col-lg-3 pb-3">
                            <ProductCard 
                                id={producto.id}
                                nombre={producto.nombre}
                                precio={producto.precio.toLocaleString('es-AR')}
                                agregar={() => agregarAlCarrito(producto)}
                                categoria={producto.categoria}
                                descripcion={producto.descripcion}
                                stock={producto.stock}
                                imagen={producto.imagen}
                            />
                        </div>
                ))}
            </div>
        </section>

        <section className='container py-5'>
            <h2>Sobre nosotros</h2>
            <p>En <strong>El Doggy Style</strong> somos una tienda dedicada
            a ofrecer productos para el cuidado, bienestar y diversión
            de las mascotas. Nuestro objetivo es brindar todo lo necesario
            para que tus compañeros de cuatro patas tengan una vida feliz
            y saludable.</p>
        </section>
    </>
  )
}

export default Inicio;