import { getConvertRate } from "../lib/convert-rate.js";

const MOCK_RATE_FAIL = 5.5

global.fetch = jest.fn(() => Promise.resolve({
    status: MOCK_RATE_FAIL,
    json: () => {}
  }));

test('Fail response', async () => {
 
  expect(await getConvertRate()).toBe('Convertion rate is not retrivable at this time, please try again');
  });
