import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
    mutation creeProyecto($objGe:String,$presupuesto:Int, $nombreProyecto: String, $lider:String){
        createProject(project:{nombre:$nombreProyecto,lider:$lider,objetivosGenerales:$objGe,presupuesto:$presupuesto})
    }
`;

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
                    <label>Nombre Proyecto</label>
                    <input ref={nombre => project.nombreProyecto = nombre} placeholder="Nombre" />
                </div>
                <div>
                    <label>Objetivos</label>
                    <input ref={objetivos => project.objetivos = objetivos} placeholder="Objetivos" />
                </div>
                <div>
                    <label>Lider</label>
                    <input ref={lider => project.lider = lider} placeholder="Lider" />
                </div>
                <div>
                    <label>Presupuesto</label>
                    <input ref={presupuesto => project.presupuesto = presupuesto} placeholder="Presupuesto" />
                </div>
                <div>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-success">Registrar Proyecto</button>
                </div>
            </form>
        </div>
    )
}

export default CrearProyecto