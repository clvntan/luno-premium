// Function to fetch Luno cryptocurrency price in MYR based on the provided cryptocurrency symbol.
export async function getLunoCrypto(lunoCoins) {
    // If the provided symbol is "BTC", convert it to "XBT" as per Luno's API conventions.
    if (lunoCoins === "BTC") {
      lunoCoins = "XBT";
    }
  
    // Construct the API endpoint URL for fetching the Luno cryptocurrency price.
    const lunoXbtMyrRateRes = await fetch(
      "https://api.luno.com/api/1/ticker?pair=" + lunoCoins + "MYR"
    );
  
    const lunoPrice = await lunoXbtMyrRateRes.json(); // Parse the JSON response to extract the relevant information.
    return +lunoPrice.last_trade; // Return the last trade price as a numeric value.
  }
  