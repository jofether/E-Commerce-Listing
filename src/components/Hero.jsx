import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        {/* [BUG - LAYOUT] 3 columns forced on all sizes, content crammed and overflowing */}
        {/* [FIX] Should be grid with grid-cols-1 gap-8 md:grid-cols-2 */}
        <div className="grid grid-cols-3 gap-2 items-center">
          <div className="space-y-6">
            <div>
              {/* [BUG - SPACING] -my-20 creates HUGE negative margin, completely breaks section */}
              {/* [FIX] Remove negative margin, use regular spacing */}
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-semibold mb-4 -my-20 -ml-12">
                New Collection 2026
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Tech Gear for the Modern Professional
              </h2>
            </div>
            <p className="text-lg text-blue-100">
              Discover premium quality tech accessories and peripherals designed for productivity, comfort, and style. From ergonomic chairs to cutting-edge monitors.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-full h-64 bg-white/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl">🖥️</span>
                <p className="text-white/80 mt-4 font-semibold">Premium Tech Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
