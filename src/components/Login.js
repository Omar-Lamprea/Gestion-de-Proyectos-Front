import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { useState } from "react";
import { useHistory } from "react-router";
import CrearUsuario from "./CrearUsuario";


const Login = () => {
    const his = useHistory();
    let user;
    const [pass, setPass] = useState("")
    const AUTENTICAR_USUARIO = gql`
        mutation autenticar($usuario:String,$clave:String){
            autenticar(usuario:$usuario,clave:$clave){
                status
                jwt
            }
        }
    `
    const changeClave = (e) => {
        e.preventDefault();
        setPass(e.target.value)
    }
    const [auth] = useMutation(AUTENTICAR_USUARIO)
    const autenticar = async (e) => {
        e.preventDefault();

        const { data: { autenticar } } = await auth({
            variables: {
                usuario: user.value,
                clave: pass
            }
        })
        if (autenticar.status !== 200) {
            alert("Usuario y/o contrasena invalida")
        } else {
            localStorage.setItem('auth_token', autenticar.jwt)
            his.push("/menu")
        }
    }
    const registroUsuarioNuevo = () => {
        his.push("/usuario/registro")
    }
    return (
        <div className="login d-flex justify-content-center align-items-center">
            <img src="./img/bg-login.jpg"></img>
            <form>
                <h3>Login</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email" id="username" required ref={u => user = u} />
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" required id="password"
                    value={pass}
                    onChange={changeClave} />
                <div className="d-flex flex-column">
                    <button className="btn btn-primary my-2" onClick={autenticar}>Iniciar Sessión</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newUser">
                        Crear nuevo usuario
                    </button>
                    <CrearUsuario/>
                </div>
            </form>
        </div>
    )
}

export default Login