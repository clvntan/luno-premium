// Import the getConvertRate function from the convert-rate module for testing.
import { getConvertRate } from "../lib/convert-rate.js";

// Begin test code & mocking the fetch method
// Mocked conversion rate value for testing purposes.
const MOCK_RATE = 4.5;

// Modify the global fetch method to return a predefined response to prevent actual network requests.
// Think of it as a 'built-in fetch function'.
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ result: MOCK_RATE }),
  })
);

// End mocking the fetch method

// Test case for fetching the conversion rate successfully.
test("Fetches conversion rate successfully", async () => {

  // Expect the result of getConvertRate to match the predefined mock conversion rate.
  expect(await getConvertRate()).toBe(MOCK_RATE);
});

// End of test code
