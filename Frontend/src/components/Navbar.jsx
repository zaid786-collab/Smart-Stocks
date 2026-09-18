import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sparkles, Search, Menu, X, User } from 'lucide-react';
import { STOCKS } from '../data/mockData';

export default function Navbar({ onSelectStock }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Analysis', path: '/analysis' },
    { name: 'AI Prediction', path: '/prediction' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'AI Copilot', path: '/copilot' },
  ];

  const handleStockClick = (ticker) => {
    if (onSelectStock) onSelectStock(ticker);
    setSearchQuery('');
    setSearchOpen(false);
    navigate('/analysis');
  };

  const filteredStocks = searchQuery
    ? Object.values(STOCKS).filter(
        (s) =>
          s.ticker.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="font-semibold text-sm tracking-tight text-gray-900">
                SMART STOCKS
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono tracking-wide">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path === '/prediction' && location.pathname.startsWith('/prediction'));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Search & Avatar */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="relative">
              <div className="relative flex items-center">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search stock..."
                  value={searchQuery}
                  onFocus={() => setSearchOpen(true)}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 focus:w-52 transition-all duration-200 bg-gray-50 hover:bg-gray-100/80 focus:bg-white border border-gray-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {searchOpen && searchQuery && (
                <>
                  <div className="fixed inset-0 z-20" onClick={() => setSearchOpen(false)} />
                  <div className="absolute right-0 mt-1.5 w-60 bg-white border border-gray-100 rounded-xl shadow-lg z-30 py-1 overflow-hidden divide-y divide-gray-50">
                    {filteredStocks.length > 0 ? (
                      filteredStocks.map((s) => (
                        <button
                          key={s.ticker}
                          onClick={() => handleStockClick(s.ticker)}
                          className="w-full text-left px-3.5 py-2 hover:bg-gray-50 flex items-center justify-between text-xs transition-colors"
                        >
                          <div>
                            <span className="font-semibold font-mono text-gray-900 mr-1.5">
                              {s.ticker}
                            </span>
                            <span className="text-gray-500 text-[11px] truncate">{s.name}</span>
                          </div>
                          <span className="font-mono text-gray-700">${s.price.toFixed(2)}</span>
                        </button>
                      ))
                    ) : (
                      <div className="px-3.5 py-2 text-xs text-gray-400">No stock found</div>
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-xs font-medium">
              <User className="w-4 h-4" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100 space-y-1 bg-white animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === link.path
                    ? 'bg-gray-100 text-gray-900 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
