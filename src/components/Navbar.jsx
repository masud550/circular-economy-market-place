import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <Link to="/buyer" className="font-bold">Circular Economy</Link>
      <div className="space-x-4">
        <Link to="/buyer">Buyer</Link>
        <Link to="/seller">Seller</Link>
        <Link to="/general-public">General Public</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/shipping">Shipping</Link>
      </div>
    </nav>
  );
}

export default Navbar;
