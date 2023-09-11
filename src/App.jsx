import React from 'react';
import { ReactDOM } from 'react';
import './App.css'
import CrudAPI from './components/Crud/CrudAPI';
import CrudApp from './components/Crud/CrudApp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import CrudTable from './components/Crud/CrudTable';
import MenuInicial from './components/Crud/MenuInicial';
import Editar2 from './components/Crud/Editar2';



function App() {

  return (
    <div className='container-fluid p-3 d-flex flex-row'>
       <MenuInicial />
      <div className='container'>
       
        <Routes>
          <Route path='/crudApp' element={<CrudApp />} />
          <Route path='/crudApi' element={<CrudAPI />} />
          <Route path='/lista' element={<CrudTable />} />
          <Route path='/edita' element={<Editar2 />} />

        </Routes>
      </div>


    </div>


  )
}

export default App
