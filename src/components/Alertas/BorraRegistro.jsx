import React from 'react'
import  Swal from 'sweetalert2'


const BorraRegistro = (nombre) => {
    return (
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
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
            //   Swal.fire('Changes are not saved', '', 'info')
            }
          })
 
  

  )
}

export default BorraRegistro