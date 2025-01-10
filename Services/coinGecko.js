import schedule from 'node-schedule';
import fetchCryptoData from '../fetchCryptoData.js'; 

schedule.scheduleJob('0 */2 * * *', async () => {
  console.log('Running background job to fetch cryptocurrency data...');
  await fetchCryptoData();
});
