import React from 'react';
import Navbar from './Navbar'; // Importing Navbar

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <Navbar /> {/* Navbar included here */}
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
          Welcome to the Circular Economy Marketplace
        </h1>
        <p className="text-xl mb-6 max-w-4xl mx-auto leading-relaxed text-gray-800 bg-blue-50 p-8 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
  A platform for sustainable exchange where buyers, sellers, and the general public can participate in a circular economy. 
  We aim to reduce waste and promote the reuse and recycling of products to help create a more sustainable world.
</p>
<p className="text-lg mb-8 max-w-4xl mx-auto leading-relaxed text-gray-700 bg-green-50 p-8 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
  Join our community of environmentally-conscious individuals and businesses to make a positive impact on the planet!
</p>

        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-500 transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Homepage;

