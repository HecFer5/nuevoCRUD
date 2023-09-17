import React, { useEffect, useState } from 'react'
import CrudForm from './CrudForm'
import helpFetch from './helpers/helpFetch'

import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import CrudTable from './CrudTable'

const CrudAPI = (editMode) => {
  const API = helpFetch()
  const [editData, setEditData] = useState(null)
  const [nombres, setNombres] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()


console.log(editMode)
if (editMode){
  console.log('editando', editMode)
}else{
  console.log('editando222')
}
  // inserción de datos
  const addNombre = (nombre) => {

    fetch("http://localhost/nombres/?insertar=1", {
      method: 'POST',
      body: JSON.stringify(nombre)
    })
      .then(respuesta => respuesta.json())
      .then((datosRespuesta) => {
        Swal.fire({
          title: `el reistro Nº ${nombre.id}: ${nombre.nombre} ha sido añadido. Desea seguir ingresando`,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Sí',
          denyButtonText: 'No',
          customClass: {
            actions: 'my-actions',
            cancelButton: 'order-1 right-gap',
            confirmButton: 'order-2',
            denyButton: 'order-3',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.replace('');

          } else if (result.isDenied) {
            navigate('/lista')
          }
        })
      })
      .catch(console.log)
  }
  return <>
    <hr />
    <hr />
    <hr />
    <hr />
    <h2>{ 'Ingreso de nuevos registros'}</h2>
    <div className="container-fluid">
      <CrudForm addNombre={addNombre} editData={editData} />
     
      
    </div>
  </>
}
export default CrudAPI;
