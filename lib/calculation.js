import { getBinance } from "./binance.js";
import { getLunoXbtMyrRate } from "./luno-myr.js";
import { getConvertRate } from "./convert-rate.js";

export async function getLunoXbtUsdcRate() {
    const var1 = await getLunoXbtMyrRate();
    const var2 = await getConvertRate();
    const var3 = var1 / var2;
  
    return +var3;
}

export async function getPriceDiff() {
    const biPrice = await getBinance();
    const lunoPrice = await getLunoXbtUsdcRate();
      
    const priceDiff = lunoPrice - biPrice;
    // console.log('5. Price Difference:', priceDiff);
    return priceDiff;
}

export async function getLunoPremium() {
    const biPrice = await getBinance();
    const lunoPrice = await getLunoXbtUsdcRate();
      
    const lunoPremium = ((lunoPrice - biPrice) / lunoPrice) * 100;
    // console.log('6. Luno Premium:', lunoPremium.toFixed(4) + '%')
    return lunoPremium;
}
    