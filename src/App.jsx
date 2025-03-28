import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// User Pages
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PLaceOrder';
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';

// Admin Pages
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Order/Order';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const url = "http://localhost:4000";  

  // Check if the current route is part of the admin panel
  const isAdmin = location.pathname.includes('/admin');

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <ToastContainer />

      <Navbar setShowLogin={setShowLogin} isAdmin={isAdmin} />

      <div className={isAdmin ? 'admin-container' : 'app'}>
        {isAdmin && <Sidebar />}
        
        <Routes>
          {/* User Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorders' element={<MyOrders />} />

          {/* Admin Routes */}
          <Route path='/add' element={<Add url={url} />} />
          <Route path='/list' element={<List url={url} />} />
          <Route path='/order' element={<Order url={url} />} />
        </Routes>
      </div>

      {!isAdmin && <Footer />}
    </>
  );
};

export default App;
