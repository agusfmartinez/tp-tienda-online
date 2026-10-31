import Logo from './Logo'
import { Link } from 'react-router'


const Hero = () => {
  return (
    <section
      className="hero d-flex justify-content-center justify-content-md-start align-items-center align-items-md-start p-3 p-md-5"
      style={{ backgroundImage: "url(https://picsum.photos/id/237/1920/600)" }}
    >
      <div className='bg-white bg-opacity-75 border border-primary-subtle rounded-3 p-3 text-center text-md-start'>
        <Logo className='logoHero'/>
        <p>Los mejores productos para cuidar a tu mascota.</p>
        <Link to="/productos" className='btn btn-primary'>Ver productos</Link>
      </div>
    </section>


  )
}

export default Hero