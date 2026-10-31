

const DatosUsuario = () => {
  return (
    <main>
      <div class="container-fluid">
          <h1>Acá podes modificar tus datos.</h1>
          <form>
            <div class="row d-flex justify-content-center">
              <h3>Datos personales</h3>
              <div class="col-sm-4">
                <label for="inputName">Nombre</label>
                <input type="text" class="form-control" id="inputName" placeholder="Ingresa tu nombre completo"/>
                <label for="inputDni">DNI</label>
                <input type="number" class="form-control" id="inputDni" placeholder="Ingresa tu dni sin puntos"/>
                <label for="inputPassword">Contraseña</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="******"/>
              </div>
              <div class="col-sm-4">
                <label for="inputName">Apellido</label>
                <input type="text" class="form-control" id="inputName" placeholder="Ingresa tu apellido."/>
                <label for="inputCorreo">Correo Electrónico</label>
                <input type="email" class="form-control" id="inputCorreo" placeholder="Ingresa tu correo electrónico."/>
                <label for="inputPassword">Confirmar Contraseña</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="******"/>
              </div>
            </div>
            <h3>Datos de envío</h3>
            <div class="row d-flex justify-content-center">
              <div div class="col-sm-4">
                <label for="inputAddress">Dirección</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Calle falsa 123"/>
                <div class="form-row">
                <label for="inputZip">Código Postal</label>
                <input type="text" class="form-control" id="inputZip"/>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck"/>
                  <label class="form-check-label" for="gridCheck">Recordar estos datos para la facturación.</label>
                </div>
              </div>
            </div>
              <div div class="col-sm-4">
                <label for="inputAddress2">Indicar piso/departamento si corresponde</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Ej: Piso 6 - Departamento E"/>
                <label for="inputCity">Localidad</label>
                <input type="text" class="form-control" id="inputCity"/>
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
            </div>
            <div class="d-flex align-items-center"> 
              <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
            
          </form>
      </div>
    </main>
  )
}

export default DatosUsuario;