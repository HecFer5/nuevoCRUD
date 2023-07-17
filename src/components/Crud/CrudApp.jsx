import React, { useEffect, useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const CrudApp = () => {

    const [editData, setEditData] = useState(null)
    const [equipos, setEquipos] = useState(() => {
        const saveEquipos = window.localStorage.getItem('equiposData');
        if (saveEquipos) {
            return JSON.parse(saveEquipos)
        } else {
            return []
        }
    });

    useEffect(() =>{
        window.localStorage.setItem('equiposData', JSON.stringify(equipos))
    }, [equipos]);

    // inserción de datos
    const addEquipo = (equipo) => {
        console.log(equipo)
        setEquipos([
            ...equipos,
            equipo
        ])
    }
    /// EDITAR UN REGISTRO
    const editEquipo = (equipo) => {
        const newEquipo = equipos.map(el => el.id === equipo.id ? equipo : el)
        setEquipos(newEquipo)
        setEditData(null)
        console.log(equipo)
    }

    //ELIMINAR UN REGISTRO
    const deleteEquipo = (id) => {
        const isDelete = window.confirm(`Desea eliminar el registro ${id}`)

        if (isDelete) {
            const newEquipos = equipos.filter(el => el.id !== id)
            setEquipos(newEquipos)

        }
    }



    return <>
        <h2>CRUD de equipos de futbol...</h2>
        <CrudForm addEquipo={addEquipo} editData={editData} editEquipo={editEquipo} />
        <CrudTable equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo} />
    </>
}
export default CrudApp;
