import express from 'express';
import Crypto from '../Models/Crypto.js';  
import { Router } from 'express'; 

const router = Router();

router.get('/stats', async (req,res)=>{
    const {coin}=req.query;

    if(!coin || !['bitcoin', 'matic-network', 'ethereum'].includes(coin)) {
        return res.status(400).json({error: 'Invalid coin name. Choose between bitcoin, matic-network, or ethereum.'});
    }

    try {
        const latestData = await Crypto.findOne({ coin }).sort({ timestamp: -1 }).exec();
        if (!latestData) {
          return res.status(402).json({ error: 'No data found' });
        }
        res.json({
          price: latestData.price,
          marketCap: latestData.marketCap,
          "24hChange": latestData.change24h,
        });
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });
    
export default router;

