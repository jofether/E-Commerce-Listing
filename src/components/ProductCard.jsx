import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <article className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className={`relative flex h-48 items-center justify-center ${product.color} overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="text-5xl font-bold text-slate-500/30">{product.emoji}</span>
      </div>
      <div className="space-y-3 p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
          <p className="text-xs text-slate-500 mt-1">{product.category}</p>
        </div>
        <p className="text-sm text-slate-600">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-blue-600">{product.price}</span>
          <div className="flex items-center gap-1">
            {[...Array(product.rating)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
            <span className="text-xs text-slate-500 ml-1">({product.reviews})</span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-full rounded-lg px-4 py-2 font-semibold transition-all duration-200 ${
            isAdded
              ? 'bg-green-600 text-white'
              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          }`}
        >
          {isAdded ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}
