import React from 'react'

const Hero = () => {
  return (
    <section className="hero d-flex align-items-start p-5" style={{ backgroundImage: "url(https://picsum.photos/id/237/1920/600)" }}>
        <div className='bg-primary-subtle border border-primary-subtle rounded-3 p-3'>
            <h1>El Doggy Style</h1>
            <p>Los mejores productos para cuidar a tu mascota.</p>
            <button className='btn btn-primary'>Ver productos</button>
        </div>
    </section>

  )
}

export default Hero