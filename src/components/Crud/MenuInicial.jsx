import React from 'react'
import { Link } from 'react-router-dom'
import '../estilos/MenuInicial.css'

const MenuInicial = () => {

            return (
                <>
                    <main className='container-menu'>

                        <div className="orquideas-card dos">
                            <Link to='/crudApi' className='opcion' >Ingresar</Link>
                        </div>
                        <div className='orquideas-card tres'>
                            <Link to='/lista' className='opcion'>Listar</Link>
                        </div>
                        <div className='orquideas-card tres'>
                            <Link to='/edita' className='opcion'>Correcciones</Link>
                        </div>

                    </main>

                </>

            )
        }
    
    

    
export default MenuInicial