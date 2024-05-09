import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Homenavbar from './components/Homenavbar.jsx';

import Cart from './components/Cart.jsx';
import CustomerHome from './components/CustomerHome.jsx';
import AddHawkerHome from './pages/AddHawkerHome.jsx';
import HawkerRegister from './pages/HawkerRegister.jsx';
import Additems from './pages/Additems.jsx';
import CustomerShowCard from './components/CustomerShowCard.jsx';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homenavbar/>}></Route>
    <Route path='/addhawkerhome' element={<AddHawkerHome/>}></Route>
    <Route path='/hawkerregister' element={<HawkerRegister/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/customerHome' element={<CustomerHome/>}></Route>
      <Route path='/customerShowCard/:id' element={<CustomerShowCard/>}></Route>

    </Routes>
    </BrowserRouter>

    {/* <Additems/> */}
    {/* <CustomerHome/> */}
    {/* <Cart/> */}
    {/* <CustomerShowCard/> */}
    </>
  )
}

export default App
