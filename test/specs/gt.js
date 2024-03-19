const InterviewScreen = require('../screenobjects/interview.screen')
const MasterScreenClass = require('../screenobjects/master.screen')
const MasterScreen = new MasterScreenClass('uat')
const InterviewProcessHelper = require("../utils/helpers/interview_process.helper")
const Interview = require("../screenobjects/interview-process.screen");

async function drawCircle() {
  const radius = 50;
  const centerX = 100;
  const centerY = 100;

  let startX = centerX + radius;
  let startY = centerY;

  await driver.touchAction()
    .press({ x: startX, y: startY })
    .wait(500); // Optional wait at starting point

  for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 8) {
    const newX = centerX + radius * Math.cos(angle);
    const newY = centerY + radius * Math.sin(angle);
    await touchAction()
      .moveTo({ x: newX, y: newY })
      .wait(100); // Optional wait between steps
  }

  await driver.touchAction()
    .release()
    .perform();
}


async function drawCircle2() {
  const radius = 50;
  const centerX = 100;
  const centerY = 100;
  const signatureField = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/signature"]');

  let startX = centerX + radius;
  let startY = centerY;

  await signatureField.touchAction([
    'press',
    { action: 'moveTo', x: 200, y: 300 },
    'release'
  ])

  for (let angle = 0; angle < 2 * Math.PI; angle += Math.PI / 8) {
    const newX = centerX + radius * Math.cos(angle);
    const newY = centerY + radius * Math.sin(angle);
    await signatureField.touchAction([
      'press',
      { action: 'moveTo', x: newX, y: newY },
      'release'
    ])
  }


  // await signatureField.touchAction()
  //     .release()
  //     .perform();
}

async function drawCircle() {
  await driver.touchPerform([
    { action: 'press', options: {x: 300, y: 700} },
    { action: 'moveTo', options: {x: 400, y: 800} },
    { action: 'release'}
  ]);
}


describe("General test suite", () => {
  it("General test case", async () => {
    await drawCircle();
  })
})