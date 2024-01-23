// Reset modules before each test to ensure a clean slate.
beforeEach(() => {
    jest.resetModules();
  });
  
  // Integration test for lunoPremiumProject function.
  test("Returns all if all is working correctly", async () => {
    const lunoPremiumProject = require("../index.js").lunoPremiumProject; // Import lunoPremiumProject function from the main module.
  
    // First, mock the Luno exchange rate in MYR.
    const MOCK_LUNO_MYR_PRICE = 100000;
    jest.mock("../lib/luno-myr.js", () => {
      return {
        getLunoXbtMyrRate() {
          // Mock the asynchronous response of getLunoXbtMyrRate.
          return new Promise((res) => res(MOCK_LUNO_MYR_PRICE));
        },
      };
    });
  
    // Second, mock the exchange rate from USD to MYR.
    const MOCK_RATE = 4.5;
    jest.mock("../lib/convert-rate.js", () => {
      return {
        getConvertRate() {
          // Mock the asynchronous response of getConvertRate.
          return new Promise((res) => res(MOCK_RATE));
        },
      };
    });
  
    // Third, mock the Binance price.
    const MOCK_BIPRICE = 20000;
    jest.mock("../lib/binance.js", () => {
      return {
        getBinance() {
          // Mock the asynchronous response of getBinance.
          return new Promise((res) => res(MOCK_BIPRICE));
        },
      };
    });
  
    // Fourth, set variables for calculations.
    const LUNO_USD = MOCK_LUNO_MYR_PRICE / MOCK_RATE;
    const PRICE_DIFF = LUNO_USD - MOCK_BIPRICE;
    const PREMIUM = (PRICE_DIFF / LUNO_USD) * 100;
  
    // Mock console.log to track calls without logging to the console.
    console.log = jest.fn(() => undefined);
  
    // Await the execution of lunoPremiumProject.
    await lunoPremiumProject();
  
    // Verify that console.log was called with the expected messages and arguments.
    expect(console.log).toHaveBeenCalledWith(
      "BTCMYR price on Luno:".padEnd(30),
      "MYR",
      MOCK_LUNO_MYR_PRICE
    );
    expect(console.log).toHaveBeenCalledWith(
      "USDMYR:".padEnd(30), 
      MOCK_RATE
    );
    expect(console.log).toHaveBeenCalledWith(
      "BTCUSD price on Luno:".padEnd(30),
      "USD",
      LUNO_USD
    );
    expect(console.log).toHaveBeenCalledWith(
      "BTCBUSD price on Binance:".padEnd(30),
      "USD",
      MOCK_BIPRICE
    );
    expect(console.log).toHaveBeenCalledWith(
      "Price Difference:".padEnd(30),
      "USD",
      PRICE_DIFF
    );
    expect(console.log).toHaveBeenCalledWith(
      "Luno Premium:".padEnd(30),
      PREMIUM.toFixed(4) + "%"
    );
  
    // Clean up the mock for console.log.
    console.log.mockRestore();
  });  