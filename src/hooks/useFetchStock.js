import axios from 'axios';

//const API_KEY = 'YOUR_ALPHA_VANTAGE_API_KEY'; // Replace with your real key
const API_KEY = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

const useFetchStock = () => {
  const fetchPrice = async (symbol) => {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;

    const response = await axios.get(url);
    const price = response.data['Global Quote']['05. price'];

    if (!price) {
      throw new Error('Invalid stock symbol or API error');
    }

    return parseFloat(price);
  };

  return { fetchPrice };
};

export default useFetchStock;