import { getBinance } from "./binance.js";
import { getLunoXbtUsdcRate } from "./luno-usd.js";

export async function getPriceDiff() {
    const biPrice = await getBinance();
    const lunoPrice = await getLunoXbtUsdcRate();
  
    const priceDiff = lunoPrice - biPrice;
    // console.log('5. Price Difference:', priceDiff);
    return priceDiff;
  }