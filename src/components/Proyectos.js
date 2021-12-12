import {
  useQuery,
  gql
} from "@apollo/client";
import { useState } from "react";
import CrearProyecto from "./CrearProyecto"

const Proyectos = () => {
  const PROYECTOS = gql`
  query  {
    proyectos {
      lider
      nombre
      presupuesto
      estado
      objetivosGenerales
      objetivosEspecificos
    }
  }
`;

  const { loading, error, data } = useQuery(PROYECTOS, {
    context: {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkxpZGVyIiwiaWF0IjoxNjM5MzQxNzE1LCJleHAiOjE2MzkzNDg5MTV9.s_O98hS6GZw2SOOxrmlUjC3ObsQ1ERF76lAN-6BQA3o'
      }
    }
  })
  if (loading) return "<h1>Cargando</h1>"
  if (error) return "<h1>problemas con el server de graphql</h1>"

  const datosTabla = data.proyectos.map(({ lider, nombre, presupuesto, estado, objetivosGenerales,  objetivosEspecificos }) => (
    <tr>
      <td>{lider}</td>
      <td>{nombre}</td>
      <td>{presupuesto}</td>
      <td>{estado}</td>
      <td>{objetivosGenerales}</td>
      <td>{objetivosEspecificos}</td>
    </tr>
  ));

  return (
    <div>
      <section className="projects container-fluid d-flex flex-column">
        <table className="table container-proyectos">
          <thead>
            <tr>
              <th>Lider</th>
              <th>Nombre</th>
              <th>Presupuesto</th>
              <th>Estado</th>
              <th>Objetivos Generales</th>
              <th>Objetivos Especificos</th>
            </tr>
          </thead>
          <tbody>
            {datosTabla}
          </tbody>
        </table>
        <button className="btn btn-primary w-50 m-auto" data-bs-toggle="modal" data-bs-target="#addProject">Agregar proyecto nuevo</button>
        
        {/* modal */}
        <div className="modal fade" id="addProject" tabIndex="-1" aria-labelledby="addProjectLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addProjectLabel">Nuevo Proyecto</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <CrearProyecto />
              </div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default Proyectos