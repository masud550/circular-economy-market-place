import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl hover:text-yellow-300 transition duration-300">Circular Economy</Link>
        <div className="space-x-6">
          <Link to="/buyer" className="hover:text-yellow-300 transition duration-300">Buyer</Link>
          <Link to="/seller" className="hover:text-yellow-300 transition duration-300">Seller</Link>
          <Link to="/general-public" className="hover:text-yellow-300 transition duration-300">General Public</Link>
          <Link to="/admin" className="hover:text-yellow-300 transition duration-300">Admin</Link>
          <Link to="/shipping" className="hover:text-yellow-300 transition duration-300">Shipping</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
