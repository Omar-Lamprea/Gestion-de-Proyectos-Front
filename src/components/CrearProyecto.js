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
      <div className="modal fade" id="newProject" tabindex="-1" aria-labelledby="newProjectLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newProjectLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
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
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary mx-2 mt-3" type="submit">Registrar Proyecto</button>
                  <button type="button" className="btn btn-secondary mt-3" data-bs-dismiss="modal">Close</button>
                </div>
            </form>
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
  )
}


export default CrearProyecto