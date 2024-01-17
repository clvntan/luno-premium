import { getBinance } from "./binance.js";
import { getLunoXbtUsdcRate } from "./luno-usd.js";

export async function getLunoPremium() {
    const biPrice = await getBinance();
    const lunoPrice = await getLunoXbtUsdcRate();
  
    const lunoPremium = ((lunoPrice - biPrice) / lunoPrice) * 100;
    // console.log('6. Luno Premium:', lunoPremium.toFixed(4) + '%')
    return lunoPremium;
  }
