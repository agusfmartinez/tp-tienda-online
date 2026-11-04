
import { useState } from "react";

const formularioVacio = {
  nombre: "",
  email: "",
  telefono: "",
  direccion: "",
  entrega: "",
  mensaje: "",
};

function FormularioCompra({ carrito, total, vaciarCarrito, mostrarToast }) {

  const [formulario, setFormulario] = useState(formularioVacio);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  // Validaciones del formulario
  function validar() {
    const nuevosErrores = {};

    if (formulario.nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre y apellido son obligatorios.";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(formulario.nombre)) {
      nuevosErrores.nombre = "El nombre solo debe contener letras.";
    }

    if (formulario.email.trim() === "") {
      nuevosErrores.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
      nuevosErrores.email = "El email no tiene un formato válido.";
    }

    if (formulario.telefono.trim() === "") {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d+$/.test(formulario.telefono)) {
      nuevosErrores.telefono = "El teléfono solo debe contener números.";
    } else if (formulario.telefono.length !== 10) {
      nuevosErrores.telefono = "El teléfono debe tener exactamente 10 números sin espacios ni símbolos.";
    }
    if (formulario.direccion.trim() === "") {
      nuevosErrores.direccion = "La dirección es obligatoria.";
    }

    if (formulario.entrega === "") {
      nuevosErrores.entrega = "Seleccioná un método de entrega.";
    }

    return nuevosErrores;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (carrito.length === 0) {
      mostrarToast({
        mensaje: "No hay ninguna compra pendiente.",
        tipo: "danger",
        titulo: "Resumen Compra",
      });
      return;
    }

    const nuevosErrores = validar();
    setErrores(nuevosErrores);


    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    vaciarCarrito();

    setFormulario(formularioVacio);
    setErrores({});

    mostrarToast({
      mensaje: "¡Muchas gracias!",
      tipo: "success",
      delay: 7000,
      titulo: "¡Compra realizada correctamente!",
    });
  };

  return (
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

      <form onSubmit={handleSubmit} noValidate>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre y apellido
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
            value={formulario.nombre}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.nombre}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={`form-control ${errores.email ? "is-invalid" : ""}`}
            value={formulario.email}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.email}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            name="telefono"
            className={`form-control ${errores.telefono ? "is-invalid" : ""}`}
            value={formulario.telefono}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.telefono}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección o localidad
          </label>
          <input
            id="direccion"
            type="text"
            name="direccion"
            className={`form-control ${errores.direccion ? "is-invalid" : ""}`}
            value={formulario.direccion}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.direccion}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="entrega" className="form-label">
            Método de entrega
          </label>
          <select
            id="entrega"
            name="entrega"
            className={`form-select ${errores.entrega ? "is-invalid" : ""}`}
            value={formulario.entrega}
            onChange={handleChange}
          >
            <option value="">Seleccionar método</option>
            <option value="domicilio">Envío a domicilio</option>
            <option value="local">Retiro en el local</option>
          </select>
          <div className="invalid-feedback">{errores.entrega}</div>
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje o aclaración
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            className={`form-control ${errores.mensaje ? "is-invalid" : ""}`}
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
  );
}

export default FormularioCompra;
