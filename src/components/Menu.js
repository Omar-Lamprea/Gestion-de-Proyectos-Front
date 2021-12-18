import { Link } from "react-router-dom"
import { useHistory } from "react-router";
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Proyectos from './Proyectos';
// import CrearProyecto from './CrearProyecto';
// import ListaUsuarios from './ListaUsuarios';
// import NoExiste from './NoExiste';
// import EditarProyecto from './EditarProyecto';
// import CrearUsuario from './CrearUsuario';

// import Home from './Home'


const MenuPrincipal = () => {
  const his = useHistory();
  let token = localStorage.getItem('auth_token')

  const cerrar = () => {
    localStorage.clear()
    his.push("/")
  }
  if (token) {
    return (
      <div>
        <nav className="Menu d-flex justify-content-around align-items-center py-4">
          <div className="logo">
            <Link to="/menu"><img src="../img/logo.png"></img> </Link> 
          </div>
          <ul className="nav justify-content-center align-items-center py-4">
            <li className="nav-item">
              <Link className="" to="/proyecto/listar">Ver Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="" to="/usuario">Usuarios</Link>
            </li>
          </ul>
          <button className="btn btn-danger" onClick={cerrar}>Cerrar sesión</button>
        </nav>
        {/* <section className="container-main d-flex justify-content-center align-items-center">
          <Home/>
        </section> */}
      </div>
    )
  } else {

    his.push("/")
    return <div></div>
  }

}

export default MenuPrincipal