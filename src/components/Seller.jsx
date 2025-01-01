import React, { useState } from 'react';

function Seller() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showProductManagement, setShowProductManagement] = useState(false);

  const features = [
    { title: "Registration", description: "Easily sign up and set up your seller account." },
    { title: "Product Listing Management", description: "Create, edit, and remove product listings." },
    { title: "Transaction History", description: "View and manage your past transactions." },
    { title: "Messaging", description: "Engage with buyers through real-time chat." },
    { title: "Eco-impact Tracking", description: "Monitor your contributions to sustainability." },
  ];

  const handleCardClick = (title) => {
    if (title === "Registration") {
      setShowRegistrationForm(true);
    } else if (title === "Product Listing Management") {
      setShowProductManagement(true);
    }
  };

  const handleCloseForm = () => {
    setShowRegistrationForm(false);
    setShowProductManagement(false);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-200 to-sky-200">
      {!showRegistrationForm && !showProductManagement && (
        <h1 className="text-4xl font-bold text-green-600 mb-4">Seller Module</h1>
      )}

      {!showRegistrationForm && !showProductManagement ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow cursor-pointer"
              onClick={() => handleCardClick(feature.title)}
            >
              <h2 className="p-4 text-lg font-semibold text-green-700">{feature.title}</h2>
              <p className="p-2 text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      ) : showRegistrationForm ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <button
            onClick={handleCloseForm}
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
      ) : showProductManagement ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <button
            onClick={handleCloseForm}
            className="text-gray-500 hover:text-gray-700 mb-4 inline-block"
          >
            &lt; Back to Features
          </button>
          <h2 className="text-xl font-bold text-green-600 mb-4">Product Listing Management</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="productName" className="block text-gray-700">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="productCategory" className="block text-gray-700">Product Category</label>
              <select
                id="productCategory"
                name="productCategory"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="furniture">Furniture</option>
                <option value="home">Home Essentials</option>
                <option value="medical">Medical</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="productDescription" className="block text-gray-700">Product Description</label>
              <textarea
                id="productDescription"
                name="productDescription"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Enter product description"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Add Product
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Seller;
