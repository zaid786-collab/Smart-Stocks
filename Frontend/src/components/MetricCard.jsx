import React from 'react';

export default function MetricCard({ label, value, subtitle, highlight = false }) {
  return (
    <div className="bg-white border border-gray-200/80 rounded-xl p-4 shadow-sm">
      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
        {label}
      </span>
      <div className={`font-mono text-base sm:text-lg font-bold mt-1 tabular-nums ${
        highlight ? 'text-indigo-600' : 'text-gray-900'
      }`}>
        {value}
      </div>
      {subtitle && (
        <span className="text-[11px] text-gray-400 mt-0.5 block">{subtitle}</span>
      )}
    </div>
  );
}
