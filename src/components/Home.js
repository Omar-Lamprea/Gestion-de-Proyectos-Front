import { useMutation } from "@apollo/client"
import gql from "graphql-tag"

const Menu = ()=>{

  const imgStyle ={
    "z-index": "-10",
    "position": "fixed",
    "top": "5rem",
    "height": "100%",
  }

  return(
    <div className="Home text-center">
        <img src="./img/bg-login.jpg" style={imgStyle}/>
      <h1>Bienvenido a <br/>Gestión de proyectos</h1>
    </div>
  )
}


export default Menu