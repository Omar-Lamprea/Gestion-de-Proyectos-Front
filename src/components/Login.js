const Login = () =>{

  const logIn = ()=>{
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value

    //agregar petición para vaidar usuario
    if(email === 'admin@gmail.com' && pass === 'admin123'){
      localStorage.setItem('rol', '=)')
      window.location.reload()
    }else{
      alert('usuario no válido')
    }
  }

  const enter = () =>{
    document.addEventListener('keyup', (e)=>{
      if (e.key === 'Enter') logIn();
    })
  }
  
  return(
    <>
      <section className="login">
        <img src="./img/bg-login.jpg" />
        <form>
          <input type="email" placeholder="Correo" id="email" required/>
          <input type="password" placeholder="Contraseña" id="pass" onKeyDown={enter} required/>
          <button type="submit" onClick={logIn} className="btn btn-success">Iniciar Sesión</button>
          <p>correo: admin@gmail.com</p>
          <p>pass: admin123</p>
        </form>
      </section>
    </>
  )
}

export default Login