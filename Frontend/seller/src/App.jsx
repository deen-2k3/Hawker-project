import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

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
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8080/checkAuth', { withCredentials: true })
      .then(res => {
        if (res.data.authenticated) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch(err => {
        console.error(err);
        setAuth(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addhawkerhome' element={<AddHawkerHome />} />
        <Route path='/hawkerregister' element={auth ? <HawkerRegister /> : <Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/customerHome' element={<CustomerHome />} />
        <Route path='/customerShowCard/:id' element={<CustomerShowCard />} />
        <Route path='/orderHistory' element={<OrderHistory />} />
        <Route path='/hawkerdashboard' element={auth ? <HawkerHomenavbar /> : <Navigate to='/login' />} />
        <Route path='/additems' element={auth ? <Additems /> : <Navigate to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
