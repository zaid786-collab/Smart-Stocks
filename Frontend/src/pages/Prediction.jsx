import React, { useState } from 'react';
import { Sparkles, Check, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import PredictionCard from '../components/PredictionCard';
import PredictionChart from '../components/PredictionChart';
import TimeHorizonSelector from '../components/TimeHorizonSelector';
import RiskAnalysis from '../components/RiskAnalysis';
import { STOCKS, getPredictionChartData } from '../data/mockData';

export default function Prediction({ selectedStock, onSelectStock }) {
  const [horizonKey, setHorizonKey] = useState('medium'); // 'short' | 'medium' | 'long'

  const currentTicker = selectedStock || 'AAPL';
  const stock = STOCKS[currentTicker] || STOCKS.AAPL;

  // Active Horizon Data
  const horizonData = stock.horizons ? stock.horizons[horizonKey] : {
    label: '1–6 Months', signal: stock.aiSignal, confidence: stock.aiConfidence, target: stock.aiPredictedPrice, change: `+${stock.expectedChange}%`
  };

  const { data: chartData, currentPrice } = getPredictionChartData(
    currentTicker,
    horizonKey === 'short' ? '7D' : horizonKey === 'long' ? '90D' : '30D'
  );

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Top Header & Stock Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hero Predictive Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            AI Stock Prediction
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
            Dynamic neural price trajectory models conditioned on investment time horizons.
          </p>
        </div>

        {/* Quick Ticker Switch Pills */}
        <div className="flex items-center space-x-1 p-1 bg-white rounded-xl border border-gray-200/80 shadow-sm self-start sm:self-auto">
          {Object.keys(STOCKS).map((t) => (
            <button
              key={t}
              onClick={() => onSelectStock && onSelectStock(t)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                currentTicker === t
                  ? 'bg-gray-900 text-white font-semibold shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Main Prediction Hero Card */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-8 shadow-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center space-x-2.5">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {stock.ticker}
              </span>
              <span className="text-base text-gray-500 font-medium">
                {stock.name}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-mono font-semibold">
                {horizonData.label} Horizon
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Neural predictive model v3.4 • Updated today
            </p>
          </div>

          <div className="flex items-center space-x-4 self-start md:self-auto">
            <div className="text-right">
              <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                AI Recommendation
              </span>
              <span className="text-xs font-semibold text-gray-700">
                Confidence: {horizonData.confidence}%
              </span>
            </div>

            <div className={`px-5 py-2 rounded-xl font-mono text-base font-bold tracking-wide border shadow-sm ${
              horizonData.signal === 'STRONG BUY' || horizonData.signal === 'BUY'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-amber-50 text-amber-700 border-amber-200'
            }`}>
              {horizonData.signal}
            </div>
          </div>
        </div>

        {/* 4 Figures */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6">
          <div>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
              Current Price
            </span>
            <div className="font-mono text-xl sm:text-2xl font-bold text-gray-900 mt-1">
              ${stock.price.toFixed(2)}
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-indigo-600 uppercase tracking-wider block flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              AI Predicted Price
            </span>
            <div className="font-mono text-xl sm:text-2xl font-bold text-indigo-600 mt-1">
              ${horizonData.target.toFixed(2)}
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
              Expected Change
            </span>
            <div className="font-mono text-xl sm:text-2xl font-bold mt-1 text-emerald-600 flex items-center">
              <ArrowUpRight className="w-5 h-5 mr-0.5 inline" />
              <span>{horizonData.change}</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block">
              Model Confidence
            </span>
            <div className="font-mono text-xl sm:text-2xl font-bold text-gray-900 mt-1">
              {horizonData.confidence}%
            </div>
          </div>
        </div>
      </div>

      {/* Feature 5: Investment Time Horizon Selector */}
      <TimeHorizonSelector
        activeHorizon={horizonKey}
        onHorizonChange={setHorizonKey}
        horizonsData={stock.horizons}
      />

      {/* Historical Price + AI Forecast Chart */}
      <PredictionChart
        chartData={chartData}
        currentPrice={currentPrice}
        horizon={horizonKey === 'short' ? '7D' : horizonKey === 'long' ? '90D' : '30D'}
        onHorizonChange={(h) => setHorizonKey(h === '7D' ? 'short' : h === '90D' ? 'long' : 'medium')}
        height={380}
      />

      {/* Why AI Predicts This */}
      <div className="bg-white border border-gray-200/80 rounded-2xl p-6 sm:p-7 shadow-card space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-100">
          <div>
            <h3 className="text-base font-bold text-gray-900">Why AI Predicts This?</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Key quantitative factors supporting the {horizonData.signal} recommendation
            </p>
          </div>

          <div className="text-sm font-semibold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-lg self-start sm:self-auto font-mono">
            Prediction Confidence: {horizonData.confidence}%
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {stock.aiFactors.map((factor, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-gray-50/80 border border-gray-200/60 flex items-start space-x-3"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span className="text-xs font-medium text-gray-800 leading-snug">
                {factor}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center space-x-2 text-xs text-gray-400">
          <AlertCircle className="w-3.5 h-3.5 shrink-0 text-gray-400" />
          <span>
            AI predictions are based on analyzed market data and are for informational purposes only. They are not financial advice.
          </span>
        </div>
      </div>

      {/* Feature 2: Risk Analysis for this Stock */}
      <RiskAnalysis risk={stock.risk} />
    </div>
  );
}
