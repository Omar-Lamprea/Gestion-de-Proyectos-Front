


const Login = () =>{

  const logIn = ()=>{
    console.log('hola');
  }
  
  return(
    <>
      <fomr>
        <input type="email" placeholder="Correo" required/>
        <input type="password" placeholder="Contraseña" required/>
        <button type="submit" onClick={logIn} className="btn btn-success">Iniciar Sesión</button>
      </fomr>
    </>
  )
}

export default Login