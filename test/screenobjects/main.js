const defaultTimeout = 10000
const Util = require('../utils/utility-functions');
const HomeScreen = require('../screenobjects/home.screen')

class Main {
    get okBtn() {
        return $('//*[@text="OK"]');
    }

    get dropdownMenu() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvItem"]');
    }

    get noteIcon() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/fab"]')
    }

    get spinnerItems() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]');
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

    get downloadingStatus () {
        return $('//*[@text="Downloading"]')
    }

    get downloadCompleteStatus () {        
        return $('//*[@text="COMPLETED DOWNLOAD"]')
    }

    async gotoHomeScreen () {
        
    }

    async uploadData () {
        const uploadIcon = await driver.waitUntil(async () => {
			const icons = await $$('//*[@class="android.view.View"]')

			if (icons.length < 40) 
				return false 

			return icons[5]
		})

		try {
			await uploadIcon.click()
			await HomeScreen.uploadConfirm.click()
		} catch (error) {
			console.log(error)
			throw new Error("Error occured ", error)
		}
    }
}

module.exports = new Main()