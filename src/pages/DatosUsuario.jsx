import React from 'react'

const DatosUsuario = () => {
  return (
    <div>
        <h1>Acá podes modificar tus datos.</h1>
        <form>
          <div class="form-row">
            <div class="form-group col-md-5">
              <label for="inputName">Nombre</label>
              <input type="text" class="form-control" id="inputName" placeholder="Ingresa tu nombre completo."/>
              <label for="inputName">Apellido</label>
              <input type="text" class="form-control" id="inputName" placeholder="Ingresa tu apellido."/>
              <label for="inputDni">DNI</label>
              <input type="number" class="form-control" id="inputDni" placeholder="Ingresa tu dni sin puntos."/>
              <label for="inputCorreo">Correo Electrónico</label>
              <input type="email" class="form-control" id="inputCorreo" placeholder="Ingresa tu correo electrónico."/>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Contraseña</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="******"/>
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Dirección</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Calle falsa 123"/>
          </div>
          <div class="form-group">
            <label for="inputAddress2">Indicar piso/departamento si corresponde</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Ej: Piso 6 - Departamento E"/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">Localidad</label>
              <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">Provincia</label>
              <select id="inputState" class="form-control">
                <option selected>Provincia de Buenos Aires</option>
                <option>Buenos Aires</option>
                <option>Catamarca</option>
                <option>Ciudad Autónoma de Buenos Aires</option>
                <option>Chaco</option>
                <option>Chubut</option>
                <option>Córdoba</option>
                <option>Corrientes</option>
                <option>Entre Ríos</option>
                <option>Formosa</option>
                <option>Jujuy</option>
                <option>La Pampa</option>
                <option>La Rioja</option>
                <option>Mendoza</option>
                <option>Misiones</option>
                <option>Neuquén</option>
                <option>Río Negro</option>
                <option>Salta</option>
                <option>San Juan</option>
                <option>San Luis</option>
                <option>Santa Cruz</option>
                <option>Santa Fe</option>
                <option>Santiago del Estero</option>
                <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
                <option>Tucumán</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Código Postal</label>
              <input type="text" class="form-control" id="inputZip"/>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">Recordar estos datos para la facturación.</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
    </div>
  )
}

export default DatosUsuario;