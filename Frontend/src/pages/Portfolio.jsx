import React from 'react';
import PortfolioHealth from '../components/PortfolioHealth';
import ScenarioSimulator from '../components/ScenarioSimulator';

export default function Portfolio() {
  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          Portfolio Health & Scenario Simulator
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Evaluate risk concentration, diversification balance, and hypothetical macro stress tests.
        </p>
      </div>

      {/* Feature 6: Portfolio Health, Metrics, Holdings & AI Advice */}
      <PortfolioHealth />

      {/* Feature 7: What-If / Stress Scenario Simulator */}
      <ScenarioSimulator />
    </div>
  );
}
