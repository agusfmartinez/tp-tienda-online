import Logo from './Logo'
import { Link } from 'react-router'


const Hero = () => {
  return (
    <section className="hero d-flex align-items-start p-5" style={{ backgroundImage: "url(https://picsum.photos/id/237/1920/600)" }}>
        <div className='bg-white bg-opacity-75 border border-primary-subtle rounded-3 p-3'>
            <Logo height={250} className='logoHero'/>
            <p>Los mejores productos para cuidar a tu mascota.</p>
            <Link to="/productos" className='btn btn-primary'>Ver productos</Link>
        </div>
    </section>

  )
}

export default Hero