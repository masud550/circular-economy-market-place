import React from 'react';

function Seller() {
  const features = [
    { title: "Registration", description: "Easily sign up and set up your seller account." },
    { title: "Product Listing Management", description: "Create, edit, and remove product listings." },
    { title: "Transaction History", description: "View and manage your past transactions." },
    { title: "Messaging", description: "Engage with buyers through real-time chat." },
    { title: "Eco-impact Tracking", description: "Monitor your contributions to sustainability." },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Seller Module</h1>
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

export default Seller;
