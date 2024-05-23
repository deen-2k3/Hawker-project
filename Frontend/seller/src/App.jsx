// App.jsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Homenavbar from './components/Homenavbar.jsx';
import Cart from './components/Cart.jsx';
import CustomerHome from './components/CustomerHome.jsx';
import AddHawkerHome from './pages/AddHawkerHome.jsx';
import HawkerRegister from './pages/HawkerRegister.jsx';
import Additems from './pages/Additems.jsx';
import HawkerHomenavbar from './components/HawkerHomenavbar.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homenavbar />} />
        <Route path="/addhawkerhome" element={<AddHawkerHome />} />
        <Route path="/hawkerregister" element={<HawkerRegister />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/customerHome" element={<CustomerHome />} />
        <Route path="/additems" element={<Additems />} />

        {/* Protecting routes that require authentication */}
        <Route
          path="/hawkerhome"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <HawkerHomenavbar />
            </ProtectedRoute>
          }
        />

        {/* Redirect to home for any unknown route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
