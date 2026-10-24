
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

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formulario);
    alert("Formulario enviado correctamente");
  };

  return (
    <div className="container my-5">
      <h2>Formulario de compra</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre y apellido</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            value={formulario.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formulario.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            className="form-control"
            value={formulario.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección o localidad</label>
          <input
            type="text"
            name="direccion"
            className="form-control"
            value={formulario.direccion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Método de entrega</label>
          <select
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
          <label className="form-label">
            Mensaje o aclaración
          </label>
          <textarea
            name="mensaje"
            className="form-control"
            rows="3"
            value={formulario.mensaje}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Confirmar compra
        </button>
      </form>
    </div>
  );
}

export default FormularioCompra;
