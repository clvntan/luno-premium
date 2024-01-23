// This function asynchronously fetches the conversion rate from USD to MYR using the apilayer Fixer API.
export async function getConvertRate() {
  // Create a new Headers object and append the API key for authentication.
  var myHeaders = new Headers();
  myHeaders.append("apikey", "1ATu5XBw8952gIXug1wCO8zpyY3m2bxi");

  // Define the request options, including the HTTP method, redirect behavior, and headers.
  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  try {
    // Fetch the conversion rate information from USD to MYR using the apilayer Fixer API.
    const exRate = await fetch(
      "https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1",
      requestOptions
    );

    const convertRate = await exRate.json(); // Parse the JSON response to extract the relevant information.

    // Check if the API response status is successful (200 OK).
    if (exRate.status === 200) {
      return +convertRate.result; // Return the conversion rate result as a number.
    } else {
      throw "Fetch error"; // If the API response status is not successful, throw a custom error.
    }
  } catch (err) {
    // Handle errors that may occur during the fetch operation.
    if (err == "Fetch error") {
      // If the error is specifically a fetch error, return a user-friendly error message.
      return "Conversion rate is not retrievable at this time, please try again";
    }
    throw err; // If the error is not a fetch error, rethrow the error for further handling.
  }
}