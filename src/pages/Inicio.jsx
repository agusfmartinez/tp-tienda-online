import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import {useProductos} from '../hooks/productosHook'
import {useCategorias} from '../hooks/categoriasHook'

const Inicio = () => {
    
    const categorias = useCategorias();
    const productos = useProductos();

    function agregarAlCarrito(producto) {
        const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
        const existente = carrito.find((item) => item.id === producto.id);
        const cantidadActual = existente ? existente.cantidad : 0;

        if (cantidadActual >= producto.stock) {
            return;
        }

        const nuevoCarrito = existente
            ? carrito.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
            : [...carrito, { ...producto, cantidad: 1 }];

        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    }

  return (
    <div>
        <Hero/>

        <section className='container py-5'>
            <h2>Categorias</h2>
            <div className='row py-2'>
                {categorias.map((c) => (
                    <div key={c.id} className="col-12 col-md-4 pb-3">
                        <CategoryCard 
                            nombre={c.categoria}
                        />
                    </div>
                ))}
            </div>
        </section>

        <section className='container py-5'>
            <h2>Nuestros productos destacados</h2>
            <div className='row py-2'>
                {productos.filter((producto) => producto.destacado)
                    .slice(0,5)
                    .map((producto) => (
                        <div key={producto.id} className="col-12 col-md-3 pb-3">
                            <ProductCard 
                                id={producto.id}
                                nombre={producto.nombre}
                                precio={producto.precio}
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
    </div>
    
  )
}

export default Inicio;