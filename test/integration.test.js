beforeEach(() => {
    jest.resetModules();
});

// Do the integration test in 1 line
test('Returns all if all is working correctly', async () => {
// first mock luno in MYR
  const lunoPremiumProject = require('../index.js').lunoPremiumProject;
  const MOCK_LUNO_MYR_PRICE = 100000;
  jest.mock('../lib/luno-myr.js', () => {

    const MOCK_LUNO_MYR_PRICE = 100000;
    return {
        getLunoXbtMyrRate() {
            return new Promise(res => res(MOCK_LUNO_MYR_PRICE))
        }
    };
  })

// second mock exchange rate
const MOCK_RATE = 4.5;
jest.mock('../lib/convert-rate.js', () => {
    return {
        getConvertRate() {
            return new Promise(res => res(MOCK_RATE))
        }
    };
})

// 3rd mock binance price
const MOCK_BIPRICE = 20000;
jest.mock('../lib/binance.js', () => {
    return {
        getBinance() {
            return new Promise(res => res(MOCK_BIPRICE))
        }
    }
})

// 4th: Set variable lunousd to calculate, set variable price diff calculation, set var for percentage
const LUNO_USD = MOCK_LUNO_MYR_PRICE / MOCK_RATE;
const PRICE_DIFF = LUNO_USD - MOCK_BIPRICE;
const PREMIUM = (PRICE_DIFF / LUNO_USD) * 100;

console.log = jest.fn(() => undefined) //replaces the real console.log implementation with a mock function that does nothing (return undefined).
// the purpose of this mock is to track if and how the console.log method is called during the test, without actually logging anything to the console.

// now await lunoPremiumProject
await lunoPremiumProject();

expect(console.log).toHaveBeenCalledWith('BTCMYR price on Luno:'.padEnd(30), 'MYR', MOCK_LUNO_MYR_PRICE);
expect(console.log).toHaveBeenCalledWith('USDMYR:'.padEnd(30), MOCK_RATE);
expect(console.log).toHaveBeenCalledWith('BTCUSD price on Luno:'.padEnd(30), 'USD', LUNO_USD);
expect(console.log).toHaveBeenCalledWith('BTCBUSD price on Binance:'.padEnd(30), 'USD', MOCK_BIPRICE);
expect(console.log).toHaveBeenCalledWith('Price Difference:'.padEnd(30), 'USD', PRICE_DIFF);
expect(console.log).toHaveBeenCalledWith('Luno Premium:'.padEnd(30), PREMIUM.toFixed(4) + '%')

//last part write each console.log //to verify that console.log method was called with the expected message as an argument
//expect(console.log).toHaveBeenCalledWith("vsadvdf".padEnd(30) + "MYR" + MOCK_LUNOPRICE)
//this padEnd(30) is to make print it out with same allignment

})