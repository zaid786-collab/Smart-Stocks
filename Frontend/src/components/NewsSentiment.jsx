import React from 'react';
import { Newspaper, MessageSquare } from 'lucide-react';

export default function NewsSentiment({ news }) {
  if (!news || !news.items) return null;

  const getBadgeClass = (sentiment) => {
    switch (sentiment) {
      case 'Positive':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 'Negative':
        return 'bg-rose-50 text-rose-700 border-rose-200/80';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200/80';
    }
  };

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Latest News + AI Sentiment</h3>
          <p className="text-xs text-gray-400">Natural language sentiment scoring across recent headlines</p>
        </div>
        <div className="text-right">
          <span className="text-[11px] text-gray-400 uppercase tracking-wider block">Overall Sentiment</span>
          <span className="font-mono text-xs font-bold text-emerald-600">
            {news.overallSentiment}
          </span>
        </div>
      </div>

      {/* 3 News Items */}
      <div className="space-y-2.5">
        {news.items.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-xl bg-gray-50/60 border border-gray-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs hover:bg-white hover:border-gray-300 transition-all"
          >
            <div className="flex items-center space-x-2">
              <span className="text-gray-800 font-medium">{item.title}</span>
            </div>

            <div className="flex items-center space-x-2 self-start sm:self-auto shrink-0">
              <span className="text-gray-400 text-[11px]">{item.time}</span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold border font-mono ${getBadgeClass(
                  item.sentiment
                )}`}
              >
                {item.sentiment}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
