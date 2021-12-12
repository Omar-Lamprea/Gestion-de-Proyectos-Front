import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Usuario from "./Usuario";

import CrearUsuario from "./CrearUsuario"



const ListaUsuarios = () => {
    const USUARIOS = gql`
    query {
        usuarios {
            nombre
            identificacion
            estado
            rol
            correo
      }
    }
`;
    const { data, loading, error } = useQuery(USUARIOS);

    if (loading) {
        return <div>
            <p>Estoy cargando aún</p>
        </div>
    }

    if (error) {
        return <div>
            <p>Hubo un error</p>
        </div>
    }

    return <div className="container-usuarios d-flex flex-column">
        <table className="table container-usuarios">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Identificacion</th>
                    <th>Estado</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.usuarios.map((usuario) => <Usuario user={usuario} />)}
            </tbody>
        </table>
        <button className="btn btn-primary w-50 m-auto" data-bs-toggle="modal" data-bs-target="#addUser">Agregar Usuario</button>
    
    
        {/* modal */}
        <div className="modal fade" id="addUser" tabIndex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addUserLabel">Nuevo Usuario</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <CrearUsuario />
              </div>
            </div>
        </div>
    
    </div>
}

export default ListaUsuarios