// Comprehensive Mock Data Engine for Smart Stocks AI Prototype

export const STOCKS = {
  AAPL: {
    ticker: 'AAPL',
    name: 'Apple Inc.',
    price: 228.14,
    change: 6.31,
    changePercent: 2.84,
    marketCap: '$3.48T',
    peRatio: '33.8',
    high52: 237.23,
    low52: 164.08,
    sector: 'Technology',
    trend: 'Bullish',
    momentum: 'Strong',
    volatility: 'Moderate',
    aiSignal: 'BUY',
    aiConfidence: 87,
    aiPredictedPrice: 241.80,
    expectedChange: 5.99,
    aiTitle: 'Bullish Momentum Detected',
    aiExpectedTrend: 'Positive',
    aiExplanation: 'Recent price momentum and historical patterns indicate a potentially positive short-term trend.',
    // Business Health
    health: {
      score: 'Strong',
      revenueGrowth: '+16.2%',
      profitGrowth: '+18.4%',
      peRatio: '33.8',
      roe: '35.1%',
      summary: 'Revenue and profitability remain strong, while the balance sheet indicates healthy financial stability.'
    },
    // Risk Analysis
    risk: {
      score: 32,
      level: 'Moderate',
      volatility: 'Moderate',
      marketRisk: 'Low',
      sectorRisk: 'Moderate',
      uncertainty: 'Low'
    },
    // Why AI Likes This Stock
    whyAiLikes: {
      positives: [
        'Strong revenue growth and services expansion',
        'Increasing institutional trading volume',
        'Positive price momentum above 50-day EMA',
        'Strong consumer technology sector performance'
      ],
      risks: [
        'Elevated valuation multiple (33.8 P/E)',
        'Macro hardware replacement cycle dependency'
      ],
      overallView: 'Bullish'
    },
    // Horizons
    horizons: {
      short: { label: '1–7 Days', signal: 'HOLD', confidence: 76, target: 229.50, change: '+0.6%' },
      medium: { label: '1–6 Months', signal: 'BUY', confidence: 87, target: 241.80, change: '+5.99%' },
      long: { label: '1–5 Years', signal: 'STRONG BUY', confidence: 92, target: 278.00, change: '+21.8%' }
    },
    // News & Sentiment
    news: {
      overallSentiment: '72% Positive',
      items: [
        { id: 1, title: 'Apple expands generative AI services integration with enterprise suites', sentiment: 'Positive', time: '2h ago' },
        { id: 2, title: 'Record holiday iPhone demand reported across European retail channels', sentiment: 'Positive', time: '5h ago' },
        { id: 3, title: 'Supply chain analysts note seasonal component inventory normalization', sentiment: 'Neutral', time: '1d ago' }
      ]
    },
    aiFactors: ['Positive price momentum', 'Strong historical trend', 'Increasing trading volume']
  },
  NVDA: {
    ticker: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 142.61,
    change: 5.64,
    changePercent: 4.12,
    marketCap: '$3.50T',
    peRatio: '58.2',
    high52: 149.77,
    low52: 45.11,
    sector: 'Technology',
    trend: 'Bullish',
    momentum: 'Very Strong',
    volatility: 'High',
    aiSignal: 'BUY',
    aiConfidence: 91,
    aiPredictedPrice: 163.70,
    expectedChange: 14.80,
    aiTitle: 'Breakout Pattern Identified',
    aiExpectedTrend: 'Positive',
    aiExplanation: 'Consistently elevated volume above 20-day average and accelerating datacenter demand indicate continuation.',
    health: {
      score: 'Exceptional',
      revenueGrowth: '+122.4%',
      profitGrowth: '+168.2%',
      peRatio: '58.2',
      roe: '68.4%',
      summary: 'Unprecedented gross margins above 75% backed by structural enterprise AI infrastructure demand.'
    },
    risk: {
      score: 44,
      level: 'Moderate',
      volatility: 'High',
      marketRisk: 'Moderate',
      sectorRisk: 'Moderate',
      uncertainty: 'Low'
    },
    whyAiLikes: {
      positives: [
        'Dominant 85%+ market share in AI accelerators',
        'Hyperscaler capex guidance increases across cloud titans',
        'Exceptional return on equity (68.4%)',
        'Consistent volume breakout confirmations'
      ],
      risks: [
        'High valuation multiple requires flawless execution',
        'Customer concentration among top 5 cloud providers'
      ],
      overallView: 'Strongly Bullish'
    },
    horizons: {
      short: { label: '1–7 Days', signal: 'BUY', confidence: 84, target: 146.50, change: '+2.7%' },
      medium: { label: '1–6 Months', signal: 'BUY', confidence: 91, target: 163.70, change: '+14.8%' },
      long: { label: '1–5 Years', signal: 'STRONG BUY', confidence: 94, target: 210.00, change: '+47.2%' }
    },
    news: {
      overallSentiment: '84% Positive',
      items: [
        { id: 1, title: 'NVIDIA announces new enterprise AI infrastructure partnerships', sentiment: 'Positive', time: '1h ago' },
        { id: 2, title: 'Major cloud providers expand Blackwell cluster deployment commitments', sentiment: 'Positive', time: '4h ago' },
        { id: 3, title: 'Wall Street analysts flag potential multiple compression if capex peaks', sentiment: 'Negative', time: '12h ago' }
      ]
    },
    aiFactors: ['Accelerating volume breakouts', 'Consistent support at 20 EMA', 'Institutional order flow accumulation']
  },
  MSFT: {
    ticker: 'MSFT',
    name: 'Microsoft Corporation',
    price: 505.32,
    change: 8.55,
    changePercent: 1.72,
    marketCap: '$3.75T',
    peRatio: '36.4',
    high52: 515.20,
    low52: 366.50,
    sector: 'Technology',
    trend: 'Bullish',
    momentum: 'Steady',
    volatility: 'Low',
    aiSignal: 'BUY',
    aiConfidence: 86,
    aiPredictedPrice: 548.20,
    expectedChange: 8.48,
    aiTitle: 'Steady Upward Channel',
    aiExpectedTrend: 'Positive',
    aiExplanation: 'Low volatility consolidation near record highs indicates high-probability institutional accumulation.',
    health: {
      score: 'Strong',
      revenueGrowth: '+15.8%',
      profitGrowth: '+19.2%',
      peRatio: '36.4',
      roe: '38.5%',
      summary: 'Impeccable balance sheet (AAA-rated) with Azure cloud revenue and Copilot monetization expanding.'
    },
    risk: {
      score: 22,
      level: 'Low',
      volatility: 'Low',
      marketRisk: 'Low',
      sectorRisk: 'Moderate',
      uncertainty: 'Low'
    },
    whyAiLikes: {
      positives: [
        'Diversified software, enterprise cloud, and gaming cash flows',
        'Copilot enterprise seat adoption expanding by 60% YoY',
        'Pristine AAA corporate credit profile',
        'Consistently steady historical upward trajectory'
      ],
      risks: [
        'Substantial annual datacenter capital expenditures',
        'Antitrust scrutiny in cloud software packaging'
      ],
      overallView: 'Bullish'
    },
    horizons: {
      short: { label: '1–7 Days', signal: 'HOLD', confidence: 78, target: 508.00, change: '+0.5%' },
      medium: { label: '1–6 Months', signal: 'BUY', confidence: 86, target: 548.20, change: '+8.48%' },
      long: { label: '1–5 Years', signal: 'STRONG BUY', confidence: 93, target: 630.00, change: '+24.6%' }
    },
    news: {
      overallSentiment: '78% Positive',
      items: [
        { id: 1, title: 'Azure AI ARR surges beyond internal quarterly forecasts', sentiment: 'Positive', time: '3h ago' },
        { id: 2, title: 'Microsoft expands commercial Copilot integration across Office 365', sentiment: 'Positive', time: '7h ago' },
        { id: 3, title: 'Enterprise IT spending survey indicates steady cloud migration budgets', sentiment: 'Neutral', time: '1d ago' }
      ]
    },
    aiFactors: ['Low volatility drift upwards', 'Cloud revenue acceleration', 'Healthy moving average support']
  },
  GOOGL: {
    ticker: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 241.90,
    change: 2.51,
    changePercent: 1.05,
    marketCap: '$2.98T',
    peRatio: '24.1',
    high52: 254.30,
    low52: 129.40,
    sector: 'Technology',
    trend: 'Neutral',
    momentum: 'Consolidating',
    volatility: 'Moderate',
    aiSignal: 'HOLD',
    aiConfidence: 78,
    aiPredictedPrice: 252.00,
    expectedChange: 4.18,
    aiTitle: 'Consolidation Phase Detected',
    aiExpectedTrend: 'Neutral',
    aiExplanation: 'Price is moving within a narrow horizontal band. AI model recommends holding for a clear breakout direction.',
    health: {
      score: 'Strong',
      revenueGrowth: '+14.1%',
      profitGrowth: '+26.8%',
      peRatio: '24.1',
      roe: '29.7%',
      summary: 'Attractive valuation relative to mega-cap peers with Google Cloud generating substantial operating income.'
    },
    risk: {
      score: 36,
      level: 'Moderate',
      volatility: 'Moderate',
      marketRisk: 'Low',
      sectorRisk: 'Moderate',
      uncertainty: 'Moderate'
    },
    whyAiLikes: {
      positives: [
        'Lowest valuation multiple among mega-cap tech leaders (24.1 P/E)',
        'YouTube and Search advertising showing robust resilience',
        'Google Cloud operating margins inflecting higher',
        'Substantial share repurchase program'
      ],
      risks: [
        'Ongoing regulatory DOJ antitrust litigation remedies',
        'Competitive AI search interface transition dynamics'
      ],
      overallView: 'Neutral / Moderately Bullish'
    },
    horizons: {
      short: { label: '1–7 Days', signal: 'HOLD', confidence: 75, target: 243.00, change: '+0.4%' },
      medium: { label: '1–6 Months', signal: 'HOLD', confidence: 78, target: 252.00, change: '+4.18%' },
      long: { label: '1–5 Years', signal: 'BUY', confidence: 85, target: 310.00, change: '+28.1%' }
    },
    news: {
      overallSentiment: '64% Positive',
      items: [
        { id: 1, title: 'Google introduces Gemini 2.0 multimodal model updates for developers', sentiment: 'Positive', time: '2h ago' },
        { id: 2, title: 'Search advertising revenue maintains double-digit growth in Q4', sentiment: 'Positive', time: '6h ago' },
        { id: 3, title: 'Regulatory discussions continue regarding search distribution agreements', sentiment: 'Negative', time: '1d ago' }
      ]
    },
    aiFactors: ['Attractive relative valuation', 'Google Cloud margin inflection', 'Support holding at 50 SMA']
  },
  AMZN: {
    ticker: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 198.40,
    change: 2.25,
    changePercent: 1.15,
    marketCap: '$2.07T',
    peRatio: '43.2',
    high52: 201.20,
    low52: 118.35,
    sector: 'Consumer',
    trend: 'Bullish',
    momentum: 'Moderate',
    volatility: 'Moderate',
    aiSignal: 'BUY',
    aiConfidence: 83,
    aiPredictedPrice: 218.00,
    expectedChange: 9.88,
    aiTitle: 'Ascending Triangle Formation',
    aiExpectedTrend: 'Positive',
    aiExplanation: 'Testing major resistance at $200 with higher reaction lows suggesting upside breakout.',
    health: {
      score: 'Strong',
      revenueGrowth: '+12.5%',
      profitGrowth: '+54.2%',
      peRatio: '43.2',
      roe: '21.4%',
      summary: 'AWS accelerating and regional fulfillment network efficiencies driving record free cash flow generation.'
    },
    risk: {
      score: 30,
      level: 'Moderate',
      volatility: 'Moderate',
      marketRisk: 'Low',
      sectorRisk: 'Low',
      uncertainty: 'Low'
    },
    whyAiLikes: {
      positives: [
        'AWS cloud re-acceleration toward 19% YoY run-rate',
        'North American retail operating margins at multi-year highs',
        'Advertising revenue exceeding $50B annual run rate'
      ],
      risks: [
        'Higher capex investments for generative AI clusters',
        'Consumer discretionary spending sensitivity'
      ],
      overallView: 'Bullish'
    },
    horizons: {
      short: { label: '1–7 Days', signal: 'BUY', confidence: 79, target: 201.00, change: '+1.3%' },
      medium: { label: '1–6 Months', signal: 'BUY', confidence: 83, target: 218.00, change: '+9.88%' },
      long: { label: '1–5 Years', signal: 'STRONG BUY', confidence: 91, target: 260.00, change: '+31.0%' }
    },
    news: {
      overallSentiment: '76% Positive',
      items: [
        { id: 1, title: 'AWS signs multi-billion dollar enterprise cloud transformation deal', sentiment: 'Positive', time: '3h ago' },
        { id: 2, title: 'Prime delivery speeds reach all-time record across top metro areas', sentiment: 'Positive', time: '8h ago' },
        { id: 3, title: 'International retail division reports progress toward breakeven margins', sentiment: 'Neutral', time: '1d ago' }
      ]
    },
    aiFactors: ['Ascending low structure', 'AWS revenue re-acceleration', 'Record free cash flow generation']
  }
};

