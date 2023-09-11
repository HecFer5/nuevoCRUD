/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const CrudForm = ({ addNombre, editData, editNombre, nombre }) => {
    useEffect(() => {
        if (editData !== null) {
            setFormData(editData)
        } else {
            setFormData({
                nombre: '',
                cientifico: '',
                id: null
            })
        }
    }, [])

    const [formData, setFormData] = useState({
        nombre: '',
        cientifico: '',
        id: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.nombre !== '' && formData.cientifico !== '') {
            if (editData !== null) {
                editNombre(formData)
            } else {
                formData.id = Date.now()
                addNombre(formData)
                setFormData({
                    nombre: '',
                    cientifico: '',
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
        <div className="card">
            <div className="card-header">
                Especies
            </div>
            <div className="card-body">
                <form className='m-3' onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Común:</label>
                        <input type="text" name="nombre" id='nombre' onChange={handleCahnge}  className="form-control"  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cientifico">Nombre Científico:</label>
                        <input type="text" name="cientifico" id='cientifico' onChange={handleCahnge} className="form-control" />
                    </div>
                    <input className='btn btn-success mx-1' type="submit" value=" Enviar " />
                    <input className='btn btn-danger mx-1' type="reset" />
                </form>
                
            </div>
            
        </div>
        <hr />
        <Link to='/' className='btn btn-danger mx-1 padding-x-4'>Salir</Link>
        
    </>
}

export default CrudForm;
