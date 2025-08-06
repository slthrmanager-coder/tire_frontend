import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import RequestForm from './components/RequestForm';
import About from './components/About';
import Contact from './components/Contact';
import ViewProfile from './components/ViewProfile';
import TTODashboard from './components/tto/TTODashboard';
import ManagerDashboard from './components/manager/ManagerDashboard';
import TTOApprovedRequests from './components/tto/TTOApprovedRequests';
import EngineerDashboard from './components/engineer/EngineerDashboard';
import TireOrder from './components/TireOrder'; 
import SellerDashboard from './components/SellerDashboard'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view-profile" element={<ViewProfile />} />
        <Route path="/manager" element={<ManagerDashboard />} />
        <Route path="/tto-dashboard" element={<TTODashboard />} />
        <Route path="/tto" element={<TTODashboard />} />
        <Route path="/engineer-dashboard" element={<EngineerDashboard />} />

        <Route path="/request" element={<RequestForm />} />

        <Route path="/tto/approved-requests" element={<TTOApprovedRequests />} />
        <Route path="/order-tires" element={<TireOrder />} />
        <Route path="/order-tires/:requestId" element={<TireOrder />} />
<Route path="/seller-dashboard" element={<SellerDashboard vendorEmail="seller.email=slttransportofficer@gmail.com
" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
