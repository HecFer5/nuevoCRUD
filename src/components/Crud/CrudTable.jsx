import React, { useEffect, useState } from 'react'
import helpFetch from './helpers/helpFetch'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Modal from '../Modales/Modal'
import CrudForm from './CrudForm'




const CrudTable = (setEditData, editData) => {
  const API = helpFetch()

  const [nombres, setNombres] = useState([])
  const [nombre, setNombre] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  // const [modal, setModal] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    API.get("nombres/").then((response) => {
      if (!response.error) {
        setNombres(response)
        setErrorMessage(null)
      } else {
        setEditData(null)
        setErrorMessage(response.statusText)
      }
      setLoading(false)
    })
  }, []);

  //ELIMINAR UN REGISTRO
  const BorraRegistro = (nombre) => {
    return (
      Swal.fire({
        title: `El reistro Nº ${nombre.id}: ${nombre.nombre} será borrado. ¿Desea continuar?`,
        showDenyButton: true,
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


          Swal.fire('El registro se ha borrado', '', 'success',
            deleteNombre(nombre.id))

        } else if (result.isDenied) {
          console.log('gg')
        }
      })



    )
  }

  const deleteNombre = (id) => {
    fetch("http://localhost/nombres/?borrar=" + id)
      .then(respuesta => respuesta.json())
      .then((modalRespuesta) => {

        console.log();


      })
      .catch(console.log)
    window.location.replace('');
  }

  ////////////////////////////////////////////////////

  const [id, setId] = useState('')
  const [editMode, setEditMode] = useState(false)

   const editarNombre = (elNombre) => {
    console.log(editMode, 'uno')
    setEditMode(!editMode)
 
    setNombre(elNombre.nombre)
    console.log(editMode, 'dos')

   if(editMode===true){
   console.log('verdadero en tabla')
}else{
  console.log('falso en tabla')
}  
    
    setId(id)
     navigate('/crudApi', editMode)
    // editMode(false)


    // fetch("http://localhost/nombres/?borrar=" + id)
    //   .then(respuesta => respuesta.json())
    //   .then((modalRespuesta) => {

    //     console.log();


    //   })
    //   .catch(console.log)
    // window.location.replace('');
  }
  //   const cambioValor = (e) => {
  //     setData[e.target.name] = e.target.value
  //     setData(data)
  // }

  // const editarRegistro = (nombre) => {
  //   editNombre(nombre.id)
  // }

  // /// EDITAR Y ACTUALIZAR UN REGISTRO
  // const editNombre = (id) => {
  //   fetch("http://localhost/nombres/?actualizar=" + id, {
  //     method: 'POST',
  //     body: JSON.stringify(id)
  //   })
  //     .then(respuesta => respuesta.json())
  //     .then((modalRespuesta) => {

  //       console.log(modalRespuesta);
  //       setEditData(...editData, id)



  //     })
  //     .catch(console.log)
  //   console.log('edita', id)
  // }

  const navigateEditar = () => {
    // navigate('/lista')
    window.location.replace('');

  }
  return <div className='container-fluid'>
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <h3>Registros Ingresados</h3>
    <table className='table table-striped table-bordered border-primary'>
      <thead className='table-dark'>
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
                  <button className='btn btn-outline-warning mx-1'
                    onClick={() => editarNombre(nombre)} >Editar
                  </button>

                  <button className='btn btn-outline-danger mx-1'
                    onClick={() => BorraRegistro(nombre)}>Eliminar
                  </button>

                </td>
              </tr>
            })
        }

      </tbody>
    </table>

  </div>

}

export default CrudTable