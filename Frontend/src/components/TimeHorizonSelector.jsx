import React from 'react';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

export default function TimeHorizonSelector({ activeHorizon, onHorizonChange, horizonsData }) {
  const horizons = [
    { key: 'short', name: 'Short Term', range: '1–7 Days' },
    { key: 'medium', name: 'Medium Term', range: '1–6 Months' },
    { key: 'long', name: 'Long Term', range: '1–5 Years' }
  ];

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Investment Horizon</h3>
          <p className="text-xs text-gray-400">Adaptive AI conviction modeled across timeframes</p>
        </div>

        {/* 3 Pills */}
        <div className="flex items-center space-x-1 p-1 bg-gray-50 rounded-xl border border-gray-200/60 self-start sm:self-auto">
          {horizons.map((h) => (
            <button
              key={h.key}
              onClick={() => onHorizonChange(h.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeHorizon === h.key
                  ? 'bg-white text-gray-900 shadow-sm font-semibold'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>
      </div>

      {/* Horizon Context Display */}
      {horizonsData && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {horizons.map((h) => {
            const data = horizonsData[h.key];
            const isSelected = activeHorizon === h.key;
            return (
              <div
                key={h.key}
                onClick={() => onHorizonChange(h.key)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-indigo-50/60 border-indigo-300 ring-2 ring-indigo-50'
                    : 'bg-gray-50/50 border-gray-200/60 hover:bg-white'
                }`}
              >
                <div className="flex justify-between items-center text-[11px] text-gray-400 font-medium mb-1">
                  <span>{h.name}</span>
                  <span className="font-mono">{h.range}</span>
                </div>

                <div className="flex items-baseline justify-between mt-2">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    data.signal === 'STRONG BUY' || data.signal === 'BUY'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {data.signal}
                  </span>
                  <span className="font-mono font-bold text-gray-900 text-sm">{data.change}</span>
                </div>

                <div className="mt-2 text-[10px] text-gray-400 text-right font-mono">
                  Confidence: <strong className="text-gray-700">{data.confidence}%</strong>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
