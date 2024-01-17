import Binance from 'node-binance-api';

export async function getBinance() {
    const binance = new Binance()
    const ticker = await binance.prices()
      return +ticker.BTCBUSD
}
