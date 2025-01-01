import React, { useState } from 'react';

function ProductListing({ onBack }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const productList = {
    Electrical: [
      { name: "Wiring", img: "/src/assets/image/wire.jpg.jpg", price: 200, location: "Dhaka" },
      { name: "Bulbs", img: "/src/assets/image/bulb.jpg.jpg", price: 50, location: "Chittagong" },
      { name: "Switches", img: "/src/assets/image/switch.jpg.jpg", price: 80, location: "Rajshahi" },
      { name: "Transformers", img: "/src/assets/image/transformer.jpg.jpg", price: 1500, location: "Sylhet" },
      { name: "Solar Panels", img: "/src/assets/image/solar.jpg.jpg", price: 10000, location: "Khulna" },
    ],
    Cloth: [
      { name: "T-shirts", img: "/src/assets/image/t-shirt.jpg.jpg", price: 500, location: "Dhaka" },
      { name: "Jeans", img: "/src/assets/image/pant.jpg.jpg", price: 800, location: "Chittagong" },
      { name: "Jackets", img: "/src/assets/image/jacket.jpg.jpg", price: 1200, location: "Rajshahi" },
      { name: "Dresses", img: "/src/assets/image/dresses.jpg.jpg", price: 1000, location: "Sylhet" },
      { name: "Sweaters", img: "/src/assets/image/suiter.jpg.jpg", price: 700, location: "Khulna" },
    ],
    Vehicle: [
      { name: "Cars", img: "/src/assets/image/car.jpg.jpg", price: 1500000, location: "Dhaka" },
      { name: "Bikes", img: "/src/assets/image/byke.jpg.jpg", price: 50000, location: "Chittagong" },
      { name: "Scooters", img: "/src/assets/image/scotter.jpg.jpg", price: 30000, location: "Rajshahi" },
      { name: "Tires", img: "/src/assets/image/tier.jpg.jpg", price: 2000, location: "Sylhet" },
      { name: "Parts", img: "/src/assets/image/parts.jpg.jpg", price: 500, location: "Khulna" },
    ],
    HomeProducts: [
      { name: "Furniture", img: "/src/assets/image/furniture.jpg.jpg", price: 3000, location: "Dhaka" },
      { name: "Kitchenware", img: "/images/kitchenware.jpg", price: 700, location: "Chittagong" },
      { name: "Cleaning Supplies", img: "/src/assets/image/cleaning.jpg.jpg", price: 150, location: "Rajshahi" },
      { name: "Decor", img: "/src/assets/image/decor.jpg", price: 1200, location: "Sylhet" },
      { name: "Appliances", img: "/src/assets/image/appliances.jpg", price: 5000, location: "Khulna" },
    ],
    MobileShop: [
      { name: "Smartphones", img: "/src/assets/image/mobile.jpg.jpg", price: 20000, location: "Dhaka" },
      { name: "Chargers", img: "/src/assets/image/charger.jpg.jpg", price: 500, location: "Chittagong" },
      { name: "Headphones", img: "/src/assets/image/headphone.jpg.jpg", price: 1500, location: "Rajshahi" },
      { name: "Mobile Cases", img: "/src/assets/image/mobilecase.jpg", price: 200, location: "Sylhet" },
      { name: "Screen Protectors", img: "/src/assets/image/screenprotector.jpg", price: 100, location: "Khulna" },
    ],
    Agriculture: [
      { name: "Seeds", img: "/src/assets/image/seeds.jpg.jpg", price: 100, location: "Dhaka" },
      { name: "Fertilizers", img: "/images/fertilizers.jpg", price: 400, location: "Chittagong" },
      { name: "Pesticides", img: "/images/pesticides.jpg", price: 800, location: "Rajshahi" },
      { name: "Tools", img: "/src/assets/image/tools.jpg", price: 600, location: "Sylhet" },
      { name: "Irrigation", img: "/src/assets/image/irrigationpump.jpg", price: 1500, location: "Khulna" },
    ],
  };

  const handleBuyProduct = (product) => {
    setSelectedProduct(product);
    setPaymentStatus("");
    setSelectedPaymentMethod(""); // Reset the payment method
  };

  const handlePayment = (status) => {
    if (selectedPaymentMethod === "") {
      alert("Please select a payment method.");
      return;
    }
    setPaymentStatus(status);
    setSelectedProduct(null);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="text-gray-500 hover:text-gray-700 mb-4 inline-block"
      >
        &lt; Back to Features
      </button>

      <h2 className="text-2xl font-bold text-green-600 mb-4">Product Listing</h2>

      {selectedProduct ? (
        <div className="p-6 bg-green-50 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-green-700">Confirm Purchase</h3>
          <p className="mt-2">Product: {selectedProduct.name}</p>
          <p>Price: {selectedProduct.price} BDT</p>
          <p>Location: {selectedProduct.location}</p>
          
          {/* Payment Method Selection */}
          <div className="mt-4">
            <h4 className="font-semibold text-green-700">Select Payment Method</h4>
            <select
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="mt-2 p-2 border rounded"
            >
              <option value="">-- Select --</option>
              <option value="Credit Card">Credit Card</option>
              <option value="bKash">bKash</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>

          {/* Payment Buttons */}
          <div className="mt-4">
            <button
              onClick={() => handlePayment("Success")}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-4"
            >
              Pay Now
            </button>
            <button
              onClick={() => handlePayment("Failed")}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : paymentStatus ? (
        <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-700">Payment Status</h3>
          <p className="mt-2">{paymentStatus}</p>
          <button
            onClick={() => setPaymentStatus("")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(productList).map((category, index) => (
            <div key={index} className="bg-green-50 p-4 rounded-lg shadow-md hover:bg-green-100">
              <h3 className="text-lg font-semibold text-green-700">{category}</h3>
              <div className="grid grid-cols-1 gap-4 mt-4">
                {productList[category].map((product, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl">
                    <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded" />
                    <h4 className="mt-4 text-green-600 text-xl">{product.name}</h4>
                    <p className="text-gray-500">Price: {product.price} BDT</p>
                    <p className="text-gray-400">Location: {product.location}</p>
                    <button
                      onClick={() => handleBuyProduct(product)}
                      className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                      Buy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductListing;
