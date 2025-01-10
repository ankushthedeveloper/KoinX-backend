import express from 'express';
import mongoose from 'mongoose';
import Crypto from '../Models/Crypto.js';
const { Schema } = mongoose;

const app = express.Router();

const calculateStandardDeviation = (prices) => {
  const n = prices.length;
  const mean = prices.reduce((sum, price) => sum + price, 0) / n;
  const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / n;
  return Math.sqrt(variance);
};

app.get('/deviation', async (req, res) => {
  const { coin } = req.query;

  if (!['bitcoin', 'matic-network', 'ethereum'].includes(coin)) {
    return res.status(400).json({ error: 'Invalid coin' });
  }

  try {

    const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);

    if (records.length === 0) {
      return res.status(404).json({ error: 'No data found for the requested coin' });
    }

    // Extract the prices from the records
    const prices = records.map(record => record.price);

    // Calculate the standard deviation
    const deviation = calculateStandardDeviation(prices);

    // Send the response with the deviation
    res.json({ deviation: deviation.toFixed(2) });

  } catch (error) {
    console.error('Error fetching or calculating deviation:', error);
    res.status(500).json({ error: 'An error occurred while calculating deviation' });
  }
});


export default app;