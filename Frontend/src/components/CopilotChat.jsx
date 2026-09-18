import React, { useState } from 'react';
import { Sparkles, Send, ArrowRight, MessageSquare, Bot, User } from 'lucide-react';
import { COPILOT_SUGGESTIONS, COPILOT_KNOWLEDGE } from '../data/mockData';

export default function CopilotChat({ onSelectStock }) {
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello! I am your Smart Stocks AI Copilot. Ask me to screen opportunities, evaluate portfolio stress-tests, or compare equities.'
    }
  ]);
  const [activeResponse, setActiveResponse] = useState(null);

  const handleAsk = (queryText) => {
    const q = queryText || inputQuery;
    if (!q.trim()) return;

    // Append user message
    const userMsg = { id: Date.now(), sender: 'user', text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');

    // Mock AI match from knowledge base or default
    setTimeout(() => {
      const match = COPILOT_KNOWLEDGE[q] || {
        title: `Analysis for "${q}"`,
        summary: `Based on quantitative factor screening and valuation models, here is the synthesized intelligence for your inquiry:`,
        results: [
          { ticker: 'NVDA', name: 'NVIDIA', price: '$142.61', return: '+14.8%', risk: 'Moderate', confidence: '91%', signal: 'BUY' },
          { ticker: 'MSFT', name: 'Microsoft', price: '$505.32', return: '+8.5%', risk: 'Low', confidence: '86%', signal: 'BUY' },
          { ticker: 'GOOGL', name: 'Google', price: '$241.90', return: '+4.2%', risk: 'Moderate', confidence: '78%', signal: 'HOLD' }
        ],
        recommendation: 'Target high-conviction momentum leaders while keeping portfolio sector risk diversified.'
      };

      setActiveResponse(match);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: match.summary,
          data: match
        }
      ]);
    }, 400);
  };

  return (
    <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-card space-y-6">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-1">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask Smart Stocks AI</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
          AI Investment Copilot
        </h2>
        <p className="text-xs text-gray-500">
          Turn complex market questions into instant, data-driven answers and opportunity lists.
        </p>
      </div>

      {/* Suggested Prompts Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
        {COPILOT_SUGGESTIONS.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleAsk(prompt)}
            className="px-3 py-1.5 rounded-xl bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-700 border border-gray-200/70 text-xs font-medium transition-all"
          >
            "{prompt}"
          </button>
        ))}
      </div>

      {/* Conversational Stream Container */}
      <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start space-x-3 text-xs ${
              m.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {m.sender === 'ai' && (
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`p-3.5 rounded-2xl max-w-lg ${
                m.sender === 'user'
                  ? 'bg-gray-900 text-white font-medium rounded-br-none'
                  : 'bg-gray-50 border border-gray-200/70 text-gray-800 rounded-bl-none space-y-3'
              }`}
            >
              <p className="leading-relaxed">{m.text}</p>

              {/* Structured AI Results Table if available */}
              {m.data && m.data.results && (
                <div className="space-y-2 pt-2 border-t border-gray-200/60 font-mono">
                  <div className="font-sans font-bold text-gray-900 text-xs">{m.data.title}</div>
                  <div className="divide-y divide-gray-200/50 bg-white rounded-xl border border-gray-200/70 p-1">
                    {m.data.results.map((r, i) => (
                      <div
                        key={i}
                        className="py-2 px-2.5 flex items-center justify-between hover:bg-gray-50/80 rounded-lg cursor-pointer transition-colors"
                        onClick={() => onSelectStock && onSelectStock(r.ticker)}
                      >
                        <div>
                          <span className="font-bold text-gray-900 mr-1.5">{r.ticker}</span>
                          <span className="text-[11px] text-gray-400 font-sans">{r.name}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs">
                          <span className="text-gray-700">{r.price}</span>
                          <span className="text-emerald-600 font-bold">{r.return}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 font-bold">
                            {r.confidence}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {m.data.recommendation && (
                    <p className="font-sans text-[11px] text-gray-600 italic pt-1">
                      💡 {m.data.recommendation}
                    </p>
                  )}
                </div>
              )}
            </div>

            {m.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="relative flex items-center"
      >
        <input
          type="text"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="Ask anything about the market (e.g. Find tech stocks under $200)..."
          className="w-full bg-gray-50 hover:bg-white focus:bg-white border border-gray-200 rounded-xl pl-4 pr-12 py-3 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
