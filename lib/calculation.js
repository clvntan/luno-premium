import { getBinance } from "./binance.js";
import { getLunoXbtMyrRate } from "./luno-myr.js";
import { getConvertRate } from "./convert-rate.js";

export async function getLunoXbtUsdcRate() {
    try {
        const lunoMYR = await getLunoXbtMyrRate();
        const convertionRate = await getConvertRate();
        const lunoUsdPrice = lunoMYR / convertionRate;
        // console.log('4. BTCBUSD price on Luno:', lunoPrice)
        if (!isNaN(lunoUsdPrice)) {
            return +lunoUsdPrice;
    } else {
        throw "Not a number value"
    }
    } catch (err) {
        if (err == "Not a number value") {
            return "Failed to calculate the Luno USD price, please try again"
        }
    throw err;
  }
};

export async function getPriceDiff() {
    try {
        const biPrice = await getBinance();
        const lunoPrice = await getLunoXbtUsdcRate();
        const priceDiff = lunoPrice - biPrice;
        // console.log('5. Price Difference:', priceDiff);
        if (!isNaN(priceDiff)) {
            return priceDiff;
    } else {
        throw"Not a number value"
    }
    } catch (err) {
        if (err == "Not a number value") {
            return "Failed to calculate the price difference, please try again"
        }
    throw err;
  }
};

export async function getLunoPremium() {
    try {
        const biPrice = await getBinance();
        const lunoPrice = await getLunoXbtUsdcRate();
        const lunoPremium = ((lunoPrice - biPrice) / lunoPrice) * 100;
        // console.log('6. Luno Premium:', lunoPremium.toFixed(4) + '%')
        if (!isNaN(lunoPremium)) {
            return lunoPremium;
    } else {
        throw"Not a number value"
    }
    } catch (err) {
        if (err == "Not a number value") {
            return "Failed to calculate the percentage, please try again"
        }
    throw err;
  }
};
    


// import { getBinance } from "./binance.js";
// import { getLunoXbtMyrRate } from "./luno-myr.js";
// import { getConvertRate } from "./convert-rate.js";

// export async function getLunoXbtUsdcRate() {
//     const lunoMYR = await getLunoXbtMyrRate();
//     const convertionRate = await getConvertRate();
//     const lunoUsdPrice = lunoMYR / convertionRate;
//     // console.log('4. BTCBUSD price on Luno:', lunoPrice)
//     return +lunoUsdPrice;
// };

// export async function getPriceDiff() {
//     const biPrice = await getBinance();
//     const lunoPrice = await getLunoXbtUsdcRate();
      
//     const priceDiff = lunoPrice - biPrice;
//     // console.log('5. Price Difference:', priceDiff);
//     return priceDiff;
// };

// export async function getLunoPremium() {
//     const biPrice = await getBinance();
//     const lunoPrice = await getLunoXbtUsdcRate();
      
//     const lunoPremium = ((lunoPrice - biPrice) / lunoPrice) * 100;
//     // console.log('6. Luno Premium:', lunoPremium.toFixed(4) + '%')
//     return lunoPremium;
// };
    