import { getBinance } from "./binance.js";
import { getLunoXbtMyrRate } from "./luno-myr.js";
import { getConvertRate } from "./convert-rate.js";

export async function getLunoXbtUsdcRate() {
    const lunoMYR = await getLunoXbtMyrRate();
    const convertionRate = await getConvertRate();
    const lunoPrice = lunoMYR / convertionRate;
    // console.log('4. BTCBUSD price on Binance:', lunoPrice)
    return +lunoPrice;
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
    