import {
    gql, useMutation
} from "@apollo/client";
import React from "react";

const MUTATION_PROYECTO = gql`
    mutation creeProyecto($objetivosGenerales:String,$presupuesto:Int, $nombre: String, $lider:String){
        createProject(project:{nombre:$nombre,lider:$lider,objetivosGenerales:$objetivosGenerales,presupuesto:$presupuesto})
    }`;

const CrearProyecto = () => {
    const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO)
    let project = {
        nombre: "",
        objetivosGenerales: "",
        lider: "",
        presupuesto: 0,
    }

    return (
        <div className="container-new-projects">
            <form onSubmit={e => {
                e.preventDefault();
                creadorDeProyecto({variables:{
                    objetivosGenerales: project.objetivos.value,
                    presupuesto: parseInt(project.presupuesto.value),
                    nombre: project.nombre.value,
                    lider: project.lider.value
                }})
            }} >
                <div>
                    <label>Nombre Proyecto</label>
                    <input ref={nombre => project.nombre = nombre} placeholder="Nombre" />
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