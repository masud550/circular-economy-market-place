import React, { useState } from 'react';

function Buyer() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showProductListing, setShowProductListing] = useState(false);

  const features = [
    { title: "Registration", description: "Sign up and manage your account seamlessly." },
    { title: "Product Listing", description: "Browse and search for available products." },
    { title: "Wishlist", description: "Save items to your wishlist for future purchases." },
    { title: "Messaging", description: "Communicate with sellers in real-time." },
    { title: "Checkout & Payments", description: "Securely complete your transactions." },
  ];

  const productList = {
    Electrical: ["Wiring", "Bulbs", "Switches", "Transformers", "Solar Panels"],
    Mechanical: ["Pumps", "Motors", "Bearings", "Valves", "Gears"],
    Cloth: ["T-shirts", "Jeans", "Jackets", "Dresses", "Sweaters"],
    Vehicle: ["Cars", "Bikes", "Scooters", "Tires", "Parts"],
    HomeProducts: ["Furniture", "Kitchenware", "Cleaning Supplies", "Decor", "Appliances"],
    MobileShop: ["Smartphones", "Chargers", "Headphones", "Mobile Cases", "Screen Protectors"],
    Medical: ["Bandages", "Medicines", "Syringes", "Thermometers", "First Aid Kits"],
  };

  const handleCardClick = (title) => {
    if (title === "Registration") {
      setShowRegistrationForm(true);
    } else if (title === "Product Listing") {
      setShowProductListing(true);
    }
  };

  const handleCloseProductListing = () => {
    setShowProductListing(false);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-pink-200 to-orange-200">
      {!showRegistrationForm && !showProductListing && (
        <h1 className="text-2xl font-bold text-green-600 mb-4">Buyer Module</h1>
      )}

      {!showRegistrationForm && !showProductListing ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow cursor-pointer"
              onClick={() => handleCardClick(feature.title)}
            >
              <h2 className="text-lg font-semibold text-green-700">{feature.title}</h2>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      ) : showProductListing ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <button
            onClick={handleCloseProductListing}
            className="text-gray-500 hover:text-gray-700 mb-4 inline-block"
          >
            &lt; Back to Features
          </button>
          <h2 className="text-xl font-bold text-green-600 mb-4">Product Listing</h2>

          {/* Display Product Names under Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(productList).map((category, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-green-100 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-green-700">{category}</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                  {productList[category].map((product, i) => (
                    <li key={i} className="text-sm">{product}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <button
            onClick={() => setShowRegistrationForm(false)}
            className="text-gray-500 hover:text-gray-700 mb-4 inline-block"
          >
            &lt; Back to Features
          </button>
          <h2 className="text-xl font-bold text-green-600 mb-4">Registration Form</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Buyer;
