// synthetic-repo-01/src/App.js
import React from 'react';

const products = [
  { id: 1, name: 'Ergonomic Chair', price: '$250', color: 'bg-blue-200' },
  { id: 2, name: 'Mechanical Keyboard', price: '$120', color: 'bg-red-200' },
  { id: 3, name: 'Gaming Mouse', price: '$80', color: 'bg-green-200' },
  { id: 4, name: '27" Monitor', price: '$350', color: 'bg-yellow-200' },
  { id: 5, name: 'USB-C Hub', price: '$45', color: 'bg-purple-200' },
  { id: 6, name: 'Webcam 4K', price: '$199', color: 'bg-pink-200' },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <nav className="bg-white shadow-md p-4 mb-8 rounded-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">TechStore</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Cart (0)</button>
      </nav>

      <main>
        <h2 className="text-xl font-semibold mb-6 text-gray-700">New Arrivals</h2>
        {/* Grid System - Key for ViT Spatial Learning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`h-48 ${product.color} flex items-center justify-center`}>
                <span className="text-gray-500 opacity-50 text-4xl">IMG</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;