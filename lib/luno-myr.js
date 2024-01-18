export async function getLunoXbtMyrRate() {
    const lunoXbtMyrRateRes = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR');
    // handle situation where fetch fails e.g. when status code is anything other than 2xx
    if (lunoXbtMyrRateRes.status !== 200) {
      console.error('Failed to retrieve price')
    }

    const lunoXbtMyrRate = await lunoXbtMyrRateRes.json();
    // console.log('1. BTCMYR price on Luno:', 'MYR', lunoXbtMyrRate.last_trade)
    // console.log(typeof(+lunoXbtMyrRate.last_trade))
    return +lunoXbtMyrRate.last_trade;  // should return the expected value
  }
