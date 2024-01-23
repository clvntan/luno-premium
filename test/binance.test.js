// Reset module mocks before each test to avoid affecting other tests in this file.
beforeEach(() => {
  jest.resetModules();
});

// Test case for handling a failure scenario when fetching Binance price.
test("Fail error", async () => {
  const getBinance = require("../lib/binance.js").getBinance; // Import the getBinance function from the binance module.

  // Mock the node-binance-api module to simulate a failure scenario.
  jest.mock("node-binance-api", () => {
    const BTCBUSD = { BTCBUSD: 9 }; // Define a mock response object with a placeholder value for BTC to BUSD price.
    // Create a mock class Binance with a prices method that returns a Promise with an error message.
    return class Binance {
      prices() {
        return new Promise((res) =>
          res("Binance price is not retrievable at this time, please try again")
        );
      }
    };
  });

  // Expect the result of the getBinance function to match the expected error message.
  expect(await getBinance()).toBe(
    "Binance price is not retrievable at this time, please try again"
  );
});
