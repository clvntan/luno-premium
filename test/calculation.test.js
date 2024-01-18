beforeEach(() => {
    jest.resetModules();// Reset modules and clear all mock calls betweem test
});

// Begin test for getLunoXbtUsdcRate
test('Return BTCBUSD price on Luno if successful', async () => {
    const { getLunoXbtUsdcRate } = require("../lib/calculation.js");
    const { getLunoXbtMyrRate } = require("../lib/luno-myr.js");
    const { getConvertRate } = require("../lib/convert-rate.js");

    jest.mock("../lib/luno-myr.js");
    jest.mock("../lib/convert-rate.js");

    getLunoXbtMyrRate.mockResolvedValue(100);
    getConvertRate.mockResolvedValue(4);

    expect(await getLunoXbtUsdcRate()).toBe(25);
});

// Begin test for getPriceDiff
const MOCK_PD = 90;
test("Return expected price different if successful", async () => {
    const { getPriceDiff } = require("../lib/calculation.js");
    
    jest.mock("../lib/calculation.js", () => ({
        getPriceDiff: jest.fn().mockResolvedValue(MOCK_PD),
    }));

    await expect(getPriceDiff()).resolves.toBe(MOCK_PD);
});

// Begin test for getLunoPremium
const MOCK_LPM = 90;
test("Return expected Luno Premium if successful", async () => {
    const { getLunoPremium } = require("../lib/calculation.js");
    
    jest.mock("../lib/calculation.js", () => ({
        getLunoPremium: jest.fn().mockResolvedValue(MOCK_LPM),
    }));

    await expect(getLunoPremium()).resolves.toBe(MOCK_LPM);
});