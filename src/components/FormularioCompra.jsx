import { useState, useEffect } from "react";

function FormularioCompra({ carrito, total, vaciarCarrito }) {

  const [formulario, setFormulario] = useState({

    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    entrega: "",
    mensaje: "",
  });


  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;

    const temporizador = setTimeout(() => {
      setToast(null);
    }, 5000);

    return () => clearTimeout(temporizador);
  }, [toast]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (carrito.length === 0) {
      setToast({
        mensaje: "No hay ninguna compra pendiente.",
        tipo: "danger",
      });
    }

    console.log("Datos del cliente:", formulario);
    console.log("Productos comprados:", carrito);
    console.log("Total de la compra:", total);

    // Vaciamos el carrito compartido
    vaciarCarrito();

    setFormulario({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      entrega: "",
      mensaje: "",
    });

    setToast({
      mensaje: "¡Compra realizada correctamente!",
      tipo: "success"
    });
  };

  return (
    <>
      {toast && (
        <div
          className={`alert alert-${toast.tipo} alert-dismissible fade show position-fixed top-0 end-0 m-3`}
          style={{ zIndex: 9999 }}// es par a que el toast se muestre por encima de otros elementos
          role="alert"
        >
          {toast.mensaje}

          <button
            type="button"
            className="btn-close"
            onClick={() => setToast(null)}
          ></button>
        </div>
      )}

      <div className="container my-5">
        <h2>Formulario de compra</h2>

        {carrito.length === 0 ? (
          <div className="alert alert-warning">
            No hay ninguna compra pendiente. Agregá productos para continuar.
          </div>
        ) : (
          <div className="alert alert-info">
            Tenés {carrito.reduce((total, producto) => total + producto.cantidad, 0)} producto(s) en tu carrito.
            <br />
            Total de la compra: ${total.toLocaleString("es-AR")}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre y apellido
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              className="form-control"
              value={formulario.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              value={formulario.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              className="form-control"
              value={formulario.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Dirección o localidad
            </label>
            <input
              id="direccion"
              type="text"
              name="direccion"
              className="form-control"
              value={formulario.direccion}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="entrega" className="form-label">
              Método de entrega
            </label>
            <select
              id="entrega"
              name="entrega"
              className="form-select"
              value={formulario.entrega}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar método</option>
              <option value="domicilio">Envío a domicilio</option>
              <option value="local">Retiro en el local</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje o aclaración
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="form-control"
              rows="3"
              value={formulario.mensaje}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-dark"
            disabled={carrito.length === 0}
          >
            Confirmar compra
          </button>
        </form>
      </div>
    </>
  );
}

export default FormularioCompra;