// const { expect } = require('chai');
const wd = require('webdriverio');

const driver = wd.promiseChainRemote({
  host: 'localhost', // Update with Appium server host if different
  port: 4723 // Update with Appium server port if different
});

const signatureFieldResourceId = 'com.hanamicrofinance.FieldApp.uat:id/signature';

async function drawSignature() {
  const radius = 50;
  const centerX = 100;
  const centerY = 100;

  await driver.init({ automationName: 'UiAutomator2' }); // Adapt based on your automation strategy

  const signatureElement = await driver.elementByResourceId(signatureFieldResourceId);
//   await expect(signatureElement).to.exist; // Check if element exists

  // Starting point (top of the circle)
  let startX = centerX + radius;
  let startY = centerY - radius;

  // Sequence of taps to draw the circle
  const touchActions = [
    { action: 'press', x: startX, y: startY },
    { action: 'moveTo', x: centerX + radius, y: centerY + radius }, // Move to bottom right
    { action: 'moveTo', x: centerX - radius, y: centerY + radius }, // Move to bottom left
    { action: 'moveTo', x: centerX - radius, y: centerY - radius }, // Move to top left
    { action: 'moveTo', x: centerX + radius, y: centerY - radius }, // Move back to starting point (top)
    'release'
  ];

  await signatureElement.touchAction(touchActions);
}

describe('App Signature Test', async () => {
  before(async () => await driver.startSession());
  after(async () => await driver.quit());

  it('should draw a signature on the field', async () => {
    await drawSignature();
  });
});

(async () => { await require('mocha/lib/ Runnable.prototype').run.call({}, process.argv); })();
