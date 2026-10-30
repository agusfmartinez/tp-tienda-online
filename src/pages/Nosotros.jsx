import React from 'react'

const Nosotros = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Sobre Nosotros</h1>
        <h3 className="text-success">El Doggy Style 🐾</h3>
        <p className="lead">
          ¡Todo lo que tu mascota necesita, en un solo lugar!
        </p>
      </div>

      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>¿Quiénes somos?</h2>
          <p>
            En <strong>El Doggy Style</strong> somos una tienda dedicada
            a ofrecer productos para el cuidado, bienestar y diversión
            de las mascotas. Nuestro objetivo es brindar todo lo necesario
            para que tus compañeros de cuatro patas tengan una vida feliz
            y saludable.
          </p>

          <p>
            Contamos con diferentes categorías de productos, desde
            alimentos y juguetes hasta camas, accesorios y artículos
            de higiene.
          </p>
        </div>

        <div className="col-md-6">
          <h2>Nuestra misión</h2>
          <p>
            Nuestra misión es facilitar el acceso a productos de calidad
            para mascotas, ofreciendo una experiencia de compra sencilla,
            cómoda y accesible para todos los amantes de los animales.
          </p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="text-center">
        <h2>¿Por qué elegirnos?</h2>

        <div className="row mt-4">
          <div className="col-md-4 mb-3">
            <h4>🐶 Variedad</h4>
            <p>
              Diferentes productos para satisfacer las necesidades
              de cada mascota.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h4>❤️ Bienestar</h4>
            <p>
              Nos importa la comodidad, felicidad y cuidado de tus mascotas.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h4>🛒 Fácil compra</h4>
            <p>
              Una tienda online práctica para encontrar lo que necesitás.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-5 p-4 bg-light rounded">
        <h3 className="text-success">
          El Doggy Style 🐾
        </h3>
        <p className="mb-0">
          Porque ellos también merecen lo mejor.
        </p>
      </div>
    </div>
  )
}

export default Nosotros;