// Import necessary functions for retrieving data and performing calculations from external modules.
import { getLunoCrypto } from "./lib/luno-crypto.js";
import { getBinanceCrypto } from "./lib/binance-crypto.js";
import { getCryptoData } from "./lib/user-prompt.js";
import { getConvertRate } from "./lib/convert-rate.js";
import { getLunoXbtUsdcRate, getPriceDiff, getLunoPremium } from "./lib/calculation.js";

// Main function that orchestrates the Luno Premium calculation project.
export async function lunoPremiumProject() {
  const userInput = await getCryptoData(); // Prompt the user to enter a cryptocurrency name and store the result.
  const lunoCrypto = await getLunoCrypto(userInput); // Fetch the rate from Luno based on the user input.
  const convertRate = await getConvertRate(); // Fetch the conversion rate from USD to MYR.
  const lunoXbtUsdcRate = await getLunoXbtUsdcRate(lunoCrypto, convertRate); // Calculate the BTC to USDC rate on Luno using the fetched rates.
  const biCrypto = await getBinanceCrypto(userInput); // Fetch the current price of the entered cryptocurrency in USD from Binance.
  const priceDiff = await getPriceDiff(lunoXbtUsdcRate, biCrypto); // Calculate the price difference between lunoXbtUsdcRate and biCrypto rates.
  const lunoPremium = await getLunoPremium(priceDiff, lunoXbtUsdcRate); // Calculate the Luno Premium percentage based on rates from biCrypto and lunoXbtUsdcRate.

  // Display the fetched and calculated information in the console.
  console.log("MYR price on Luno:".padEnd(30), "MYR", lunoCrypto);
  console.log("USDMYR:".padEnd(30), convertRate);
  console.log("USD price on Luno:".padEnd(30), "USD", lunoXbtUsdcRate);
  console.log("USD price on Binance:".padEnd(30), "USD", biCrypto);
  console.log("Price Difference:".padEnd(30), "USD", priceDiff);
  console.log("Luno Premium:".padEnd(30), lunoPremium.toFixed(4) + "%");
}

// Execute the lunoPremiumProject function repeatedly with a delay of 3000 milliseconds (3 seconds).
async function loop() {
    await lunoPremiumProject()
    await new Promise(resolve => setTimeout(resolve, 3000))
}
loop()