export const FEATURED_STOCKS = ['AAPL', 'NVDA', 'MSFT', 'GOOGL'];

// Feature 8: AI Market Brief
export const AI_MARKET_BRIEF = {
  sentiment: '72% Bullish',
  headline: 'Market sentiment is moderately bullish.',
  narrative: 'Technology and consumer stocks are showing solid upward momentum, while energy remains under pressure due to crude inventory builds.',
  strongSector: 'Technology',
  weakSector: 'Energy',
  stocksToWatch: ['NVDA', 'MSFT', 'AAPL'],
  riskLevel: 'Moderate',
  updated: 'Updated today'
};

// Feature 11: Sector Intelligence
export const SECTORS_DATA = [
  { name: 'Technology', change: '+8.4%', outlook: 'Bullish', positive: true, stocks: ['NVDA', 'MSFT', 'AAPL'] },
  { name: 'Healthcare', change: '+3.1%', outlook: 'Positive', positive: true, stocks: ['LLY', 'UNH', 'ABBV'] },
  { name: 'Finance', change: '+1.8%', outlook: 'Neutral', positive: true, stocks: ['JPM', 'BAC', 'V'] },
  { name: 'Energy', change: '−2.4%', outlook: 'Weak', positive: false, stocks: ['XOM', 'CVX', 'COP'] },
  { name: 'Consumer', change: '+2.2%', outlook: 'Positive', positive: true, stocks: ['AMZN', 'TSLA', 'COST'] }
];

