import React, { useState } from 'react';
import ProductListing from './ProductListing';

function Buyer() {
  const [showProductListing, setShowProductListing] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showMessaging, setShowMessaging] = useState(false);
  const [message, setMessage] = useState('');

  // Features Array without Checkout & Payments
  const features = [
    { title: "Registration", description: "Sign up and manage your account seamlessly." },
    { title: "Product Listing", description: "Browse and search for available products." },
    { title: "Messaging", description: "Communicate with sellers in real-time." },
  ];

  // Handle Feature Click
  const handleCardClick = (title) => {
    if (title === "Registration") {
      setShowRegistrationForm(true);
      setShowProductListing(false);
      setShowMessaging(false);
    } else if (title === "Product Listing") {
      setShowProductListing(true);
      setShowRegistrationForm(false);
      setShowMessaging(false);
    } else if (title === "Messaging") {
      setShowMessaging(true);
      setShowProductListing(false);
      setShowRegistrationForm(false);
    }
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-pink-200 to-orange-200">
      {/* Header */}
      {!showProductListing && !showRegistrationForm && !showMessaging && (
        <h1 className="text-4xl font-bold text-green-600 mb-4">Buyer Module</h1>
      )}

      {/* Features Grid */}
      {!showProductListing && !showRegistrationForm && !showMessaging ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer w-full h-60 transform hover:scale-105"
              onClick={() => handleCardClick(feature.title)}
            >
              <h2 className="p-6 text-2xl font-semibold text-green-700 mb-2">{feature.title}</h2>
              <p className="text-gray-600 font-semibold text-base leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      ) : showProductListing ? (
        <ProductListing onBack={() => setShowProductListing(false)} />
      ) : showRegistrationForm ? (
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
      ) : showMessaging ? (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <button
            onClick={() => setShowMessaging(false)}
            className="text-gray-500 hover:text-gray-700 mb-4 inline-block"
          >
            &lt; Back to Features
          </button>
          <h2 className="text-xl font-bold text-green-600 mb-4">Messaging</h2>
          <textarea
            value={message}
            onChange={handleMessageChange}
            placeholder="Write your message here..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="6"
          />
          <button
            onClick={() => alert(`Message Sent: ${message}`)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Send Message
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Buyer;
