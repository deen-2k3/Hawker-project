// App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login.jsx';
import Register from './components/Register.jsx';
import Homenavbar from './components/Homenavbar.jsx';
import Cart from './components/Cart.jsx';
import CustomerHome from './components/CustomerHome.jsx';
import AddHawkerHome from './pages/AddHawkerHome.jsx';
import HawkerRegister from './pages/HawkerRegister.jsx';
import Additems from './pages/Additems.jsx';
import HawkerHomenavbar from './components/HawkerHomenavbar.jsx';
import CustomerShowCard from './components/CustomerShowCard.jsx';
import OrderHistory from './components/OrderHistory.jsx';
import Home from './Layouts/Home.jsx';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/addhawkerhome' element={<AddHawkerHome/>}></Route>
    <Route path='/hawkerregister' element={<HawkerRegister/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/customerHome' element={<CustomerHome/>}></Route>
      <Route path='/customerShowCard/:id' element={<CustomerShowCard/>}></Route>
      <Route path='/orderHistory' element={<OrderHistory/>}></Route>
      <Route path='/'element={<HawkerHomenavbar/>}></Route>
      <Route path='/additems' element={<Additems/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
