import React, { useEffect, useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const CrudApp = () => {

    const [editData, setEditData] = useState(null)
    const [nombres, setNombres] = useState(() => {
        const saveNombres = window.localStorage.getItem('nombresData');
        if (saveNombres) {
            return JSON.parse(saveNombres)
        } else {
            return []
        }
    });

    useEffect(() =>{
        window.localStorage.setItem('nombresData', JSON.stringify(nombres))
    }, [nombres]);

    // inserción de datos
    const addNombre = (nombre) => {
        console.log(nombre)
        setNombres([
            ...nombres,
            nombre
        ])
    }
    /// EDITAR UN REGISTRO
    const editNombre = (nombre) => {
        const newNombre = nombres.map(el => el.id === nombre.id ? nombre : el)
        setNombres(newNombre)
        setEditData(null)
        console.log(nombre)
    }

    //ELIMINAR UN REGISTRO
    const deleteNombre = (id) => {
        const isDelete = window.confirm(`Desea eliminar el registro ${id}`)

        if (isDelete) {
            const newNombres = nombres.filter(el => el.id !== id)
            setNombres(newNombres)

        }
    }



    return <>
        <h2>CRUD de nombres de futbol...</h2>
        <CrudForm addNombre={addNombre} editData={editData} editNombre={editNombre} />
        <CrudTable nombres={nombres} setEditData={setEditData} deleteNombre={deleteNombre} />
    </>
}
export default CrudApp;
