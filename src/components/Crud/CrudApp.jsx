import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
const baseDatos = [
    { id: 1, equipo: 'Barcelona', pais: 'España' },
    { id: 2, equipo: 'Guadalajara', pais: 'México' },
    { id: 3, equipo: 'Boca JR', pais: 'Argentina' },
    { id: 4, equipo: 'Manchester City', pais: 'Inglaterra' },
    { id: 5, equipo: 'Real Madrid', pais: 'España' },
]

const CrudApp = () => {

    const [editData, setEditData] = useState(null)
    const [equipos, setEquipos] = useState(baseDatos);

    // inserción de datos
    const addEquipo = (equipo) => {
        console.log(equipo)
        setEquipos([
            ...equipos,
            equipo
        ])
    }

    const editEquipo = (equipo) => {
        const newEquipo = equipos.map(el => el.id === equipo.id ? equipo : el)
        setEquipos(newEquipo)
        setEditData(null)
        console.log(equipo)
    }



    return <>
        <h2>CRUD de equipos de futbol...</h2>
        <CrudForm addEquipo={addEquipo} editData={editData} editEquipo={editEquipo} />
        <CrudTable equipos={equipos} setEditData={setEditData} />
    </>
}
export default CrudApp;
