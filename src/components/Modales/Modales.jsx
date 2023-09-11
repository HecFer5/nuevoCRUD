import Modal from './Modal'
import { useState } from 'react'
import CrudForm from '../Crud/CrudForm'




const Modales = () => {
    const [mostrar, setMostrar] = useState(false)
    const [verContador, setVerContador] = useState(false)
    const [verFormulario, setVerFormulario] = useState(false)
    console.log('kdkdkdk')

    return (
        <div className="w-100">
            <h1>Modales</h1>
            <button className='btn btn-success m-2' onClick={() => setMostrar(true)}>Ver Modal</button>
            <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
                <h2>Prueba childre</h2>
                <h1>otra prueba</h1></Modal>


            <button className='btn btn-success m-2' onClick={() => setVerContador(true)}>Ver Menu</button>
            <Modal isOpen={verContador} onClose={() => setVerContador(false)}>
                <CrudForm /></Modal>


            <button className='btn btn-success m-2' onClick={() => setVerFormulario(true)}>Ver Formulario</button>
                {/* <Modal isOpen={verFormulario} onClose={() => setVerFormulario(false)}>
                    <Form /></Modal> */}
            <Modal isOpen={verFormulario} onClose={() => setVerFormulario(false)}>
                <Menu /></Modal>
        </div>
    );
}

export default Modales;