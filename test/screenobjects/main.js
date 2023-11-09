const defaultTimeout = 10000
const Util = require('../utils/utility-functions');

class Main {

    get noteIcon() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/fab"]')
    }

    async asyncGetText(selector) {
        await selector.waitForExist({ timeout: defaultTimeout });
        return await selector.getText();
    }

    async asyncClick(selector) {
        await selector.waitForExist({ timeout: defaultTimeout });
        await selector.click()
    }

    async asyncSet(selector, value) {
        await selector.waitForExist({ timeout: defaultTimeout })
        await selector.setValue(value)
    }

    async asyncAdd(selector, value) {
        await selector.waitForExist({ timeout: defaultTimeout })
        await selector.setValue(value)
    }

    async setSingleElement(selector) {
        await selector.waitForExist({ timeout: defaultTimeout })
        return await selector
    }

    async setMultipleElements(selector) {
        await $(selector).waitForExist({ timeout: defaultTimeout });
        return await $$(selector);
    }

    async goToElement(className, selector, value = null, method = null) {
        if (!await selector.isExisting()) {
            await Util.scrollElementWithResourceId(selector);
        }
        switch (method) {
            case 'setValue':
                await selector.setValue(value)
                break;

            default:
                break;
        }
    }
}

module.exports = new Main()