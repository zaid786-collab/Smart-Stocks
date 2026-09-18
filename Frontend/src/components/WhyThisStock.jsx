import React from 'react';
import { Check, Minus, Sparkles } from 'lucide-react';

export default function WhyThisStock({ whyData }) {
  if (!whyData) return null;

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Why AI Likes This Stock</h3>
          <p className="text-xs text-gray-400">Multi-factor algorithmic thesis breakdown</p>
        </div>
        <div className="flex items-center space-x-1.5 text-xs">
          <span className="text-gray-400">AI View:</span>
          <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-mono">
            {whyData.overallView}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        {/* Positive Factors */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
            Supporting Catalysts
          </span>
          <div className="space-y-1.5">
            {whyData.positives.map((pos, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-gray-700">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
                <span>{pos}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk / Resistance Factors */}
        <div className="space-y-2">
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider block">
            Identified Risk Factors
          </span>
          <div className="space-y-1.5">
            {whyData.risks.map((risk, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-gray-600">
                <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Minus className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
                <span>{risk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
