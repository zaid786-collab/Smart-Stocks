import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function StockCard({ stock, isSelected, onClick }) {
  if (!stock) return null;
  const isPositive = stock.change >= 0;

  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-xl border transition-all duration-150 ${
        isSelected
          ? 'bg-white border-indigo-600 ring-2 ring-indigo-50 shadow-sm'
          : 'bg-white border-gray-200/90 hover:border-gray-300 hover:shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono font-bold text-sm text-gray-900">{stock.ticker}</span>
        <span className="text-[11px] font-medium text-gray-400 truncate max-w-[90px]">{stock.name}</span>
      </div>

      <div className="mt-2.5 flex items-baseline justify-between">
        <span className="font-mono text-base font-bold text-gray-900 tabular-nums">
          ${stock.price.toFixed(2)}
        </span>

        <span
          className={`inline-flex items-center text-xs font-semibold font-mono ${
            isPositive ? 'text-emerald-600' : 'text-rose-600'
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
          ) : (
            <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
          )}
          <span>{isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%</span>
        </span>
      </div>
    </button>
  );
}