// Feature 1: AI Investment Opportunity Scanner
export const OPPORTUNITY_SCANNER_DATA = [
  {
    symbol: 'NVDA',
    name: 'NVIDIA',
    price: 142.61,
    expectedReturn: 14.8,
    signal: 'BUY',
    confidence: 91,
    risk: 'Moderate',
    sector: 'Technology',
    marketCap: 'Large',
    horizon: '1–6 Months',
    reason: 'Strong momentum, positive historical trend, and expanding Blackwell deliveries.'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft',
    price: 505.32,
    expectedReturn: 8.5,
    signal: 'BUY',
    confidence: 86,
    risk: 'Low',
    sector: 'Technology',
    marketCap: 'Large',
    horizon: '1–6 Months',
    reason: 'Pristine balance sheet with Copilot commercial monetization growth.'
  },
  {
    symbol: 'GOOGL',
    name: 'Google',
    price: 241.90,
    expectedReturn: 4.2,
    signal: 'HOLD',
    confidence: 78,
    risk: 'Moderate',
    sector: 'Technology',
    marketCap: 'Large',
    horizon: '1–6 Months',
    reason: 'Stable horizontal consolidation channel with low valuation relative to peers.'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon',
    price: 198.40,
    expectedReturn: 9.9,
    signal: 'BUY',
    confidence: 83,
    risk: 'Moderate',
    sector: 'Consumer',
    marketCap: 'Large',
    horizon: '1–6 Months',
    reason: 'Ascending wedge pattern with AWS and advertising margin expansion.'
  },
  {
    symbol: 'AAPL',
    name: 'Apple',
    price: 228.14,
    expectedReturn: 6.0,
    signal: 'BUY',
    confidence: 87,
    risk: 'Low',
    sector: 'Technology',
    marketCap: 'Large',
    horizon: '1–6 Months',
    reason: 'Expanding high-margin services revenue and breakout over 50-day moving average.'
  }
];

