// This function asynchronously fetches the current BTC to MYR exchange rate from the Luno API.
export async function getLunoXbtMyrRate() {
  try {
    // Fetch the latest ticker information for the XBTMYR pair from the Luno API.
    const lunoXbtMyrRateRes = await fetch(
      "https://api.luno.com/api/1/ticker?pair=XBTMYR"
    );

    // Check if the API response status is successful (200 OK).
    if (lunoXbtMyrRateRes.status === 200) {
      const lunoXbtMyrRate = await lunoXbtMyrRateRes.json(); // Parse the JSON response to extract the relevant information "pair=XBTMYR".
      return +lunoXbtMyrRate.last_trade; // Return the last_trade value as a number, representing the current BTC to MYR exchange rate.
    } else {
      throw "Fetch error"; // If the API response status is not successful, throw a custom error.
    }
  } catch (err) {
    // Handle errors that may occur during the fetch operation.
    if (err === "Fetch error") {
      return "Failed to retrieve Luno price at this time, please try again."; // If the error is specifically a fetch error, return a user-friendly error message.
    }
    throw err; // If the error is not a fetch error, rethrow the error for further handling.
  }
}