import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Prediction from './pages/Prediction';
import Portfolio from './pages/Portfolio';
import Copilot from './pages/Copilot';

export default function App() {
  const [selectedStock, setSelectedStock] = useState('AAPL');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAFAFA] text-gray-900 flex flex-col">
        {/* Minimal Top Navigation */}
        <Navbar onSelectStock={setSelectedStock} />

        {/* Main Content Area */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  selectedStock={selectedStock}
                  onSelectStock={setSelectedStock}
                />
              }
            />
            <Route
              path="/analysis"
              element={
                <Analysis
                  selectedStock={selectedStock}
                  onSelectStock={setSelectedStock}
                />
              }
            />
            <Route
              path="/prediction"
              element={
                <Prediction
                  selectedStock={selectedStock}
                  onSelectStock={setSelectedStock}
                />
              }
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route
              path="/copilot"
              element={<Copilot onSelectStock={setSelectedStock} />}
            />

            {/* Aliases & Fallbacks */}
            <Route path="/predictions" element={<Navigate to="/prediction" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Minimal Footer with Financial Disclaimer */}
        <footer className="border-t border-gray-200/60 bg-white py-6 text-center text-xs text-gray-400 mt-auto">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="font-semibold text-gray-600">
              SMART STOCKS AI <span className="font-normal text-gray-400">• Intelligent Investment Platform</span>
            </span>
            <span>
              AI insights are based on analyzed market data and are for informational purposes only. They are not financial advice.
            </span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