// Feature 6: Portfolio Health Analyzer
export const PORTFOLIO_DATA = {
  totalValue: 124580,
  overallReturn: 12.4,
  returnAmount: 13740,
  healthScore: 82,
  metrics: {
    diversification: 68,
    risk: 'Moderate',
    growthPotential: 'High',
    sectorConcentration: 'High'
  },
  summary: 'Your portfolio has strong growth exposure but is heavily concentrated in technology.',
  suggestion: 'Consider reducing technology concentration to improve diversification.',
  holdings: [
    { ticker: 'AAPL', name: 'Apple Inc.', shares: 160, price: 228.14, value: 36502, returnPct: '+14.2%', signal: 'BUY' },
    { ticker: 'NVDA', name: 'NVIDIA Corp.', shares: 280, price: 142.61, value: 39930, returnPct: '+28.6%', signal: 'BUY' },
    { ticker: 'MSFT', name: 'Microsoft Corp.', shares: 55, price: 505.32, value: 27792, returnPct: '+9.8%', signal: 'BUY' },
    { ticker: 'GOOGL', name: 'Alphabet Inc.', shares: 84, price: 241.90, value: 20319, returnPct: '+5.4%', signal: 'HOLD' }
  ]
};

// Feature 7: What-If Scenarios
export const SIMULATOR_PRESETS = [
  { id: 'bull', name: 'Bull Case', percent: 15, isPositive: true, desc: 'Macro rate cuts & AI hyperscaler spending expansion' },
  { id: 'base', name: 'Base Case', percent: 6, isPositive: true, desc: 'Steady corporate earnings growth within guidance' },
  { id: 'bear', name: 'Bear Case', percent: -12, isPositive: false, desc: 'Inflation rebound and valuation multiple compression' },
  { id: 'nvda-drop', name: 'NVIDIA falls 15%', percent: -3.87, customImpact: -4820, isPositive: false, desc: 'Isolated semiconductor supply pullback' }
];

