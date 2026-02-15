import React, { useState } from 'react';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">TS</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Curated Tech</p>
            <h1 className="text-2xl font-bold text-slate-900">TechStore</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="hidden md:block rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="rounded-full bg-blue-600 px-5 py-2 text-white font-semibold transition-colors hover:bg-blue-700 flex items-center gap-2">
            <span>🛒</span>
            <span>Cart ({cartCount})</span>
          </button>
        </div>
      </div>
    </header>
  );
}
