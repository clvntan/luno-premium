export async function getLunoXbtMyrRate() {
    const lunoXbtMyrRateRes = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR');
  
    const lunoXbtMyrRate = await lunoXbtMyrRateRes.json();
    // console.log('1. BTCMYR price on Luno:', 'MYR', lunoXbtMyrRate.last_trade)
    // console.log(typeof(+lunoXbtMyrRate.last_trade))
    return +lunoXbtMyrRate.last_trade
  }
