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
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Curated Tech</p>
            <h1 className="text-2xl font-bold text-slate-900">TechStore</h1>
          </div>
          <button className="rounded-full bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            Cart (0)
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-12">
        <div className="flex items-end justify-between py-8">
          <div>
            <p className="text-sm font-semibold text-blue-600">New Arrivals</p>
            <h2 className="text-2xl font-bold text-slate-900">Work-from-anywhere essentials</h2>
            <p className="text-sm text-slate-600">Balanced spacing and consistent card alignment for calibration.</p>
          </div>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white">
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`flex h-48 items-center justify-center ${product.color}`}>
                <span className="text-4xl font-semibold text-slate-500/60">IMG</span>
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                <p className="text-sm text-slate-600">{product.price}</p>
                <button className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
