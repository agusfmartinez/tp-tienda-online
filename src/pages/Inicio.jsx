import React, {useState, useEffect} from 'react';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import {useProductos} from '../hooks/productosHook'
import {useCategorias} from '../hooks/categoriasHook'

const Inicio = () => {
    
    const categorias = useCategorias();
    const productos = useProductos();

  return (
    <div>
        <Hero/>

        <section className='container py-5'>
            <h2>Categorias</h2>
            <div className='row py-2'>
                {/* pendiente pasar datos de la categoria al card de categoria */}
                {categorias && categorias.map((cat) => 
                    <div className="col-12 col-md-4">
                        <CategoryCard />
                    </div>
                )}
            </div>
            
        </section>

        <section className='container py-5'>
            <h2>Nuestros productos destacados</h2>
            <div className='row py-2'>
                {productos.filter((producto) => producto.destacado)
                    .slice(0,4)
                    .map((producto) => (
                        <div key={producto.id} className="col-12 col-md-3">
                            <ProductCard 
                                nombre={producto.nombre}
                                precio={producto.precio}
                                agregar={() => agregarAlCarrito(producto)}
                            />
                        </div>
                ))};
            </div>
        </section>

        <section className='container py-5'>
            <h2>Sobre nosotros</h2>
            <p>Doggy Style es una marca dedicada al Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellat dicta eius sint, rem magnam, obcaecati quod totam nesciunt, similique dolorem sequi minima dolore nam repudiandae a error ipsam enim?
            Tenetur omnis incidunt quasi at, amet doloribus ab totam aliquam, beatae animi vitae placeat, quae magni. Necessitatibus iste deserunt, enim quis officiis, culpa aperiam debitis dolorem accusantium distinctio cupiditate tempore.
            Et, inventore! Illum asperiores ea eligendi deleniti libero voluptatem quis quo reprehenderit architecto veritatis atque provident ducimus veniam consequuntur dolorem quod magni, suscipit hic explicabo quas rem dolorum ipsum modi.</p>
        </section>
    </div>
    
  )
}

export default Inicio;