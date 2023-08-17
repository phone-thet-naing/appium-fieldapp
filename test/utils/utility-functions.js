/**
 * This helper function is to draw signature
 */

const Scroll = require('./custom-scroll')
const HomeScreen = require('../screen_objects/home.screen')

class Utility {

    get signatureDoneBtn() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnDone"]`)
    }

    async customScroll(xStart, yStart, xEnd, yEnd, duration) {
        await driver.touchPerform([
            { action: 'press', options: { x: xStart, y: yStart } },
            { action: 'wait', options: { ms: duration } },
            { action: 'moveTo', options: { x: xEnd, y: yEnd } },
            { action: 'release' }
        ])
    }

    async drawSignature() {
        await this.signatureDoneBtn.waitForExist({ timeout: 3000, timeoutMsg: 'Button not found' })
        // Draw a square
        await this.customScroll(300, 900, 800, 900, 500)
        await this.customScroll(800, 900, 800, 1400, 500)
        await this.customScroll(800, 1400, 300, 1400, 500)
        await this.customScroll(300, 1400, 300, 900, 500)
        await this.signatureDoneBtn.click()
    }

    async drawSignatureV2() {
        await this.signatureDoneBtn.waitForExist({ timeout: 3000, timeoutMsg: 'Button not found' })

        // TO DO    
    }

    getRandomPos(min, max) {
        return (Math.floor(Math.random() * (max - min)) * 100)
    }

    async scrollOptionIntoView(option, itemListId) {
        await $(`//*[@resource-id="${itemListId}"]`).waitForExist({ timeout: 3000 })
        const itemList = await $$(`//*[@resource-id="${itemListId}"]`)
        console.log('Option size ---> ', itemList.length)

        const itemListSize = itemList.length
        const firstItemLocation = await itemList[0].getLocation()
        const lastItemLocation = await itemList[itemListSize - 1].getLocation()
        const [xStart, yStart, xEnd, yEnd] = [lastItemLocation['x'], lastItemLocation['y'], firstItemLocation['x'], firstItemLocation['y']]
        while (!await $(`//*[@text="${option}"]`).isExisting()) {
            await Util.customScroll(xStart, yStart, xEnd, yEnd, 3000)
        }

    }

    async scrollToTextWithFirstScrollable(text) {
        const query = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`
        await $(query)
    }

    async scrollToText(text) {
        const findByText = `android=new UiScrollable(new UiSelector().classNameMatches(\".*android.widget.ScrollView.*\").scrollable(true)).scrollTextIntoView("${text}")`
        await $(findByText)
    }

    async scrollToEndByClass(className = 'android.widget.ScrollView') {
        const findByClass = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollToEnd(1,5)`
        await $(findByClass)
    }

    async scrollTextIntoViewByClass(className = 'android.widget.ScrollView', text) {
        const query = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollTextIntoView("${text}")`
        await $(query)
    }

    async scrollTextIntoViewByResourcdId(id, text) {
        const query = `android=new UiScrollable(new UiSelector().resourceIdMatches(\".*${id}.*\").scrollable(true)).scrollTextIntoView("${text}")`
        await $(query)
    }

    getRandomIndex(max, min) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    async download() {
        await $('//*[@text="Clients"]').waitForExist({ timeout: 3000 })
        await $(HomeScreen.downloadBtn).click()
        await $(HomeScreen.downloadConfirmBtn).waitForExist({ timeout: 3000 })
        await $(HomeScreen.downloadConfirmBtn).click()
        if (await $('//*[@text="No Internet Connection"]').isExisting()) {
            console.log("No Active Internet Connection! \nTest Terminated")
            return
        }
        await $(HomeScreen.downloadWarning).waitForExist({ timeout: 10000 })

        await $('//*[@text="CONTINUE"]').waitForExist({ timeout: 60000 })
        await $(HomeScreen.successContinueBtn).click()
        await $(HomeScreen.downloadWarning).waitForExist({ timeout: 10000 })
        await $('//*[@text="HOME"]').waitForExist({ timeout: 10000 })
        await $('//*[@text="HOME"]').click()
        await $('//*[@text="Clients"]').waitForExist({ timeout: 60000 })
    }
}

module.exports = new Utility()