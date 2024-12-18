import React from 'react';

function Shipping() {
  const features = [
    { title: "Local & International Shipping", description: "Seamlessly handle shipping for local and global deliveries." },
    { title: "Pickup Coordination", description: "Coordinate product pickups with sellers and logistics providers." },
    { title: "Shipping Status & Tracking", description: "Track the real-time status of shipments with ease." },
    { title: "Shipping Cost Calculation", description: "Calculate shipping costs based on distance and weight." },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Shipping Module</h1>
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

export default Shipping;
