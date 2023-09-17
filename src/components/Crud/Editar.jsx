import React from 'react'
import CrudTable from './CrudTable'

const Editar = (pasaNombre, nombre, setNombre, editMode) => {
  
   

    // fetch("http://localhost/nombres/")
    // .then(respuesta => respuesta.json())
    // .then((datosRespuesta) => {
    
    //     console.log(datosRespuesta);
    //     this.setState({ datosCargados: true, nombres: datosRespuesta })
    
    // })
    // .catch(console.log)
    // const guardaCorreccion =() =>{
        
    // }
    
 
    return (
        
    <form >
   <div className="card">
    <div className="card-header">
        Editar Fichas
    </div>
    <div className="card-body">
        <h4 className="card-title">Title</h4>
        {pasaNombre.nombre} kkk
        <p className="card-text">Text</p>
    </div>
    <div className="card-footer text-muted">
        Footer
    </div>
   </div>
   </form>
  )
}

export default Editar