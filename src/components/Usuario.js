import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { useState } from "react"

const Usuario = ({ user, onUserChange }) => {

    const [estadoUser, setEstadoUser] = useState(user.estado) 
    /*
        mutation{
            activeUser(identificacion:224465)
        }
    /*/
    const ACTIVAR_USUARIO = gql`
        mutation activeUser($identificacion:Int){
            activeUser(identificacion:$identificacion)
        }
    `
    const ELIMINAR_USUARIO = gql`
        mutation deleteUser($ident:Int){
            deleteUser(ident:$ident)
        }
    `
    const [activar] = useMutation(ACTIVAR_USUARIO)
    const [eliminar] = useMutation(ELIMINAR_USUARIO)


    const activarUser = () => {
        activar({ variables: { identificacion: user.identificacion } })
        estadoUser === 'Activo' ? setEstadoUser('Inactivo') : setEstadoUser('Activo')
    }

    const eliminarUser = () => {
        eliminar({ variables: { ident: user.identificacion } })
        onUserChange()
    }

    return <tr>
        <td>{user.nombre}</td>
        <td>{user.identificacion}</td>
        <td>{estadoUser}</td>
        <td>{user.email}</td>
        <td>{user.perfil}</td>
        <td><button className="btn btn-primary" onClick={activarUser}>Activar</button>
            <button className="btn btn-primary" onClick={eliminarUser}>Eliminar</button></td>
    </tr>
}

export default Usuario