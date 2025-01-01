import React from 'react';
import { useNavigate } from 'react-router-dom';

function ChooseRole() {
  const navigate = useNavigate();

  const roles = [
    { label: 'Buyer', path: '/buyer' },
    { label: 'Seller', path: '/seller' },
    { label: 'General Public', path: '/general-public' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-200 to-lime-200 flex items-center justify-center">
      <div className="p-8 text-center max-w-4xl">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Choose Your Role</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform"
            >
              <button
                onClick={() => navigate(role.path)}
                className="text-lg font-semibold text-green-700 hover:text-green-900 transition duration-300"
              >
                {role.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;
