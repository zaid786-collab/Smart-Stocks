import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine
} from 'recharts';

function CustomPredictionTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isForecast = data.isForecast;
    const price = isForecast ? data.predicted : data.historical;

    return (
      <div className="bg-white border border-gray-200 p-2.5 rounded-lg shadow-sm text-xs font-mono">
        <div className="flex items-center space-x-1.5 mb-1">
          <span
            className={`w-2 h-2 rounded-full ${
              isForecast ? 'bg-indigo-600' : 'bg-gray-800'
            }`}
          />
          <span className="font-sans font-medium text-gray-500 text-[11px]">
            {isForecast ? 'AI Forecast' : 'Historical Price'}
          </span>
        </div>
        <div className="font-bold text-gray-900 text-sm">
          ${price?.toFixed(2)}
        </div>
      </div>
    );
  }
  return null;
}

export default function PredictionChart({
  chartData = [],
  currentPrice,
  horizon = '30D',
  onHorizonChange,
  height = 360
}) {
  const horizons = ['7D', '30D', '90D'];

  const allPrices = chartData
    .map((d) => d.historical || d.predicted)
    .filter(Boolean);
  const minPrice = allPrices.length ? Math.floor(Math.min(...allPrices) * 0.99) : 0;
  const maxPrice = allPrices.length ? Math.ceil(Math.max(...allPrices) * 1.01) : 100;

  return (
    <div className="w-full bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 shadow-card">
      {/* Chart Top Bar: Legend & Timeframe */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-100">
        {/* Legend */}
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-0.5 bg-gray-800 rounded-full" />
            <span className="font-medium text-gray-600">Historical Price</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-3.5 h-0.5 border-t-2 border-dashed border-indigo-600" />
            <span className="font-medium text-indigo-600 flex items-center gap-1">
              <span>AI Forecast</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-indigo-50 text-indigo-700 rounded font-semibold">
                Projected
              </span>
            </span>
          </div>
        </div>

        {/* Horizon Selector (7D, 30D, 90D) */}
        <div className="flex items-center space-x-1 p-0.5 bg-gray-50 rounded-lg border border-gray-200/60 self-start sm:self-auto">
          {horizons.map((h) => (
            <button
              key={h}
              onClick={() => onHorizonChange && onHorizonChange(h)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                horizon === h
                  ? 'bg-white text-gray-900 shadow-sm font-semibold'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {h}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Canvas */}
      <div className="mt-4" style={{ width: '100%', height }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid stroke="#F3F4F6" strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="point"
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

            <Tooltip content={<CustomPredictionTooltip />} />

            {currentPrice && (
              <ReferenceLine
                y={currentPrice}
                stroke="#E5E7EB"
                strokeDasharray="2 2"
              />
            )}

            {/* Historical Solid Line */}
            <Line
              type="monotone"
              dataKey="historical"
              stroke="#1F2937"
              strokeWidth={2}
              dot={false}
              connectNulls={false}
            />

            {/* AI Predicted Dashed Line */}
            <Line
              type="monotone"
              dataKey="predicted"
              stroke="#4F46E5"
              strokeWidth={2.2}
              strokeDasharray="4 4"
              dot={false}
              activeDot={{ r: 4.5, fill: '#4F46E5', stroke: '#FFFFFF', strokeWidth: 2 }}
              connectNulls={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
