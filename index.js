// Import necessary functions for retrieving data and performing calculations from external modules.
import { getBinance } from "./lib/binance.js";
import { getLunoXbtMyrRate } from "./lib/luno-myr.js";
import { getConvertRate } from "./lib/convert-rate.js";
import {
  getLunoXbtUsdcRate,
  getPriceDiff,
  getLunoPremium,
} from "./lib/calculation.js";

// Main function that orchestrates the Luno Premium calculation project.
export async function lunoPremiumProject() {
  const lunoXbtMyrRate = await getLunoXbtMyrRate();  // Fetch the BTC to MYR rate from Luno.
  const convertRate = await getConvertRate();  // Fetch the conversion rate from USD to MYR.
  const lunoXbtUsdcRate = await getLunoXbtUsdcRate(lunoXbtMyrRate, convertRate); // Calculate the BTC to USDC rate on Luno using the fetched rates.
  const binance = await getBinance(); // Fetch the current price of BTC in BUSD from Binance.
  const priceDiff = await getPriceDiff(lunoXbtUsdcRate, binance); // Calculate the price difference between Luno and Binance rates.
  const lunoPremium = await getLunoPremium(lunoXbtUsdcRate, binance); // Calculate the Luno Premium percentage based on rates from Binance and Luno.

  // Display the fetched and calculated information in the console.
  console.log("BTCMYR price on Luno:".padEnd(30), "MYR", lunoXbtMyrRate);
  console.log("USDMYR:".padEnd(30), convertRate);
  console.log("BTCUSD price on Luno:".padEnd(30), "USD", lunoXbtUsdcRate);
  console.log("BTCBUSD price on Binance:".padEnd(30), "USD", binance);
  console.log("Price Difference:".padEnd(30), "USD", priceDiff);
  console.log("Luno Premium:".padEnd(30), lunoPremium.toFixed(4) + "%");

  // Return the calculated Luno Premium as a number.
  return +lunoPremium;
}

// Execute the lunoPremiumProject function.
lunoPremiumProject();