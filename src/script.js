import {firefox} from 'playwright';

async function main() {
  try {
    const browser = await firefox.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.setViewportSize({ width: 128, height: 128 });

    await page.goto('https://aternos.org/go/');

    const ID = 'ferare269';
    const MDP = 'So_pic13';

    await page.fill('input.username', ID);
    await page.fill('input.password', MDP);

    await page.click('button.login-button');

    await page.setViewportSize({ width: 512, height: 512 });

    await page.waitForTimeout(60000);
    await browser.close();

  } catch (e) {
    console.error(e.message);
  }
}

main();