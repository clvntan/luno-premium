import { getBinance } from './lib/binance.js';
import { getLunoXbtMyrRate } from './lib/luno-myr.js';
import { getConvertRate } from './lib/convert-rate.js';
import { getLunoXbtUsdcRate } from './lib/luno-usd.js';
import { getPriceDiff } from './lib/price-difference.js';
import { getLunoPremium } from './lib/luno-premium.js';


// BTCMYR price on Luno:
// --- HOW TO ---
// async function is like asking a question, and by creating 'getSomethingYouWant' <- thing you'd like to find out.
// After that, create variable - const somethingYouWantRes <- this is to get the response.
// Then = await fetch(url) to get the resource/data from somewhere.
// ---- BREAK ---
// Now we make a request by creating a variable - const somethingYouWant = await somethingYouWantRes.json().
// .json() - we make a request from the (url) to get data, (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)
// Using console.log(to get the requested data), .last_trade <- function from luno API
// ---- BREAK ---
// Add return somethingYouWant.last_trade
// Lastly, call the function - getSomethingYouWant();
// ----
// async function getLunoXbtMyrRate() {
//   const lunoXbtMyrRateRes = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR');

//   const lunoXbtMyrRate = await lunoXbtMyrRateRes.json();
//   // console.log('1. BTCMYR price on Luno:', 'MYR', lunoXbtMyrRate.last_trade)
//   // console.log(typeof(+lunoXbtMyrRate.last_trade))
//   return +lunoXbtMyrRate.last_trade
// }
// getLunoXbtMyrRate();

//BTCBUSD price on Luno:
// import { getLunoXbtMyrRate } from "./luno-myr.js";
// import { getConvertRate } from "./convert-rate.js";

// async function getLunoXbtUsdcRate() {
//   const var1 = await getLunoXbtMyrRate()
//   const var2 = await getConvertRate()
//   const var3 = var1 / var2

//   return +var3
//   }
// getLunoXbtUsdcRate();

// USDMYR:
// --- HOW TO ---
// Change response.text() to response.json() - Parse the response as JSON
// Acces the 'result' value by adding .result after the value
// async function getConvertRate() {
//   var myHeaders = new Headers();
//   myHeaders.append("apikey", "bzdD6lGM6xAQIMD70QO7wRZaghMYKW1L");

//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//     headers: myHeaders
// };
//   const exRate = await fetch("https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1", requestOptions) 
//   const convertRate = await exRate.json()
// // console.log('3. USDMYR:', convertRate.result)
//   return +convertRate.result
// }
// getConvertRate();

// BTCBUSD price on Binance:
// Switch const Binance = require('node-binance-api') to import Binance from 'API';
// import Binance from 'node-binance-api';
// async function getBinance() {
//   const binance = new Binance()
    // const ticker = await binance.prices()
    // return +ticker.BTCBUSD

// }
// getBinance();

// Price difference:
// async function getPriceDiff() {
//   const biPrice = await getBinance();
//   const lunoPrice = await getLunoXbtUsdcRate();

//   const priceDiff = lunoPrice - biPrice;
//   // console.log('5. Price Difference:', priceDiff);
//   return priceDiff;
// }
// getPriceDiff();

// Luno premium:
// async function getLunoPremium() {
//   const biPrice = await getBinance();
//   const lunoPrice = await getLunoXbtUsdcRate();

//   const lunoPremium = ((lunoPrice - biPrice) / lunoPrice) * 100;
//   // console.log('6. Luno Premium:', lunoPremium.toFixed(4) + '%')
//   return lunoPremium;
// }
// getLunoPremium();

// Altogether Functions
async function lunoPremiumProject() {
  const var1 = await getLunoXbtMyrRate()
  const var2 = await getConvertRate()
  const var3 = await getLunoXbtUsdcRate()
  const var4 = await getBinance()
  const var5 = await getPriceDiff()
  const var6 = await getLunoPremium()
  console.log('BTCMYR price on Luno:','      ', 'MYR', var1);
  console.log('USDMYR:', '                    ', var2);
  console.log('BTCUSD price on Luno:', '      ', 'USD', var3);
  console.log('BTCBUSD price on Binance:', '  ', 'USD', var4);
  console.log('Price Difference:', '          ', 'USD', var5);
  console.log('Luno Premium:', '              ', var6.toFixed(4) + '%')

  return +lunoPremiumProject
}
lunoPremiumProject();