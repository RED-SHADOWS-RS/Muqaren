const playwright = require("playwright");

const agodaSearch = async (req, res) => {
  const { destination, checkIn, checkOut, rooms, adults, children } = req.query;

  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.agoda.com/ar-ae/", { timeout: 60000 });
  await page.waitForTimeout(2000);

  return;
};

const agodaResults = async (req, res) => {};

module.exports = {
  agodaSearch,
  agodaResults,
};