// Feature 10: AI Copilot Suggested Questions & Mock Knowledge Base
export const COPILOT_SUGGESTIONS = [
  'Find technology stocks under $200',
  'Which stock has the lowest risk?',
  'Compare NVIDIA and Microsoft',
  'What happens if the market falls 10%?'
];

export const COPILOT_KNOWLEDGE = {
  'Find technology stocks under $200': {
    title: 'Technology Stocks Under $200',
    summary: 'Based on quantitative screening, these technology stocks are trading under $200 with positive growth momentum and solid AI conviction:',
    results: [
      { ticker: 'NVDA', name: 'NVIDIA', price: '$142.61', return: '+14.8%', risk: 'Moderate', confidence: '91%', signal: 'BUY' },
      { ticker: 'AMZN', name: 'Amazon', price: '$198.40', return: '+9.9%', risk: 'Moderate', confidence: '83%', signal: 'BUY' }
    ],
    recommendation: 'NVDA offers superior price momentum, while AMZN offers a balanced risk/reward ratio as retail margins improve.'
  },
  'Which stock has the lowest risk?': {
    title: 'Lowest Risk Assessment',
    summary: 'Among our actively monitored equities, Microsoft (MSFT) exhibits the lowest calculated risk profile across balance sheet quality and historical volatility:',
    results: [
      { ticker: 'MSFT', name: 'Microsoft', price: '$505.32', return: '+8.5%', risk: 'Low (22/100)', confidence: '86%', signal: 'BUY' },
      { ticker: 'AAPL', name: 'Apple', price: '$228.14', return: '+6.0%', risk: 'Low (32/100)', confidence: '87%', signal: 'BUY' }
    ],
    recommendation: 'MSFT holds a AAA corporate rating with low beta and recurring cloud enterprise contracts.'
  },
  'Compare NVIDIA and Microsoft': {
    title: 'Head-to-Head: NVDA vs. MSFT',
    summary: 'Comparative analysis based on valuation, momentum, and risk metrics:',
    results: [
      { ticker: 'NVDA', name: 'NVIDIA', price: '$142.61', return: '+14.8%', risk: 'Moderate (44/100)', confidence: '91%', signal: 'BUY (Growth)' },
      { ticker: 'MSFT', name: 'Microsoft', price: '$505.32', return: '+8.5%', risk: 'Low (22/100)', confidence: '86%', signal: 'BUY (Defensive)' }
    ],
    recommendation: 'Choose NVDA for pure high-beta AI infrastructure upside; choose MSFT for resilient, lower-volatility enterprise cash flow.'
  },
  'What happens if the market falls 10%?': {
    title: 'Stress Test: 10% Broad Market Correction',
    summary: 'Simulated impact on your current portfolio holdings ($124,580 total value):',
    results: [
      { ticker: 'Portfolio Impact', name: 'Simulated Net Change', price: '$113,368', return: '-$11,212 (-9.0%)', risk: 'Mitigated', confidence: '88%', signal: 'DEFEND' }
    ],
    recommendation: 'Because of your high concentration in technology (NVDA/AAPL/MSFT), your beta is approximately 1.12. Consider allocating 10–15% into defensive healthcare or cash reserves.'
  }
};

