import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useHistory } from "react-router";

const CrearUsuario = ()=>{

  const his = useHistory();

  let nombre, identificacion, clave, perfil, email

  const registrarUsuarioNuevo = async (e) => {
      e.preventDefault()
      let nuevoUsuario = {
          "nombre": nombre.value,
          "identificacion": parseInt(identificacion.value),
          "perfil": perfil.value,
          "clave": clave.value,
          'email': email.value
      }
      const response = await crearUser({ variables: { user: nuevoUsuario } })
      if (response?.data?.createUser) {
          alert("Usuario Creado")
          his.push("/")
      } else {
          alert("Se presento un error")
      }
  }

  const CREAR_USUARIO = gql`
      mutation CreateUser($user: UserInput) {
          createUser(user: $user)
      }
  `
  const [crearUser] = useMutation(CREAR_USUARIO)
  return(
    <div class="modal fade" id="newUser" tabindex="-1" aria-labelledby="newUserLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="newUserLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
            <form>
              <div className="form-group">
                  <label>Nombre</label>
                  <input className="form-control" ref={val => nombre = val}></input>
              </div>
              <div className="form-group">
                  <label>Identificacion</label>
                  <input type="number" className="form-control" ref={val => identificacion = val}></input>
              </div>
              <div className="form-group">
                  <label>email</label>
                  <input type="email" className="form-control" ref={val => email = val}></input>
              </div>
              <div className="form-group">
                  <label>Clave</label>
                  <input type="password" className="form-control" ref={val => clave = val}></input>
              </div>
              <div className="form-group">
                  <label>Perfil</label>
                  <select className="form-control" ref={val => perfil = val}>
                      <option></option>
                      <option value="Lider">Lider</option>
                      <option value="Admin">Admin</option>
                      <option value="Estudiante">Estudiante</option>
                  </select>
              </div>
              <button className="btn btn-primary" onClick={registrarUsuarioNuevo}>Registrarse</button>
            </form>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CrearUsuario