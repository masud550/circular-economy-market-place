import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Buyer from './components/Buyer';
import Seller from './components/Seller';
import GeneralPublic from './components/GeneralPublic';
import Admin from './components/Admin';
import Shipping from './components/Shipping';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/buyer/*" element={<Buyer />} />
          <Route path="/seller/*" element={<Seller />} />
          <Route path="/general-public" element={<GeneralPublic />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;