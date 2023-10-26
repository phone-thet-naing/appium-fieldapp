/**
 * This helper function is to draw signature
 */

const Scroll = require("./custom-scroll");
const HomeScreen = require("../screenobjects/home.screen");

class Utility {

  formatName(name) {
    return name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
  }

  async goToHomeScreen() {
    // while (!(await HomeScreen.appointmentIcon.isExisting())) {
    //   await driver.back();
    // }
    // while (!(await HomeScreen.clientMenu.isExisting())) {
    //   await driver.back();
    // }

    await driver.waitUntil(async () => {
      if (await HomeScreen.clientMenu.isExisting() !== true) {
        await driver.back()
        return false
      }
      return (await HomeScreen.clientMenu.isExisting() === true);
    }, {
      timeoutMsg: 'Client menu not found'
    })
  }

  get signatureDoneBtn() {
    return $(
      `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnDone"]`
    );
  }

  async tap(x, y) {
    await driver.touchAction({
      action: "tap",
      x: x,
      y: y,
    });
  }

  async customScroll(xStart, yStart, xEnd, yEnd, duration) {
    await driver.touchPerform([{
      action: "press",
      options: {
        x: xStart,
        y: yStart
      }
    },
    {
      action: "wait",
      options: {
        ms: duration
      }
    },
    {
      action: "moveTo",
      options: {
        x: xEnd,
        y: yEnd
      }
    },
    {
      action: "release"
    },
    ]);
  }

  async drawSignature() {
    await this.signatureDoneBtn.waitForExist({
      timeout: 3000,
      timeoutMsg: "Confirm button in digital sign not found",
    });
    // Draw a square
    await this.customScroll(300, 900, 800, 900, 500);
    // await this.customScroll(800, 900, 800, 1400, 500)
    // await this.customScroll(800, 1400, 300, 1400, 500)
    // await this.customScroll(300, 1400, 300, 900, 500)
    await this.signatureDoneBtn.click();
  }

  async drawSignatureV2() {
    await this.signatureDoneBtn.waitForExist({
      timeout: 3000,
      timeoutMsg: "Button not found",
    });

    // TO DO
  }

  getRandomPos(min, max) {
    return Math.floor(Math.random() * (max - min)) * 100;
  }

  async scrollOptionIntoView(option, itemListId) {
    await $(`//*[@resource-id="${itemListId}"]`).waitForExist({
      timeout: 3000,
    });
    const itemList = await $$(`//*[@resource-id="${itemListId}"]`);
    console.log("Option size ---> ", itemList.length);

    const itemListSize = itemList.length;
    const firstItemLocation = await itemList[0].getLocation();
    const lastItemLocation = await itemList[itemListSize - 1].getLocation();
    const [xStart, yStart, xEnd, yEnd] = [
      lastItemLocation["x"],
      lastItemLocation["y"],
      firstItemLocation["x"],
      firstItemLocation["y"],
    ];
    while (!(await $(`//*[@text="${option}"]`).isExisting())) {
      await this.customScroll(xStart, yStart, xEnd, yEnd, 3000);
    }
  }

  // Perform a forward scroll action to move through the scrollable layout element until a visible item that matches the UiObject is found.
  async scrollIntoView(className = "android.widget.ScrollView", resourceId) {
    console.log('resourceId => ', resourceId);
    const query = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollIntoView(new UiSelector().resourceIdMatches(\".*${resourceId}*."\).instance(0))`;
    await $(query);
  }

  async scrollToTextWithFirstScrollable(text) {
    const query = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`;
    await $(query);
  }

  async scrollToText(text) {
    const findByText = `android=new UiScrollable(new UiSelector().classNameMatches(\".*android.widget.ScrollView.*\").scrollable(true)).scrollTextIntoView("${text}")`;
    await $(findByText);
  }

  async scrollToBeginning(className = "android.widget.ScrollView") {
    const query = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollToBeginning(1,5)`;
    await $(query);
  }

  async scrollToEndByClass(className = "android.widget.ScrollView") {
    const findByClass = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollToEnd(1,5)`;
    await $(findByClass);
  }

  async scrollTextIntoViewByClass(
    className = "android.widget.ScrollView",
    text
  ) {
    const query = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollTextIntoView("${text}")`;
    await $(query);
  }

  async scrollTextIntoViewByResourcdId(id, text) {
    const query = `android=new UiScrollable(new UiSelector().resourceIdMatches(\".*${id}.*\").scrollable(true)).scrollTextIntoView("${text}")`;
    await $(query);
  }

  async scrollResourceIdIntoView(
    className = "android.widget.ScrollView",
    resourceId
  ) {
    const query = `android=new UiScrollable(new UiSelector().classNameMatches(".*${className}.*").scrollable(true)).scrollTo(new UiSelector().resourceId("${resourceId}"))`;

    await $(query);
  }

  async scrollElementWithResourceId(client, resourceId) {
    if (!(await $(`//*[@resource-id="${resourceId}"]`))) {
      try {
        await client.execute("mobile: scroll", {
          element: resourceId,
          toVisible: true,
        });
      } catch (error) {
        console.error("Error scrolling to the element:", error);
      }
    }
  }

  getRandomIndex(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  async performDownload() {
    while (!(await HomeScreen.appointmentIcon.isExisting())) {
      await driver.back();
    }

    await HomeScreen.downloadBtn.click();
  }

  async download() {
    while (!(await HomeScreen.appointmentIcon.isExisting())) {
      await driver.back();
    }
    await HomeScreen.downloadBtn.click();
    await $(HomeScreen.downloadConfirmBtn).waitForExist({
      timeout: 3000
    });
    await $(HomeScreen.downloadConfirmBtn).click();
    if (await $('//*[@text="No Internet Connection"]').isExisting()) {
      console.log("No Active Internet Connection! \nTest Terminated");
      return;
    }
    await $(HomeScreen.downloadWarning).waitForExist({
      timeout: 10000
    });

    await $('//*[@text="Download Success"]').waitForExist({
      timeout: 900000
    }); // wait for 15 minutes
    if (await HomeScreen.nativeDownloadSuccessBtn.isExisting()) {
      await HomeScreen.nativeDownloadSuccessBtn.click();
    } else if (await $(HomeScreen.successContinueBtn.isExisting())) {
      await $(HomeScreen.successContinueBtn).click();
    }
    // await $(HomeScreen.downloadWarning).waitForExist({ timeout: 10000 })
    await $('//*[@text="HOME"]').waitForExist({
      timeout: 900000
    });
    await $('//*[@text="HOME"]').click();
    await $('//*[@text="Clients"]').waitForExist({
      timeout: 60000
    });
  }
}

module.exports = new Utility();