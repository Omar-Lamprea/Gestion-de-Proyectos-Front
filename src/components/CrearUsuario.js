import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
// import { useHistory } from "react-router";

const CrearUsuario = ()=>{

//   const his = useHistory();

  let nombre, identificacion, clave, perfil, email

  const registrarUsuarioNuevo = async (e) => {
      if(nombre.value !== '' && identificacion.value !== '' && clave.value !== '' && email.value !== ''){
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
              window.location.reload()
          } else {
              alert("Se presento un error")
          }
      }else{
          alert('completa todos los campos')
      }
  }

  const CREAR_USUARIO = gql`
      mutation CreateUser($user: UserInput) {
          createUser(user: $user)
      }
  `
  const [crearUser] = useMutation(CREAR_USUARIO)
  return(
    <div className="modal fade" id="newUser" tabindex="-1" aria-labelledby="newUserLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="newUserLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                
            <form>
              <div className="form-group">
                  <label>Nombre</label>
                  <input className="form-control" ref={val => nombre = val} required></input>
              </div>
              <div className="form-group">
                  <label>Identificacion</label>
                  <input type="number" className="form-control" ref={val => identificacion = val} required></input>
              </div>
              <div className="form-group">
                  <label>email</label>
                  <input type="email" className="form-control" ref={val => email = val} required></input>
              </div>
              <div className="form-group">
                  <label>Clave</label>
                  <input type="password" className="form-control" ref={val => clave = val} required></input>
              </div>
              <div className="form-group">
                  <label>Perfil</label>
                  <select className="form-control" ref={val => perfil = val} required>
                      <option></option>
                      <option value="Lider">Lider</option>
                      <option value="Admin">Admin</option>
                      <option value="Estudiante">Estudiante</option>
                  </select>
              </div>
            </form>

            </div>
            <div className="modal-footer">
                <button className="btn btn-primary" onClick={registrarUsuarioNuevo}>Registrarse</button>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CrearUsuario