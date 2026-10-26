import { useState } from "react";

function FormularioCompra() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    entrega: "",
    mensaje: "",
  });

  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito") || "[]");
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const carritoActualizado = JSON.parse(
      localStorage.getItem("carrito") || "[]"
    );

    if (carritoActualizado.length === 0) {
      setCarrito([]);
      alert("No podés confirmar una compra con el carrito vacío.");
      return;
    }

    console.log("Datos del cliente:", formulario);
    console.log("Productos comprados:", carritoActualizado);

   
    localStorage.setItem("carrito", JSON.stringify([]));
    setCarrito([]);

   
    setFormulario({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      entrega: "",
      mensaje: "",
    });

    alert("¡Compra realizada correctamente!");
  };

  return (
    <main className="container my-5">
      <h2>Formulario de compra</h2>

      {carrito.length === 0 ? (
        <div className="alert alert-warning">
          Tu carrito está vacío. Agregá productos antes de finalizar la compra.
        </div>
      ) : (
        <div className="alert alert-info">
          Tenés {carrito.reduce((total, producto) => total + producto.cantidad, 0)} producto(s) en tu carrito.
          <br />
          Total de la compra: $
          {carrito.reduce(
            (total, producto) =>
              total + producto.precio * producto.cantidad,
            0
          )}
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
    </main>
  );
}

export default FormularioCompra;