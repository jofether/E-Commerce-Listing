import React, { useState } from 'react';

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'chairs', label: 'Chairs' },
    { id: 'peripherals', label: 'Peripherals' },
    { id: 'monitors', label: 'Monitors' },
    { id: 'accessories', label: 'Accessories' },
  ];

  const sorts = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' },
  ];

  return (
    <div className="flex flex-col gap-6 pb-8 border-b border-slate-200">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-slate-900">Categories</h3>
        {/* [BUG - LAYOUT] flex-nowrap + flex-row forces all buttons in one line, massive overflow */}
        {/* [FIX] Should be flex-wrap */}
        <div className="flex flex-nowrap gap-0 overflow-visible">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  // [BUG - TYPO] bg-blue-99 is invalid, no blue background on active state
                  // [FIX] Should be bg-blue-600
                  ? 'bg-blue-99 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="sort" className="text-sm font-semibold text-slate-900">
          Sort By
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {sorts.map((sort) => (
            <option key={sort.id} value={sort.id}>
              {sort.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
