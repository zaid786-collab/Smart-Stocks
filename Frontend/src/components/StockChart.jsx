import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

function CustomChartTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-white border border-gray-200 p-2.5 rounded-lg shadow-sm text-xs font-mono">
        <div className="text-gray-400 font-sans text-[11px] mb-0.5">{label}</div>
        <div className="font-bold text-gray-900">${value?.toFixed(2)}</div>
      </div>
    );
  }
  return null;
}

export default function StockChart({
  data = [],
  timeframe = '1M',
  onTimeframeChange,
  height = 340
}) {
  const timeframes = ['1D', '1W', '1M', '6M', '1Y'];

  const prices = data.map((d) => d.price);
  const minPrice = prices.length ? Math.floor(Math.min(...prices) * 0.995) : 0;
  const maxPrice = prices.length ? Math.ceil(Math.max(...prices) * 1.005) : 100;

  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card">
      {/* Timeframe selector header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Price History
        </span>

        {/* Timeframe Buttons */}
        <div className="flex items-center space-x-1 p-0.5 bg-gray-50 rounded-lg border border-gray-200/60">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => onTimeframeChange && onTimeframeChange(tf)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                timeframe === tf
                  ? 'bg-white text-gray-900 shadow-sm font-semibold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="mt-4" style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.12} />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#F3F4F6" strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="date"
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              dy={8}
            />

            <YAxis
              domain={[minPrice, maxPrice]}
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF', fontSize: 11 }}
              tickFormatter={(v) => `$${v}`}
              tickLine={false}
              axisLine={false}
              orientation="right"
            />

            <Tooltip content={<CustomChartTooltip />} />

            <Area
              type="monotone"
              dataKey="price"
              stroke="#4F46E5"
              strokeWidth={2}
              fill="url(#chartGradient)"
              dot={false}
              activeDot={{ r: 4.5, fill: '#4F46E5', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
