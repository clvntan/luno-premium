// Import necessary functions for calculations from external modules.
import { getBinance } from "./binance.js";
import { getLunoXbtMyrRate } from "./luno-myr.js";
import { getConvertRate } from "./convert-rate.js";

// Function to calculate the Luno XBT to USDC rate.
export async function getLunoXbtUsdcRate(getLunoXbtMyrRate, getConvertRate) {
  try {
    const lunoUsdPrice = getLunoXbtMyrRate / getConvertRate; // Calculate the Luno USD price using the provided functions.

    // If the result is a valid number, return it; otherwise, throw an error.
    if (!isNaN(lunoUsdPrice)) {
      return +lunoUsdPrice;
    } else {
      throw "Not a number value";
    }
  } catch (err) {
    // Handle errors related to invalid calculations or data.
    if (err == "Not a number value") {
      return "Failed to calculate the Luno USD price, please try again";
    }
    throw err;
  }
}

// Function to calculate the price difference between Luno XBT to USDC rate and Binance price.
export async function getPriceDiff(getLunoXbtUsdcRate, getBinance) {
  try {
    const priceDiff = getLunoXbtUsdcRate - getBinance; // Calculate the price difference using the provided functions.

    // If the result is a valid number, return it; otherwise, throw an error.
    if (!isNaN(priceDiff)) {
      return priceDiff;
    } else {
      throw "Not a number value";
    }
  } catch (err) {
    // Handle errors related to invalid calculations or data.
    if (err == "Not a number value") {
      return "Failed to calculate the price difference, please try again";
    }
    throw err;
  }
}

// Function to calculate the Luno premium percentage.
export async function getLunoPremium(getPriceDiff, getLunoXbtUsdcRate) {
  try {
    const lunoPremium = (getPriceDiff / getLunoXbtUsdcRate) * 100; // Calculate the Luno premium percentage using the provided functions.

    // If the result is a valid number, return it; otherwise, throw an error.
    if (!isNaN(lunoPremium)) {
      return lunoPremium;
    } else {
      throw "Not a number value";
    }
  } catch (err) {
    // Handle errors related to invalid calculations or data.
    if (err == "Not a number value") {
      return "Failed to calculate the percentage, please try again";
    }
    throw err;
  }
}