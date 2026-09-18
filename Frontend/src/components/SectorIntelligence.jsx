import React, { useState } from 'react';
import { Compass, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { SECTORS_DATA } from '../data/mockData';

export default function SectorIntelligence({ onSelectStock }) {
  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorClick = (sectorName) => {
    setSelectedSector(selectedSector === sectorName ? null : sectorName);
  };

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <Compass className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-gray-900">Sector Intelligence</h3>
            <p className="text-xs text-gray-400">Capital rotation & macroeconomic outlooks</p>
          </div>
        </div>
        <span className="text-[11px] text-gray-400">Click sector to inspect leader stocks</span>
      </div>

      {/* Horizontal List of Major Sectors */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {SECTORS_DATA.map((sec) => {
          const isSelected = selectedSector === sec.name;
          return (
            <button
              key={sec.name}
              onClick={() => handleSectorClick(sec.name)}
              className={`p-3 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-50 shadow-sm'
                  : 'bg-gray-50/60 border-gray-200/60 hover:bg-white hover:border-gray-300'
              }`}
            >
              <div className="text-xs font-semibold text-gray-900 truncate">{sec.name}</div>
              <div className="flex items-baseline justify-between mt-1">
                <span
                  className={`font-mono text-xs font-bold ${
                    sec.positive ? 'text-emerald-600' : 'text-rose-600'
                  }`}
                >
                  {sec.change}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">{sec.outlook}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Sector Stocks Preview Drawer if clicked */}
      {selectedSector && (
        <div className="p-3.5 rounded-xl bg-gray-50/80 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">{selectedSector} Leaders:</span>
            <div className="flex items-center space-x-1.5">
              {SECTORS_DATA.find((s) => s.name === selectedSector)?.stocks.map((t) => (
                <button
                  key={t}
                  onClick={() => onSelectStock && onSelectStock(t)}
                  className="px-2 py-0.5 rounded bg-white hover:bg-indigo-600 hover:text-white border border-gray-200 text-gray-700 font-mono font-bold transition-all text-xs"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <span className="text-gray-400 text-[11px]">Click ticker to load detailed analysis</span>
        </div>
      )}
    </div>
  );
}
