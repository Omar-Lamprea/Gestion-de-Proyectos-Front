import { Link } from "react-router-dom"
import { useHistory } from "react-router";


const MenuPrincipal = () => {
  const his = useHistory();
  let token = localStorage.getItem('auth_token')

  const cerrar = () => {
    localStorage.clear()
    his.push("/")
  }
  if (token) {
    return <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/proyecto">Crear Proyecto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/proyecto/listar">Ver Proyectos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="usuario">Usuarios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="usuario/registro">Crear Usuario</Link>
        </li>
        <li className="nav-item">
          <button onClick={cerrar}>Cerrar sesión</button>
        </li>
      </ul>
    </div>
  } else {

    his.push("/")
    return <div></div>
  }

}

export default MenuPrincipal