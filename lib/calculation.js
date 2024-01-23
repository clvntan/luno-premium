// Import necessary functions for retrieving data from external sources.
import { getBinance } from "./binance.js";
import { getLunoXbtMyrRate } from "./luno-myr.js";
import { getConvertRate } from "./convert-rate.js";

// Asynchronously calculates the BTC to USDC rate on Luno based on rates from Binance and a conversion rate.
export async function getLunoXbtUsdcRate() {
  try {
    // Fetch the BTC to MYR rate from Luno and the conversion rate.
    const lunoMYR = await getLunoXbtMyrRate();
    const conversionRate = await getConvertRate();
    const lunoUsdPrice = lunoMYR / conversionRate; // Calculate the BTC to USDC rate on Luno using the fetched rates.

    // Check if the calculated value is a number.
    if (!isNaN(lunoUsdPrice)) {
      return +lunoUsdPrice; // Return the calculated BTC to USDC rate as a number.
    } else {
      throw "Not a number value"; // If the calculated value is not a number, throw a custom error.
    }
  } catch (err) {
    // Handle errors that may occur during the calculation.
    if (err == "Not a number value") {
      return "Failed to calculate the Luno USD price, please try again"; // If the error is specifically due to a non-numeric value, return a user-friendly error message.
    }
    throw err; // If the error is not related to a non-numeric value, rethrow the error for further handling.
  }
}

// Asynchronously calculates the price difference between Binance and Luno BTC to USDC rates.
export async function getPriceDiff() {
  try {
    // Fetch the BTC to USDC rate from Binance and Luno.
    const binancePrice = await getBinance();
    const lunoPrice = await getLunoXbtUsdcRate();
    const priceDiff = lunoPrice - binancePrice; // Calculate the price difference between Binance and Luno rates.

    // Check if the calculated value is a number.
    if (!isNaN(priceDiff)) {
      return priceDiff; // Return the calculated price difference as a number.
    } else {
      throw "Not a number value"; // If the calculated value is not a number, throw a custom error.
    }
  } catch (err) {
    // Handle errors that may occur during the calculation.
    if (err == "Not a number value") {
      return "Failed to calculate the price difference, please try again"; // If the error is specifically due to a non-numeric value, return a user-friendly error message.
    }
    throw err; // If the error is not related to a non-numeric value, rethrow the error for further handling.
  }
}

// Asynchronously calculates the Luno premium percentage based on rates from Binance and Luno.
export async function getLunoPremium() {
  try {
    // Fetch the BTC to USDC rate from Binance and Luno.
    const binancePrice = await getBinance();
    const lunoPrice = await getLunoXbtUsdcRate();
    const lunoPremium = ((lunoPrice - binancePrice) / lunoPrice) * 100; // Calculate the Luno premium percentage.

    // Check if the calculated value is a number.
    if (!isNaN(lunoPremium)) {
      return lunoPremium; // Return the calculated Luno premium as a number.
    } else {
      throw "Not a number value"; // If the calculated value is not a number, throw a custom error.
    }
  } catch (err) {
    // Handle errors that may occur during the calculation.
    if (err == "Not a number value") {
      return "Failed to calculate the percentage, please try again"; // If the error is specifically due to a non-numeric value, return a user-friendly error message.
    }
    throw err; // If the error is not related to a non-numeric value, rethrow the error for further handling.
  }
}