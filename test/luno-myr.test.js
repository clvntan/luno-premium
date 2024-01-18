import { getLunoXbtMyrRate } from '../lib/luno-myr.js'

// Begin test code
// Begin mocking the fetch method 
const MOCK_PRICE = 99
const MOCK_JSON_RESP = { last_trade: MOCK_PRICE }

// we're modifying the fetch method to return these values
// To prevent actually making network request
// Think of it as a 'built-in fetch function'
global.fetch = jest.fn(() => Promise.resolve({
  status: 200,
  json: () => Promise.resolve(MOCK_JSON_RESP)
}));
// End mocking the fetch method

test('Returns the BTC Price if successful', async () => {
  expect(await getLunoXbtMyrRate()).toBe(MOCK_PRICE);
});
// End of test code