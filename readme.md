Crypto Stats API 🚀
Welcome to the Crypto Stats API! This project is a server-side application designed to fetch real-time cryptocurrency data and track key metrics like price, market cap, and 24-hour price changes for your favorite coins. It's like having a personal cryptocurrency stats tracker at your fingertips!

What This Project Does 🧐
Real-Time Crypto Data: It pulls data from the CoinGecko API and stores it in a MongoDB database so you can track the latest stats for coins like Bitcoin, Ethereum, and Matic.

Automatic Updates: Every 2 hours, the app fetches fresh data and updates the database with the latest stats.

APIs to Get the Data: You can access these stats through the API, and even get some cool extra features like calculating the price deviation for the last 100 data points of a given cryptocurrency.

Features ✨
Background Job: A job that runs every 2 hours to fetch and store data about popular cryptocurrencies.
API Endpoints:
/stats: Get the latest stats (price, market cap, and 24-hour change) for a specific cryptocurrency.
/deviation: Want to know the price volatility? This endpoint calculates the standard deviation of the last 100 price records for the requested coin.
MongoDB Integration: The app stores all this valuable crypto data in a MongoDB database, making it easy to scale and query.
Built With 🛠️
Node.js: The backbone of this app, running on a non-blocking event-driven architecture.
Express: The web framework that makes it easy to handle HTTP requests and responses.
MongoDB: A NoSQL database that stores all the crypto data.
Axios: Our trusty HTTP client to fetch data from CoinGecko.
Node-Schedule: The tool we use to schedule our background job that fetches data every 2 hours.
How To Get Started 👨‍💻
If you want to try out this project, here’s how you can set it up on your local machine:

1. Clone the Repo
bash
Copy code
git clone https://github.com/your-username/crypto-stats.git
cd crypto-stats
2. Install Dependencies
We’re using some cool packages, so make sure to install them:

bash
Copy code
npm install
3. Set Up Environment Variables
You’ll need to add your MongoDB URI in a .env file. Create the file if it doesn't exist, and add the following:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
4. Start the Server
Run the app with:

bash
Copy code
npm start
That’s it! Your server is up and running. 🚀

API Endpoints 📡
/stats?coin=<coin> - Get the Latest Stats
This endpoint gives you the most recent data (price, market cap, and 24-hour change) for the requested cryptocurrency.

Example Response:

json
Copy code
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
/deviation?coin=<coin> - Get the Price Deviation
If you want to know how volatile a cryptocurrency’s price is, this endpoint calculates the standard deviation of the last 100 price records.

Example Response:

json
Copy code
{
  "deviation": 4082.48
}