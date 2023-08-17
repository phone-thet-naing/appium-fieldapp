class Utils {
    async scroll(swipe) {
        const { startXRatio, startYRatio, endXRatio, endYRatio, durationMiliSec } = [50, 75, 50, 25, 2000]
        // startYRatio = 75
        // endXRatio = 50
        // endYRatio = 25
        // durationMiliSec = 2000
        const d = await driver.getWindowRect();
        const height = d.height;
        const width = d.width;

        const swipeStartWidth = (width * startXRatio) / 100;
        const swipeStartHeight = (height * startYRatio) / 100;
        const swipeEndWidth = (width * endXRatio) / 100;
        const swipeEndHeight = (height * endYRatio) / 100;

        for (let i = 0; i < swipe; i++) {
            await driver.touchPerform([
                { action: 'press', options: { x: swipeStartWidth, y: swipeStartHeight } },
                { action: 'wait', options: { ms: durationMiliSec } },
                { action: 'moveTo', options: { x: swipeEndWidth, y: swipeEndHeight } },
                { action: 'release' }
            ]);
        }
    }

    async customScroll(xStart, yStart, xEnd, yEnd, duration) {
        await driver.touchPerform([
            { action: 'press', options: { x: xStart, y: yStart } },
            { action: 'wait', options: { ms: duration } },
            { action: 'moveTo', options: { x: xEnd, y: yEnd } },
            { action: 'release' }
        ])
    }

    async scrollToEnd() {
        return $('andorid=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
    }

    async scrollTextIntoView(text) {
        return $('andorid=new UiScrollable(new UiSelector().scrollable(true)).scrollTextView(`**&{text}**`)')
    }

    async scrollOptionIntoView(option, itemListId) {
        const itemList = await $$(`//*[@resource-id="${itemListId}"]`)

        const itemListSize = itemList.length
        const firstItemLocation = await itemList[0].getLocation()
        const lastItemLocation = await itemList[itemListSize - 1].getLocation()
        const [xStart, yStart, xEnd, yEnd] = [lastItemLocation['x'], lastItemLocation['y'], firstItemLocation['x'], firstItemLocation['y']]
        while (!await $(`//*[@text="${option}"]`).isExisting()) {
            await Util.customScroll(xStart, yStart, xEnd, yEnd, 3000)
        }

    }
}

module.exports = new Utils() 