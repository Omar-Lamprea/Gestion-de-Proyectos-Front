import {
  useQuery,
  gql
} from "@apollo/client";
import { Link } from "react-router-dom";
import Menu from './Menu';
import CrearProyecto from './CrearProyecto'

const Proyectos = () => {
  const PROYECTOS = gql`
  query  {
    proyectos {
      lider
      nombre
      presupuesto
      _id
    }
  }
`;

  const { loading, error, data } = useQuery(PROYECTOS, {
    context: {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkVzdHVkaWFudGUiLCJpYXQiOjE2Mzc5MjQ5NDEsImV4cCI6MTYzNzkzMjE0MX0.A8vvtMPG0SDJKoewopdKQduOcQMhQoOsTxS9C_wWzvw'
      }
    }
  })
  if (loading) return "<h1>Cargando</h1>"
  if (error) return "<h1>problemas con el server de graphql</h1>"

  const datosTabla = data.proyectos.map(({ lider, nombre, presupuesto, _id }) => (
    <tr key={nombre}>
      <td>{nombre}</td>
      <td>{lider}</td>
      <td>{presupuesto}</td>
      <td><Link to={`/proyecto/${_id}`}>editar</Link></td>
    </tr>
  ));

  return (
    <div>
      <Menu />
      <section className="container container-main d-flex flex-column justify-content-center align-items-center">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre Proyecto</th>
              <th>Lider del Proyecto</th>
              <th>Presupuesto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datosTabla}
          </tbody>
        </table>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#newProject">
          Agregar proyecto nuevo
        </button>

        <CrearProyecto/>
        
      </section>
    </div>
  )
}

export default Proyectos