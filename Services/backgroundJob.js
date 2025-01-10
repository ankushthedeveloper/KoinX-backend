import axios from 'axios';
import Crypto from '../Models/Crypto.js';

const fetchCryptoData = async () => {
  try {
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(
        ','
      )}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );

    const data = response.data;
    console.log('Fetched data:', data);

    const cryptoData = coins.map(coin => ({
        coin,
        price: data[coin]?.usd || 0,
        marketCap: data[coin]?.usd_market_cap || 0,
        change24h: data[coin]?.usd_24h_change || 0,
    }));

    await Crypto.insertMany(cryptoData);
    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error fetching or inserting data:', error);
  }
};

export default fetchCryptoData;
