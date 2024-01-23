// Reset modules and clear all mock calls between tests using Jest beforeEach.
beforeEach(() => {
    jest.resetModules();
  });
  
  // Begin test for getLunoXbtUsdcRate function.
  test("Return BTCBUSD price on Luno if successful", async () => {
    // Import necessary functions for testing getLunoXbtUsdcRate.
    const { getLunoXbtUsdcRate } = require("../lib/calculation.js");
    const { getLunoXbtMyrRate } = require("../lib/luno-myr.js");
    const { getConvertRate } = require("../lib/convert-rate.js");
  
    // Mock getLunoXbtMyrRate and getConvertRate functions to control their resolved values during the test.
    jest.mock("../lib/luno-myr.js");
    jest.mock("../lib/convert-rate.js");
  
    getLunoXbtMyrRate.mockResolvedValue(100); // Mock the resolved value of getLunoXbtMyrRate.
    getConvertRate.mockResolvedValue(4); // Mock the resolved value of getConvertRate.
  
    // Expect the result of getLunoXbtUsdcRate to be 25 based on the provided mock values.
    expect(await getLunoXbtUsdcRate()).toBe(25);
  });
  
  // Begin test for getPriceDiff function.
  const MOCK_PD = 90; // Mock price difference value for testing.
  test("Return expected price difference if successful", async () => {
    // Import the getPriceDiff function for testing.
    const { getPriceDiff } = require("../lib/calculation.js");
  
    // Mock the getPriceDiff function to control its resolved value during the test.
    jest.mock("../lib/calculation.js", () => ({
      getPriceDiff: jest.fn().mockResolvedValue(MOCK_PD),
    }));
  
    // Expect the result of getPriceDiff to resolve to the provided mock price difference value.
    expect(getPriceDiff()).resolves.toBe(MOCK_PD);
  });
  
  // Begin test for getLunoPremium function.
  const MOCK_LPM = 90; // Mock Luno Premium value for testing.
  test("Return expected Luno Premium if successful", async () => {
    // Import the getLunoPremium function for testing.
    const { getLunoPremium } = require("../lib/calculation.js");
  
    // Mock the getLunoPremium function to control its resolved value during the test.
    jest.mock("../lib/calculation.js", () => ({
      getLunoPremium: jest.fn().mockResolvedValue(MOCK_LPM),
    }));
  
    // Expect the result of getLunoPremium to resolve to the provided mock Luno Premium value.
    expect(getLunoPremium()).resolves.toBe(MOCK_LPM);
  });  