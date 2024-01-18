import { getConvertRate } from "../lib/convert-rate.js";

// Begin test code
// Begin mocking the fetch method 
const MOCK_RATE = 4.5
const MOCK_JSON_RATE_RES = { result: MOCK_RATE }

// we're modifying the fetch method to return these values
// To prevent actually making network request
// Think of it as a 'built-in fetch function'
global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_JSON_RATE_RES)
  }));
// End mocking the fetch method
  
test('Fetches conversion rate successfully', async () => {
    const convertRate = await getConvertRate();
    expect (fetch).toHaveBeenCalledWith('https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1',
    {
      method: 'GET',
      redirect: 'follow',
      headers: expect.any(Headers),
    }
  );
  expect(convertRate).toBe(MOCK_RATE);
  });
// End of test code