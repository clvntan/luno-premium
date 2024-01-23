import { getBinance } from "./binance.js";
import { getLunoXbtMyrRate } from "./luno-myr.js";
import { getConvertRate } from "./convert-rate.js";

export async function getLunoXbtUsdcRate(lunoMYR, convertionRate) {
  try {
    const lunoUsdPrice = lunoMYR / convertionRate;
    // console.log('4. BTCBUSD price on Luno:', lunoUsdPrice)
    if (!isNaN(lunoUsdPrice) === false) {
      return +lunoUsdPrice;
    } else {
      throw "Not a number value";
    }
  } catch (err) {
    if (err == "Not a number value") {
      return "Failed to calculate the Luno USD price, please try again";
    }
    throw err;
  }
}

export async function getPriceDiff(lunoPrice, biPrice) {
  try {
    const priceDiff = lunoPrice - biPrice;
    // console.log('5. Price Difference:', priceDiff);
    if (!isNaN(priceDiff) === false) {
      return priceDiff;
    } else {
      throw "Not a number value";
    }
  } catch (err) {
    if (err == "Not a number value") {
      return "Failed to calculate the price difference, please try again";
    }
    throw err;
  }
}

export async function getLunoPremium(lunoPrice, biPrice) {
  try {
    const lunoPremium =
      ((lunoPrice - biPrice) / lunoPrice) * 100;
    // console.log('6. Luno Premium:', lunoPremium.toFixed(4) + '%')
    if (!isNaN(lunoPremium) === false) {
      return lunoPremium;
    } else {
      throw "Not a number value";
    }
  } catch (err) {
    if (err == "Not a number value") {
      return "Failed to calculate the percentage, please try again";
    }
    throw err;
  }
}

// const lunoXbtMyrRate = await getLunoXbtMyrRate();
// const convertRate = await getConvertRate();
// const lunoXbtUsdcRate = await getLunoXbtUsdcRate();
// const binance = await getBinance();

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
