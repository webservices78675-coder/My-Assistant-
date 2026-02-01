
import React from 'react';
import { PRICING_PACKAGES } from '../constants.tsx';

const PricingGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-5xl mx-auto">
      {PRICING_PACKAGES.map((pkg) => (
        <div key={pkg.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">{pkg.icon}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{pkg.name}</h3>
          <p className="text-blue-600 font-bold text-lg mb-3">{pkg.price}</p>
          <p className="text-sm text-gray-500 mb-4 flex-grow">{pkg.description}</p>
          <ul className="space-y-2 mb-6 text-sm text-gray-600">
            {pkg.features.map((f, i) => (
              <li key={i} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Best for: {pkg.recommendedFor}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingGrid;
