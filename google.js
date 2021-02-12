const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('zircon tech', Key.RETURN);
    await driver.wait(until.titleIs('zircon tech - Buscar con Google'), 1000);
  } catch(err) {
    console.log("exited with err", err)
    await driver.quit();
  }
})();
