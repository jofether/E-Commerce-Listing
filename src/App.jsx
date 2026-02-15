import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  { id: 1, name: 'Premium Ergonomic Chair', price: '$299', color: 'bg-blue-200', emoji: '🪑', category: 'Furniture', description: 'Premium lumbar support for all-day comfort', rating: 5, reviews: 234 },
  { id: 2, name: 'Mechanical Keyboard RGB', price: '$149', color: 'bg-red-200', emoji: '⌨️', category: 'Peripherals', description: 'Cherry MX switches with per-key RGB', rating: 4, reviews: 189 },
  { id: 3, name: 'Precision Gaming Mouse', price: '$89', color: 'bg-green-200', emoji: '🖱️', category: 'Peripherals', description: '16,000 DPI sensor with custom buttons', rating: 5, reviews: 412 },
  { id: 4, name: '32" 4K Monitor', price: '$499', color: 'bg-yellow-200', emoji: '🖥️', category: 'Monitors', description: '4K resolution with HDR support', rating: 4, reviews: 156 },
  { id: 5, name: 'USB-C Docking Hub', price: '$79', color: 'bg-purple-200', emoji: '🔌', category: 'Accessories', description: '7-in-1 hub with Thunderbolt 3', rating: 4, reviews: 98 },
  { id: 6, name: '4K Webcam Pro', price: '$249', color: 'bg-pink-200', emoji: '📹', category: 'Accessories', description: 'Auto-focus with noise-cancelling mic', rating: 5, reviews: 267 },
  { id: 7, name: 'Wireless Headphones', price: '$199', color: 'bg-indigo-200', emoji: '🎧', category: 'Accessories', description: 'Active noise cancellation, 30h battery', rating: 5, reviews: 523 },
  { id: 8, name: 'Standing Desk Pro', price: '$599', color: 'bg-cyan-200', emoji: '📊', category: 'Furniture', description: 'Motorized with memory presets', rating: 4, reviews: 203 },
  { id: 9, name: 'Monitor Arm Mount', price: '$59', color: 'bg-orange-200', emoji: '🔧', category: 'Accessories', description: 'Full articulation, supports up to 30kg', rating: 4, reviews: 145 },
  { id: 10, name: 'Laptop Stand', price: '$45', color: 'bg-teal-200', emoji: '💻', category: 'Accessories', description: 'Adjustable aluminum construction', rating: 5, reviews: 389 },
  { id: 11, name: 'Mechanical Numpad', price: '$65', color: 'bg-fuchsia-200', emoji: '🔢', category: 'Peripherals', description: 'Programmable with hot-swap switches', rating: 4, reviews: 112 },
  { id: 12, name: 'USB Hub Pro 3.0', price: '$49', color: 'bg-lime-200', emoji: '🌐', category: 'Accessories', description: '10 ports with individual switches', rating: 4, reviews: 187 },
];

function App() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />

      <main className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex items-end justify-between py-8">
          <div>
            <p className="text-sm font-semibold text-blue-600">Premium Collection</p>
            <h2 className="text-3xl font-bold text-slate-900">Work-from-anywhere essentials</h2>
            <p className="text-sm text-slate-600 mt-2">Handpicked gear for professionals who care about quality and comfort.</p>
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white">
            {showFilters ? '✕ Hide Filters' : '⚙️ Filters'}
          </button>
        </div>

        {showFilters && (
          <div className="mb-8 rounded-xl bg-white p-6 ring-1 ring-slate-100">
            <FilterBar />
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold">✓ Quality Assured</h3>
              <p className="mt-2 text-blue-100">All products come with 2-year warranty</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">🚚 Fast Shipping</h3>
              <p className="mt-2 text-blue-100">Free delivery on orders over $100</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">💰 Best Prices</h3>
              <p className="mt-2 text-blue-100">Price match guarantee on all items</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
