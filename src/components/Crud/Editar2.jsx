import React, { useEffect, useState } from 'react'
import helpFetch from './helpers/helpFetch'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import CrudAPI from './CrudAPI'
import MenuInicial from './MenuInicial'
import CrudForm from './CrudForm'
import { Link } from 'react-router-dom'


const Editar2 = () => {
  const API = helpFetch()
  const [editData, setEditData] = useState(null)
  const [nombres, setNombres] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

 

  return <>
  <hr />
  <hr />
  <hr />
  <hr />
  <hr />
<CrudForm/>
    <h3>Registros Ingresados</h3>
    <table className='table'>
      <thead>
        <tr>
          <td>Nombre Común</td>
          <td>Nombre Científico</td>
          <td></td>
        </tr>
      </ thead>
      <tbody>
        {
          nombres === 0 ? <tr><td>No hay datos</td></tr>
            : nombres.map((nombre, index) => {
              return <tr key={index}>
                <td>{nombre.nombre}</td>
                <td>{nombre.cientifico}</td>
                <td>
                  <button className='btn btn-outline-warning mx-1' >Editar</button>
                  {/* <Link to='/edita' className='btn btn-outline-primary mx-1' >editar</Link> */}
               
                </td>
              </tr>
            })
        }

      </tbody>
    </table>
   
  </>
}

export default Editar2