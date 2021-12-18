import {
  gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
  mutation creeProyecto($objGe:String,$presupuesto:Int, $nombreProyecto: String, $lider:String){
      createProject(project:{nombre:$nombreProyecto,lider:$lider,objetivosGenerales:$objGe,presupuesto:$presupuesto})
  }
`;

const CrearProyecto = ()=>{
  const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        nombreProyecto: "",
        objetivos: "",
        lider: "",
        presupuesto: 0,
    }
  return(
      <div class="modal fade" id="newProject" tabindex="-1" aria-labelledby="newProjectLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newProjectLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form onSubmit={e => {
                e.preventDefault();
                creadorDeProyecto({variables:{
                    objGe: project.objetivos.value,
                    presupuesto: parseInt(project.presupuesto.value),
                    nombreProyecto: project.nombreProyecto.value,
                    lider: project.lider.value
                }})
            }} >
                <div className="form-group">
                    <label>Nombre Proyecto</label>
                    <input className="form-control" ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
                </div>
                <div className="form-group">
                    <label>Objetivos</label>
                    <input className="form-control" ref={objetivos => project.objetivos = objetivos} placeholder="Objetivos" />
                </div>
                <div className="form-group">
                    <label>Lider</label>
                    <input  className="form-control"ref={lider => project.lider = lider} placeholder="Lider" />
                </div>
                <div className="form-group">
                    <label>Presupuesto</label>
                    <input className="form-control" ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
                </div>
                <div><button className="btn btn-primary" type="submit">Registrar Proyecto</button></div>
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


export default CrearProyecto