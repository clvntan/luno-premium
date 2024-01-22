import Binance from 'node-binance-api';

export async function getBinance() {
    try {
      const binance = new Binance();
      const ticker = await binance.prices();
      if (!isNaN(ticker.BTCBUSD)) { //if the price of BTC in BUSD is not NaN will return the value
          return +ticker.BTCBUSD;
    } else {
          throw "Fetch error"
    } 
  } catch (err) {
      if (err == "Fetch error") {
          return "Binance price is not retrivable at this time, please try again"
      }
      throw err;
  }
}

// getBinance();



// export async function getBinance() {
//   const binance = new Binance()
//   const ticker = await binance.prices()
//     return +ticker.BTCBUSD
// };