/**
 * Chart generators
 */
export function getStockChartData(ticker = 'AAPL', timeframe = '1M') {
  const stock = STOCKS[ticker] || STOCKS.AAPL;
  const basePrice = stock.price;

  let points = 24;
  let volatility = 0.012;

  switch (timeframe) {
    case '1D': points = 18; volatility = 0.004; break;
    case '1W': points = 20; volatility = 0.008; break;
    case '1M': points = 26; volatility = 0.014; break;
    case '6M': points = 30; volatility = 0.022; break;
    case '1Y': points = 36; volatility = 0.028; break;
    default: points = 26;
  }

  const result = [];
  let current = basePrice * (1 - points * 0.0025);
  const now = new Date();

  for (let i = 0; i < points; i++) {
    const isLast = i === points - 1;
    if (isLast) {
      current = basePrice;
    } else {
      const delta = (Math.sin(i / 2.5) * 0.7 + (Math.random() - 0.45)) * volatility * current;
      current += delta;
    }

    let dateLabel = '';
    if (timeframe === '1D') {
      const hour = 9 + Math.floor(i / 3);
      const minute = (i % 3) * 20;
      dateLabel = `${hour}:${minute === 0 ? '00' : minute}`;
    } else if (timeframe === '1W') {
      dateLabel = `Day ${i + 1}`;
    } else {
      const d = new Date(now);
      d.setDate(d.getDate() - (points - i) * (timeframe === '1Y' ? 10 : 1));
      dateLabel = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    result.push({
      date: dateLabel,
      price: Number(current.toFixed(2))
    });
  }

  return result;
}

export function getPredictionChartData(ticker = 'AAPL', horizon = '30D') {
  const stock = STOCKS[ticker] || STOCKS.AAPL;
  const currentPrice = stock.price;

  let targetChange = stock.expectedChange;
  if (horizon === '7D' || horizon === 'short') targetChange = stock.expectedChange * 0.35;
  if (horizon === '90D' || horizon === 'long') targetChange = stock.expectedChange * 1.8;

  const targetPrice = currentPrice * (1 + targetChange / 100);
  const histPoints = 14;
  const predPoints = horizon === '7D' || horizon === 'short' ? 7 : horizon === '90D' || horizon === 'long' ? 20 : 14;

  const data = [];
  let runningHist = currentPrice * 0.94;
  for (let i = 0; i < histPoints; i++) {
    const isAnchor = i === histPoints - 1;
    if (isAnchor) {
      runningHist = currentPrice;
    } else {
      runningHist += ((Math.sin(i) * 0.5 + 0.6) / histPoints) * (currentPrice * 0.06);
    }

    data.push({
      point: `D-${histPoints - i - 1}`,
      historical: Number(runningHist.toFixed(2)),
      predicted: isAnchor ? Number(currentPrice.toFixed(2)) : null,
      isForecast: false
    });
  }

  for (let j = 1; j <= predPoints; j++) {
    const progress = j / predPoints;
    const predPrice = currentPrice + (targetPrice - currentPrice) * Math.pow(progress, 0.85);

    data.push({
      point: `+${j}D`,
      historical: null,
      predicted: Number(predPrice.toFixed(2)),
      isForecast: true
    });
  }

  return {
    data,
    currentPrice,
    targetPrice: Number(targetPrice.toFixed(2)),
    expectedChange: Number(targetChange.toFixed(2))
  };
}
