import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from './components/Login.jsx';
import Register from './components/Register.jsx'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Homenavbar from './components/Homenavbar.jsx';
import Cart from './components/Cart.jsx';

function App() {
  

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homenavbar/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes>
    
    </BrowserRouter> */}
    <Cart/>

    </>
  )
}

export default App
