import React, { useEffect, useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import helpFetch from './helpers/helpFetch'
import Loader from './loader'
import Message from './Messsage'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const CrudAPI = () => {
    const API = helpFetch()
    const [editData, setEditData] = useState(null)
    const [nombres, setNombres] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()

    // console.log(API)
    // useEffect(() => {
    //     setLoading(true)
    //     API.get("nombres/").then((response) => {
    //         if (!response.error) {
    //             setNombres(response)
    //             setErrorMessage(null)
    //         } else {
    //             setEditData(null)
    //             setErrorMessage(response.statusText)
    //         }
    //         setLoading(false)
    //     })
    // }, []);


    // inserción de datos
    const addNombre = (nombre) => {

        fetch("http://localhost/nombres/?insertar=1", {
            method: 'POST',
            body: JSON.stringify(nombre)
        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {
                
                // console.log(nombre);
                
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
                    //   Swal.fire('Saved!', '', 'success')
                    window.location.replace('');

                    } else if (result.isDenied) {
                     //  Swal.fire('Changes are not saved', '', 'info')
                      navigate('/lista')
                    }
                  })
                  

            })
            .catch(console.log)
    }


    /// EDITAR Y ACTUALIZAR UN REGISTRO
    const editNombre = (nombre) => {
        console.log(nombre, 'uno')
        fetch("http://localhost/nombres/?actualizar=1", {
            method: 'POST',
            body: JSON.stringify(nombre)
        })
            .then(respuesta => respuesta.json())
            .then((datosRespuesta) => {

                console.log(datosRespuesta);

            })
            .catch(console.log)

    }


    // //ELIMINAR UN REGISTRO
    // const deleteNombre = (id) => {
    //     console.log(id, 'hhh')
    //     fetch("http://localhost/nombres/?borrar=" + id)
    //         .then(respuesta => respuesta.json())
    //         .then((datosRespuesta) => {

    //             console.log(datosRespuesta);

    //         })
    //         .catch(console.log)
    // }



    return <>
    <hr />
    <hr />
    <hr />
    <hr />
        <h2>Ingreso de nuevos registros</h2>
        <CrudForm addNombre={addNombre} editData={editData} editNombre={editNombre} />

        {/* {loading ? <Loader />
            : nombres && <CrudTable nombres={nombres} setEditData={setEditData} deleteNombre={deleteNombre} />}
        {errorMessage && <Message text={errorMessage} />} */}

    </>
}
export default CrudAPI;
