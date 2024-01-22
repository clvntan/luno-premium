import { getConvertRate } from "../lib/convert-rate.js";

// Begin test code
// Begin mocking the fetch method 
const MOCK_RATE = 4.5

// we're modifying the fetch method to return these values
// To prevent actually making network request
// Think of it as a 'built-in fetch function'
global.fetch = jest.fn(() => Promise.resolve({
    status: 200,
    json: () => Promise.resolve({ result: MOCK_RATE })
  }));
// End mocking the fetch method
  
test('Fetches conversion rate successfully', async () => {
  //   const convertRate = await getConvertRate();
  //   expect (fetch).toHaveBeenCalledWith('https://api.apilayer.com/fixer/convert?to=MYR&from=USD&amount=1',
  //   {
  //     method: 'GET',
  //     redirect: 'follow',
  //     headers: expect.any(Headers),
  //   }
  // );
  expect(await getConvertRate()).toBe(MOCK_RATE);
  });
// End of test code