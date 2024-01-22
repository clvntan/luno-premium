import { getLunoXbtMyrRate } from '../lib/luno-myr.js'

// Begin test code
// Begin mocking the fetch method 
const MOCK_PRICE_FAIL = 88


global.fetch = jest.fn(() => Promise.resolve({
  status: MOCK_PRICE_FAIL,
  json: () => {}
}));
// End mocking the fetch method

test('Fail response', async () => {
  expect(await getLunoXbtMyrRate()).toBe('Failed to retrieve Luno price at this time, please try again.');
});
// End of test code