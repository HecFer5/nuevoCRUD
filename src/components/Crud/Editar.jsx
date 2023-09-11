import React from 'react'



const Editar = (nombre) => {
  
  return (
   <div className="card">
    <div className="card-header">
        Editar Fichas
    </div>
    <div className="card-body">
        <h4 className="card-title">Title</h4>
        <input type="text" name="nombre" id='nombre'  className="form-control" value={nombre.nombre} />
        <p className="card-text" >Text</p>
    </div>
    <div className="card-footer text-muted">
        Footer
    </div>
   </div>
  )
}

export default Editar