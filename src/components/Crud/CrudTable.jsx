/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const CrudTable = ({ equipos, setEditData, deleteEquipo }) => {

  console.log(equipos.length);

  return <>
    <h3>Equipos actuales</h3>
    <table className='table'>
      <thead>
        <tr>
          <td>Equipo</td>
          <td>Pais</td>
          <td></td>
        </tr>
      </ thead>
      <tbody>
        {
          equipos.length === 0 ? <td>No hay datos</td>
            : equipos.map((equipo, index) => {
              return <tr key={index}>
                <td>{equipo.equipo}</td>
                <td>{equipo.pais}</td>
                <td>
                  <button className='btn btn-outline-warning mx-1' onClick={() => setEditData(equipo)}>Editar</button>
                  <button className='btn btn-outline-danger mx-1' onClick={() => deleteEquipo(equipo.id)}>Eliminar</button>
                </td>
              </tr>
            })
        }
      </tbody>
    </table>
  </>
}

export default CrudTable