import React from 'react';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AIInsight({ stock }) {
  const navigate = useNavigate();
  if (!stock) return null;

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card flex flex-col justify-between">
      <div>
        {/* Header Badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Analysis</span>
          </div>

          <span className="text-xs font-medium text-gray-500">
            {stock.ticker} Insight
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mt-4 tracking-tight">
          {stock.aiTitle}
        </h3>

        {/* Expected Trend & Confidence metrics */}
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
          <div>
            <span className="text-[11px] font-medium text-gray-400 block uppercase tracking-wider">
              Expected Trend
            </span>
            <div className="flex items-center space-x-1.5 text-sm font-semibold text-emerald-600 mt-1">
              <TrendingUp className="w-4 h-4" />
              <span>{stock.aiExpectedTrend}</span>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-medium text-gray-400 block uppercase tracking-wider">
              Confidence
            </span>
            <div className="text-sm font-semibold text-gray-900 mt-1">
              {stock.aiConfidence}%
            </div>
          </div>
        </div>

        {/* Visual Confidence Bar */}
        <div className="mt-3">
          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${stock.aiConfidence}%` }}
            />
          </div>
        </div>

        {/* Short explanation */}
        <p className="text-xs text-gray-600 mt-4 leading-relaxed">
          {stock.aiExplanation}
        </p>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button
          onClick={() => navigate('/prediction')}
          className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-gray-900 hover:bg-gray-800 text-white shadow-sm transition-colors flex items-center justify-center space-x-2"
        >
          <span>View Prediction</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
