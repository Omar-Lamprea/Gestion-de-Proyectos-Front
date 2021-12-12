import {
  gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
  mutation createUser($objGe:String,$presupuesto:Int, $nombreProyecto: String, $lider:String){
      createProject(project:{nombre:$nombreProyecto,lider:$lider,objetivosGenerales:$objGe,presupuesto:$presupuesto})
  }
`;

//Crear mutacion para crear usuario, cambiar por la de proyecto
const CrearProyecto = () => {
  const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
  let project = {
      nombreProyecto: "",
      objetivos: "",
      lider: "",
      presupuesto: 0,
  }

  return (
      <div className="container-new-projects">
          <form onSubmit={e => {
              e.preventDefault();
              creadorDeProyecto({variables:{
                  objGe: project.objetivos.value,
                  presupuesto: parseInt(project.presupuesto.value),
                  nombreProyecto: project.nombreProyecto.value,
                  lider: project.lider.value
              }})
          }} >
              <div>
                  <label>Nombre Usuario</label>
                  <input ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
              </div>
              <div>
                  <label>Idenfificacion</label>
                  <input ref={objetivos => project.objetivos = objetivos} placeholder="Identificación" />
              </div>
              <div>
                  <label>Estado</label>
                  <input ref={lider => project.lider = lider} placeholder="Estado" />
              </div>
              <div>
                  <label>Email</label>
                  <input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Email" />
              </div>
              <div>
                  <label>Rol</label>
                  <input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Rol" />
              </div>
              <div>
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-success">Registrar Usuario</button>
              </div>
          </form>

      </div>
  )
}

export default CrearProyecto