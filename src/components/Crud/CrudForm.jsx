/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const CrudForm = ({ addEquipo, editData, editEquipo }) => {

    useEffect(() => {
        if (editData !== null) {
            setFormData(editData)
        } else {
            setFormData({
                equipo: '',
                pais: '',
                id: null
            })
        }
    }, [editData])

    const [formData, setFormData] = useState({
        equipo: '',
        pais: '',
        id: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.equipo !== '' && formData.pais !== '') {
            if (editData !== null) {
                editEquipo(formData)
            } else {
                formData.id = Date.now()
                addEquipo(formData)
                setFormData({
                    equipo: '',
                    pais: '',
                    id: null
                })
            }
        } else {
            alert('Debe ingresar datos')
        }
    };

    const handleCahnge = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return <>
        <form className='m-3' onSubmit={handleSubmit}>
            <label htmlFor="equipo">equipo:</label>
            <input type="text" name="equipo" id='equipo' onChange={handleCahnge} value={formData.equipo} />
            <label htmlFor="pais">pais:</label>
            <input type="text" name="pais" id='pais' onChange={handleCahnge} value={formData.pais} />
            <input className='btn btn-success mx-1' type="submit" value="Enviar" />
            <input className='btn btn-danger mx-1' type="reset" value="Limpìar
            " />
        </form>
    </>
}

export default CrudForm;
