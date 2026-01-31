// Determine the base URL based on environment
// In Vite, use import.meta.env instead of process.env
const BASE_URL = import.meta.env.PROD
  ? '/api'  // Use Vercel serverless functions in production
  : 'https://api.coingecko.com/api/v3';  // Use CoinGecko directly in development

export const fetchCryptos = async () => {
  const url = import.meta.env.PROD
    ? `${BASE_URL}/cryptos`
    : `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    
  console.log('Fetching cryptos from:', url); // Debug log
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch cryptos");
  }

  return response.json();
};

export const fetchCoinData = async (id) => {
  const url = import.meta.env.PROD
    ? `${BASE_URL}/coin?id=${id}`
    : `${BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
    
  console.log('Fetching coin data from:', url); // Debug log
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Failed to fetch coin data");
  }
  
  return response.json();
};

export const fetchChartData = async (id) => {
  const url = import.meta.env.PROD
    ? `${BASE_URL}/chart?id=${id}`
    : `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`;
    
  console.log('Fetching chart data from:', url); // Debug log
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Failed to fetch chart data");
  }
  
  return response.json();
};