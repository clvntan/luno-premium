export async function getLunoXbtMyrRate() {
  try {
    const lunoXbtMyrRateRes = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR'); // gets the price pair for BTC in MYR
    if (lunoXbtMyrRateRes.status === 200) {
        const lunoXbtMyrRate = await lunoXbtMyrRateRes.json();
        return +lunoXbtMyrRate.last_trade; // should return the expected value
    } else {
        throw "Fetch error";
    }
  } catch (err) {
    if(err === "Fetch error") {
        return "Failed to retrieve Luno price at this time, please try again."
    }
    throw err;
}
}

// getLunoXbtMyrRate();

  // export async function getLunoXbtMyrRate() {
  //   const lunoXbtMyrRateRes = await fetch('https://api.luno.com/api/1/ticker?pair=XBTMYR'); // gets the price pair for BTC in MYR
  //   // handle situation where fetch fails e.g. when status code is anything other than 2xx
  //   if (lunoXbtMyrRateRes.status !== 200) {
  //     console.error('Failed to retrieve price')
  //   }

  //   const lunoXbtMyrRate = await lunoXbtMyrRateRes.json();
  //   // console.log('1. BTCMYR price on Luno:', 'MYR', lunoXbtMyrRate.last_trade)
  //   return +lunoXbtMyrRate.last_trade;  // should return the expected value
  // }
