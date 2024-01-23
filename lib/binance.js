// Import the node-binance-api library to interact with the Binance API.
import Binance from "node-binance-api";

// Asynchronously fetches the current price of BTC in BUSD from the Binance API.
export async function getBinance() {
  try {
    const binance = new Binance(); // Create a new instance of the Binance class from the node-binance-api library.
    const ticker = await binance.prices(); // Use the prices method to fetch the ticker information from Binance.

    // Check if the fetched price of BTC in BUSD is a valid number.
    if (!isNaN(ticker.BTCBUSD)) {
      return +ticker.BTCBUSD; // If the price is valid, return it as a number.
    } else {
      throw "Fetch error"; // If the price is not a valid number, throw a custom error.
    }
  } catch (err) {
    // Handle errors that may occur during the fetch operation.
    if (err == "Fetch error") {
      return "Binance price is not retrievable at this time, please try again"; // If the error is specifically a fetch error, return a user-friendly error message.
    }
    throw err; // If the error is not a fetch error, rethrow the error for further handling.
  }
}