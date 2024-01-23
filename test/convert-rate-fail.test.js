// Import the getConvertRate function from the convert-rate module for testing.
import { getConvertRate } from "../lib/convert-rate.js";

// Define a mock status code for the fetch call during testing.
const MOCK_RATE_FAIL = 5.5;

// Mock the global fetch function to simulate a failure scenario.
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: MOCK_RATE_FAIL,
    json: () => {},
  })
);

// Test case for handling a failure scenario when fetching the conversion rate.
test("Fail response", async () => {
  // Expect the result of getConvertRate to match the expected error message.
  expect(await getConvertRate()).toBe(
    "Conversion rate is not retrievable at this time, please try again"
  );
});