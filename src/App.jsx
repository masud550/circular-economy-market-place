import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Buyer from './components/Buyer';
import Seller from './components/Seller';
import GeneralPublic from './components/GeneralPublic';
import ChooseRole from './components/ChooseRole'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/choose-role" element={<ChooseRole />} /> {/* New Route */}
        <Route path="/buyer" element={<Buyer />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/general-public" element={<GeneralPublic />} />
      </Routes>
    </Router>
  );
}

export default App;
