import React, { useState } from 'react';
import { Sliders, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { SIMULATOR_PRESETS, PORTFOLIO_DATA } from '../data/mockData';

export default function ScenarioSimulator() {
  const currentTotal = PORTFOLIO_DATA.totalValue; // 124,580
  const [selectedScenario, setSelectedScenario] = useState(SIMULATOR_PRESETS[3]); // default NVDA -15%

  const impactAmount = selectedScenario.customImpact !== undefined
    ? selectedScenario.customImpact
    : Math.round(currentTotal * (selectedScenario.percent / 100));

  const estimatedPortfolio = currentTotal + impactAmount;
  const isPositive = impactAmount >= 0;

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
        <div>
          <div className="flex items-center space-x-2">
            <h3 className="text-sm font-bold text-gray-900">What-If / Stress Scenario Simulator</h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-semibold">
              Monte Carlo Model
            </span>
          </div>
          <p className="text-xs text-gray-400">Evaluate hypothetical macroeconomic shocks against your active holdings</p>
        </div>
      </div>

      {/* 4 Interactive Scenario Selection Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {SIMULATOR_PRESETS.map((sc) => {
          const isSelected = selectedScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setSelectedScenario(sc)}
              className={`p-3 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-indigo-50/70 border-indigo-300 ring-2 ring-indigo-50 shadow-sm'
                  : 'bg-gray-50/60 border-gray-200/60 hover:bg-white hover:border-gray-300'
              }`}
            >
              <span className="text-xs font-semibold text-gray-900 block truncate">{sc.name}</span>
              <span
                className={`font-mono text-xs font-bold mt-1 block ${
                  sc.isPositive ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {sc.percent > 0 ? `+${sc.percent}%` : `${sc.percent}%`}
              </span>
            </button>
          );
        })}
      </div>

      {/* Scenario Calculation Result Card */}
      <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-200/70 space-y-3">
        <div className="text-xs text-gray-500 font-medium">
          Simulation Context: <strong className="text-gray-800 font-normal">"{selectedScenario.desc}"</strong>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div>
            <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Current Portfolio</span>
            <div className="font-mono text-lg font-bold text-gray-900 mt-0.5">
              ${currentTotal.toLocaleString()}
            </div>
          </div>

          <div>
            <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Estimated Impact</span>
            <div className={`font-mono text-lg font-bold mt-0.5 flex items-center ${
              isPositive ? 'text-emerald-600' : 'text-rose-600'
            }`}>
              {isPositive ? <ArrowUpRight className="w-4 h-4 mr-0.5" /> : <ArrowDownRight className="w-4 h-4 mr-0.5" />}
              <span>{isPositive ? '+' : ''}${Math.abs(impactAmount).toLocaleString()}</span>
            </div>
          </div>

          <div>
            <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Estimated Portfolio</span>
            <div className="font-mono text-lg font-bold text-indigo-600 mt-0.5">
              ${estimatedPortfolio.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Disclaimer */}
      <div className="pt-2 border-t border-gray-100 flex items-center space-x-1.5 text-[11px] text-gray-400">
        <Info className="w-3.5 h-3.5 shrink-0" />
        <span>
          Simulated scenarios are calculated based on historical correlation and are not guaranteed forecasts.
        </span>
      </div>
    </div>
  );
}
