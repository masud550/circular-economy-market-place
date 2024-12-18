import React from 'react';

function Buyer() {
  const features = [
    { title: "Registration", description: "Sign up and manage your account seamlessly." },
    { title: "Product Listing", description: "Browse and search for available products." },
    { title: "Wishlist", description: "Save items to your wishlist for future purchases." },
    { title: "Messaging", description: "Communicate with sellers in real-time." },
    { title: "Checkout & Payments", description: "Securely complete your transactions." },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Buyer Module</h1>
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

export default Buyer;
