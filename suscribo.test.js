const { Builder, By, until } = require('selenium-webdriver');

test('Test Suscribo Title', async () => {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:8081');
    await driver.wait(until.titleIs('Suscribo - Firma EC'), 1000);
    const title = await (await driver.findElement(By.css('h3'))).getText();
    expect(title).toBe('Firmar Documento');   
  } catch(err) {
    console.log('Err reading title', err)
    await driver.quit(); 
  }
});