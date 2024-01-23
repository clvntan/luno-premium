// Import the getLunoXbtMyrRate function from the luno-myr module for testing.
import { getLunoXbtMyrRate } from "../lib/luno-myr.js";

// Begin test code & mocking the fetch method
// Mock the global fetch function to simulate a failure scenario.
// This mock returns a response with a predefined status code (MOCK_PRICE_FAIL) to simulate a failure during the fetch.
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: MOCK_PRICE_FAIL,
    json: () => {},
  })
);

// End mocking the fetch method

// Test case for handling a failure scenario when fetching the Luno XBT to MYR rate.
test("Fail response", async () => {
  // Expect the result of getLunoXbtMyrRate to match the expected error message.
  expect(await getLunoXbtMyrRate()).toBe(
    "Failed to retrieve Luno price at this time, please try again."
  );
});

// End of test code