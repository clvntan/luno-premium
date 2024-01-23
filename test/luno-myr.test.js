// Import the getLunoXbtMyrRate function from the luno-myr module for testing.
import { getLunoXbtMyrRate } from "../lib/luno-myr.js";

// Begin test code & mocking the fetch method
// Mocked BTC price value for testing purposes.
const MOCK_PRICE = 99;
const MOCK_JSON_RESP = { last_trade: MOCK_PRICE };

// Modify the global fetch method to return a predefined response to prevent actual network requests.
// Think of it as a 'built-in fetch function'.
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve(MOCK_JSON_RESP),
  })
);
// End mocking the fetch method

// Test case for successfully fetching the Luno XBT to MYR rate.
test("Returns the BTC Price if successful", async () => {
  // Expect the result of getLunoXbtMyrRate to match the predefined mock BTC price.
  expect(await getLunoXbtMyrRate()).toBe(MOCK_PRICE);
});

// End of test code