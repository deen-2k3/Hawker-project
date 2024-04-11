import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login.jsx';
import Register from './components/Register.jsx'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Homenavbar from './components/Homenavbar.jsx';

import Cart from './components/Cart.jsx';

import AddHawkerHome from './pages/AddHawkerHome.jsx';
import servertest from './servertest.jsx';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homenavbar/>}></Route>
    <Route path='/addhawkerhome' element={<AddHawkerHome/>}></Route>

      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    
    </BrowserRouter>

    {/* <Cart/> */}


    </>
  )
}

export default App
