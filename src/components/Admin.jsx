import React from 'react';

function Admin() {
  const features = [
    { title: "Registration", description: "Manage admin access and set up roles for system oversight." },
    { title: "User Management", description: "Oversee and manage buyers, sellers, and general users." },
    { title: "Product Oversight", description: "Monitor and manage the product listings on the platform." },
    { title: "Analytics & Reporting", description: "Generate reports and insights on platform activity." },
    { title: "Content Management", description: "Curate and manage educational resources and forums." },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Admin Module</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow"
          >
            <h2 className="text-lg font-semibold text-green-700">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
