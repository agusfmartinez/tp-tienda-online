
function Login() {
  return (
    <form style={{ width: '18rem'}}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Correo Electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="micorreo@ejemplo.com"/>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*****"/>
            <small id="emailHelp" className="form-text text-muted">No compartas tu contraseña.</small>
        </div>

        <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Recordar mis credenciales</label>
        </div>
        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
    </form>
  );
}

export default Login;