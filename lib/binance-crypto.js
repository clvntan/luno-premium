// Import the node-binance-api library to interact with the Binance API.
import Binance from "node-binance-api";

// Function to fetch the current price of a cryptocurrency in BUSD from Binance.
export async function getBinanceCrypto(biCoins) {
  // If the provided symbol is "XBT", convert it to "BTC" as per Binance's ticker conventions.
  if (biCoins === "XBT") {
    biCoins = "BTC";
  }
  const binance = new Binance(); // Create a new instance of the Binance class from the node-binance-api library.
  const ticker = await binance.prices(); // Use the prices method to fetch the ticker information from Binance.
  return +ticker[`${biCoins}BUSD`]; // Return the current price of the specified cryptocurrency in BUSD as a numeric value.
}
