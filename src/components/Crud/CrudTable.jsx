import React, { useEffect, useState } from 'react'
import helpFetch from './helpers/helpFetch'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import CrudAPI from './CrudAPI'
import MenuInicial from './MenuInicial'
import CrudForm from './CrudForm'
import { Link } from 'react-router-dom'
import Modal from '../Modales/Modal'
import Editar from './Editar'


const CrudTable = (editNombre) => {
  const API = helpFetch()
  const [editData, setEditData] = useState(null)
  const [nombres, setNombres] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [verContador, setVerContador] = useState(false)

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
          //   Swal.fire('Changes are not saved', '', 'info')
        }
      })



    )
  }

  const deleteNombre = (id) => {
    fetch("http://localhost/nombres/?borrar=" + id)
      .then(respuesta => respuesta.json())
      .then((datosRespuesta) => {

        console.log();


      })
      .catch(console.log)
    window.location.replace('');
  }


  // /// EDITAR Y ACTUALIZAR UN REGISTRO
  // const editNombre = (nombre) => {
  //   fetch("http://localhost/nombres/?actualizar=1", {
  //     method: 'POST',
  //     body: JSON.stringify(nombre)
  //   })
  //     .then(respuesta => respuesta.json())
  //     .then((datosRespuesta) => {

  //       console.log(datosRespuesta);
  //       //  navigate('/edita/' , {para})
  //       // <Editar editNombre={editNombre} />




  //     })
  //     .catch(console.log)

  // }


  return <>

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
                  {/* <button className='btn btn-outline-warning mx-1' onClick={() => editNombre(nombre)} >Editar</button> */}
                  {/* <Link to='/edita' className='btn btn-outline-primary mx-1' >editar</Link> */}

                  <button className='btn btn-success m-2' onClick={() => setVerContador(true)}>Ver Menu</button>
                  <Modal nombre={nombre} isOpen={verContador} onClose={() => setVerContador(false)}>
                    <Editar /></Modal>

                  <button className='btn btn-outline-danger mx-1' onClick={() => BorraRegistro(nombre)}>Eliminar</button>
                </td>
              </tr>
            })
        }

      </tbody>
    </table>

  </>
}

export default CrudTable