import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Usuario from "./Usuario";
import Menu from './Menu'
import CrearUsuario from './CrearUsuario'


const ListaUsuarios = () => {
    const USUARIOS = gql`
    query {
        usuarios {
        nombre
        identificacion
        estado
        email
        perfil
      }
    }
`;
    const { data, loading, error, refetch } = useQuery(USUARIOS);

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

    return (
        <div>
            <Menu/>
            <section className="container container-main d-flex flex-column justify-content-center align-items-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Identificacion</th>
                            <th>Estado</th>
                            <th>Email</th>
                            <th>Perfil</th>
                            <th>Acciones</th>
                        </tr>
                        {data.usuarios.map((usuario) => <Usuario key={usuario.identificacion} user={usuario} onUserChange={refetch} />)}
                    </thead>
                </table>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newUser">
                    Launch demo modal
                </button>

                <CrearUsuario/>

            </section>
        </div>
    )
}

export default ListaUsuarios