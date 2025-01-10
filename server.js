import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import statsRouter from './routes/stats.js';
import deviationRouter from './routes/deviation.js';
import backgroundJob from './Services/backgroundJob.js';
import fetchCryptoData from './Services/backgroundJob.js';
import connectmongodb from './utils/dbconnect.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectmongodb();
app.use(express.json());

// API Routes
app.use('/api', statsRouter);
app.use('/api', deviationRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

fetchCryptoData();