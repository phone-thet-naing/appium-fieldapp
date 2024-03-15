/**
 * Utility functions like drawing signatures, filling up NRC number and such are written here.
 */
const configModule = require('../../wdio.conf');
const { remote } = require('webdriverio');
const Scroll = require('./custom-scroll');
const HomeScreen = require('../screenobjects/home.screen');
const main = require('../screenobjects/main');
const InterviewProcess = require('../screenobjects/interview-process.screen')
const { landLineNumber, phoneNumber } = require('../data/data');
const interviewProcessScreen = require('../screenobjects/interview-process.screen');

class Utility {

	async testFunc() {
		console.log(await InterviewProcess.phoneNoPrefixSpinner.getAttribute('resource-id'))
	}

	// This function is no longer used
	async clearNoteIcon(toX, toY) {
		return null;
		/**
		 * `clearNoteIcon` moves the note icon that appears on every screen of the field app to the desired position.
		 * The desired position is the top left corner of the device screen (for now)
		 */
		const noteIcon = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/fab"]')
		console.log('noteIcon -> ', noteIcon)
		console.log('location -> ', await noteIcon.getLocation())
		const { x, y } = await noteIcon.getLocation();
		const [xStart, yStart] = [x + 10, y + 10];
		const DURATION = 2000;
		await this.customScroll(xStart, yStart, toX, toY, DURATION);
	}

	formatName(name) {
		return name
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ');
	}

	async goToHomeScreen() {
		while (!(await HomeScreen.appointmentIcon.isExisting())) {
			await driver.back();
		}
	}

	get signatureDoneBtn() {
		return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnDone"]`);
	}

	async tap(x, y) {
		await driver.touchAction({
			action: 'tap',
			x: x,
			y: y,
		});
	}

	async customScroll(xStart, yStart, xEnd, yEnd, duration) {
		await driver.touchPerform([
			{
				action: 'press',
				options: {
					x: xStart,
					y: yStart,
				},
			},
			{
				action: 'wait',
				options: {
					ms: duration,
				},
			},
			{
				action: 'moveTo',
				options: {
					x: xEnd,
					y: yEnd,
				},
			},
			{
				action: 'release',
			},
		]);
	}

	async drawSignatureOld() {
		await this.signatureDoneBtn.waitForExist({
			timeout: 3000,
			timeoutMsg: 'Confirm button in digital sign not found',
		});
		// Draw a square
		await this.customScroll(300, 900, 800, 900, 500);
		await this.signatureDoneBtn.click();
	}


	// This function draws random scratches (Can be improved further)
	async drawSignature() {
		await this.signatureDoneBtn.waitForExist({
			timeout: 3000,
			timeoutMsg: 'Confirm button in digital sign not found',
		});

		const [MAX, MIN] = [6, 5];
		const numberOfStrokes = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

		for (let i = 0; i < numberOfStrokes; i++) {
			let coordinates = [0, 1, 0, 1]; // 0 is x, 1 is y

			coordinates = coordinates.map((item) => {
				let [MAX, MIN] = [];

				if (item === 0) {
					[MAX, MIN] = [800, 300];
				} else {
					[MAX, MIN] = [1400, 900];
				}

				return Math.floor(Math.random() * (MAX - MIN)) + MIN;
			});

			console.log(coordinates);
			await this.customScroll(...coordinates, 500);
		}


		await this.signatureDoneBtn.click();

	}

	getRandomPos(min, max) {
		return Math.floor(Math.random() * (max - min)) * 100;
	}


	async fillNrc() {
		await InterviewProcess.etNrc.click()
		await InterviewProcess.spinnerState.waitForExist()

		const MAX_STATE = 9
		await InterviewProcess.spinnerState.click()
		const randomState = await driver.waitUntil(async () => {
			const dropdownItemList = await $$(InterviewProcess.tvDropDownTitleMultiple)

			if (dropdownItemList.length < MAX_STATE) return false

			const index = Math.floor(Math.random() * (dropdownItemList.length - 0)) + 1

			return dropdownItemList[index]
		})
		await randomState.click()


		const MAX_TOWNSHIP_CODE = 3
		await InterviewProcess.spinnerTownshipCode.click()
		const randomTownshipCode = await driver.waitUntil(async () => {
			const dropdownItemList = await $$(InterviewProcess.tvDropDownTitleMultiple)

			if (dropdownItemList.length < MAX_TOWNSHIP_CODE) return false

			const index = "9" ?? Math.floor(Math.random() * (dropdownItemList.length - 0)) + 1;

			return dropdownItemList[index]
		})
		await randomTownshipCode.click()
		// await $(`//*[@text="မရမ"]`).click()

		await InterviewProcess.spinnerNrcType.click()
		const MAX_TYPE = 2
		const randomNrcType = await driver.waitUntil(async () => {
			const dropdownItemList = await $$(InterviewProcess.tvDropDownTitleMultiple)

			if (dropdownItemList.length < MAX_TYPE) return false

			const index = Math.floor(Math.random() * (dropdownItemList.length - 0)) + 1

			return dropdownItemList[index]
		})
		await randomNrcType.click()
		// await $(`//*[@text="နိုင်"]`).click()

		const [MAX, MIN] = [999999, 100000]
		const randomNrcNo = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN
		await InterviewProcess.etNrcNo.setValue(randomNrcNo)
		await $(`//*[@text="OK"]`).click()

		// const spinnerStateElement = await InterviewProcess.spinnerState;
		// const labelElement = await $('//*[@text="Select NRC"]');
		// await labelElement.waitForExist();
		// const MAX_STATE = 9
		// await spinnerStateElement.click();
		// const randomState = await driver.waitUntil(async () => {
		// 	const dropdownItemList = await $$(InterviewProcess.tvDropDownTitleMultiple)

		// 	if (dropdownItemList.length < MAX_STATE) return false

		// 	const index = Math.floor(Math.random() * (dropdownItemList.length - 0)) + 1

		// 	return dropdownItemList[index]
		// })
		// await randomState.click()


		// const MAX_TOWNSHIP_CODE = 3
		// await InterviewProcess.spinnerTownshipCode.click()
		// const randomTownshipCode = await driver.waitUntil(async () => {
		// 	const dropdownItemList = await $$(InterviewProcess.tvDropDownTitleMultiple)

		// 	if (dropdownItemList.length < MAX_TOWNSHIP_CODE) return false

		// 	const index = Math.floor(Math.random() * (dropdownItemList.length - 0)) + 1

		// 	return dropdownItemList[index]
		// })
		// await randomTownshipCode.click()
		// // await $(`//*[@text="မရမ"]`).click()

		// await InterviewProcess.spinnerNrcType.click()
		// const MAX_TYPE = 2
		// const randomNrcType = await driver.waitUntil(async () => {
		// 	const dropdownItemList = await $$(InterviewProcess.tvDropDownTitleMultiple)

		// 	if (dropdownItemList.length < MAX_TYPE) return false

		// 	const index = Math.floor(Math.random() * (dropdownItemList.length - 0)) + 1

		// 	return dropdownItemList[index]
		// })
		// await randomNrcType.click()
		// // await $(`//*[@text="နိုင်"]`).click()

		// const [MAX, MIN] = [999999, 100000]
		// const randomNrcNo = this.getRandomIndex(MAX, MIN)
		// await InterviewProcess.etNrcNo.setValue(randomNrcNo)
		// if (autopass) await $(`//*[@text="OK"]`).click()
	}

	async scrollOptionIntoView(option, itemListId) {
		await $(`//*[@resource-id="${itemListId}"]`).waitForExist({
			timeout: 3000,
		});
		const itemList = await $$(`//*[@resource-id="${itemListId}"]`);
		console.log('Option size ---> ', itemList.length);

		const itemListSize = itemList.length;
		const firstItemLocation = await itemList[0].getLocation();
		const lastItemLocation = await itemList[itemListSize - 1].getLocation();
		const [xStart, yStart, xEnd, yEnd] = [
			lastItemLocation['x'],
			lastItemLocation['y'],
			firstItemLocation['x'],
			firstItemLocation['y'],
		];
		while (!(await $(`//*[@text="${option}"]`).isExisting())) {
			await this.customScroll(xStart, yStart, xEnd, yEnd, 3000);
		}
	}

	// Perform a forward scroll action to move through the scrollable layout element until a visible item that matches the UiObject is found.
	async scrollIntoView(className = 'android.widget.ScrollView', resourceId) {
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

	async scrollToBeginning(className = 'android.widget.ScrollView') {
		const query = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollToBeginning(1,5)`;
		await $(query);
	}

	async scrollToEndByClass(className = 'android.widget.ScrollView') {
		const findByClass = `android=new UiScrollable(new UiSelector().classNameMatches(\".*${className}.*\").scrollable(true)).scrollToEnd(1,5)`;
		await $(findByClass);
	}

	async scrollTextIntoViewByClass(
		className = 'android.widget.ScrollView',
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
		className = 'android.widget.ScrollView',
		resourceId
	) {
		const query = `android=new UiScrollable(new UiSelector().classNameMatches(".*${className}.*").scrollable(true)).scrollTo(new UiSelector().resourceId("${resourceId}"))`;

		await $(query);
	}

	async scrollTextIntoView(text) {
		const query = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")`;
	}

	async scrollElementWithResourceId(client, resourceId) {
		if (!(await $(`//*[@resource-id="${resourceId}"]`))) {
			try {
				await client.execute('mobile: scroll', {
					element: resourceId,
					toVisible: true,
				});
			} catch (error) {
				console.error('Error scrolling to the element:', error);
			}
		}
	}

	async flingToEnd(className, maxSwipe) {
		const query = `android=new UiScrollable(new UiSelector().classNameMatches(".*${className}.*").scrollable(true)).flingToEnd(${maxSwipe})`;
		await $(query);
	}

	getRandomIndex(max, min) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	async performDownload() {
		while (!(await HomeScreen.appointmentIcon.isExisting())) {
			await driver.back();
		}

		await HomeScreen.downloadBtn.click();
	}

	async upload() {
		await expect(await HomeScreen.uploadBtn).toExist();

		await HomeScreen.uploadBtn.click();
	}

	async download() {
		while (!(await HomeScreen.appointmentIcon.isExisting())) {
			await driver.back();
		}
		await HomeScreen.downloadBtn.click();
		await $(HomeScreen.downloadConfirmBtn).waitForExist({
			timeout: 3000,
		});
		await $(HomeScreen.downloadConfirmBtn).click();
		if (await $('//*[@text="No Internet Connection"]').isExisting()) {
			console.log('No Active Internet Connection! \nTest Terminated');
			return;
		}
		await $(HomeScreen.downloadWarning).waitForExist({
			timeout: 10000,
		});

		await $('//*[@text="Download Success"]').waitForExist({
			timeout: 900000,
		}); // wait for 15 minutes
		if (await HomeScreen.nativeDownloadSuccessBtn.isExisting()) {
			await HomeScreen.nativeDownloadSuccessBtn.click();
		} else if (await $(HomeScreen.successContinueBtn.isExisting())) {
			await $(HomeScreen.successContinueBtn).click();
		}
		// await $(HomeScreen.downloadWarning).waitForExist({ timeout: 10000 })
		await $('//*[@text="HOME"]').waitForExist({
			timeout: 900000,
		});
		await $('//*[@text="HOME"]').click();
		await $('//*[@text="Clients"]').waitForExist({
			timeout: 60000,
		});
	}

	async cleanInstall() {
		const allowBtn = await $(
			'//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]'
		);
		await allowBtn.waitForExist();
		await allowBtn.click();

		const toSettingBtn = await $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnGoToSetting"]'
		);
		if (await toSettingBtn.isDisplayed()) {
			await allowBtn.click();
		}

		// const permissionTab = await $(
		// 	`android=new UiSelector().resourceIdMatches(/*android:id/title*/).textContains(/*Permissions*/)`
		// );
		const permissionTab = await $('//*[@text="Permissions"]');
		await permissionTab.waitForExist();
		await permissionTab.click();

		const locationPermission = await $('//*[@text="Location"]');
		await locationPermission.waitForExist();
		await locationPermission.click();

		const alwaysAllowOption = await $(
			'//*[@resource-id="com.android.permissioncontroller:id/allow_always_radio_button"]'
		);
		await alwaysAllowOption.waitForExist();
		await alwaysAllowOption.click();

		const openBtn = await $(
			'//*[@resource-id="com.android.settings:id/button1"]'
		);
		while (await openBtn.isDisplayed()) {
			await driver.back();
		}

		await openBtn.click();

		const successBtn = await $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnSuccess"]'
		);
		if (await successBtn.isDisplayed()) {
			await successBtn.click();
		}
	}

	async choosePhoneNumber(phone = null) {
		const mobileRadioBtn = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/rbMb"]')
		const landLindRadioBtn = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/rblln"]')
		const phoneNumberInput = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etPhoneNo"]')
		// const phoneNumberInput = await InterviewProcess.phoneNoInputBox;
		console.log("phoneNumberInput: ", phoneNumberInput);
		const phoneNumberPrefix = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spnPhNoPrefix"]')

		const randomNumber = 2; // Making it choose mobile number all the time for ease

		if (randomNumber % 2 === 0) {
			await mobileRadioBtn.click();
			const selectedPhoneNo = phone ? phone : '751972062';
			console.table(selectedPhoneNo);
			await phoneNumberInput.setValue(selectedPhoneNo);
			// await (await InterviewProcess.phoneNoInputBox).setValue(selectedPhoneNo);
		} else {
			await landLindRadioBtn.click()
			await phoneNumberPrefix.click()
			const randomLandlinePrefix = await driver.waitUntil(async () => {
				const spinnerItemList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]')

				if (spinnerItemList.length < 5) return false

				return spinnerItemList[Math.floor(Math.random() * spinnerItemList.length)]
			})
			await randomLandlinePrefix.click()

			const selectedPhoneNo = landLineNumber[Math.floor(Math.random() * landLineNumber.length)]
			await phoneNumberInput.setValue(selectedPhoneNo)
			// await interviewProcessScreen.phoneNoInputBox.setValue(selectedPhoneNo)
		}
	}

	async generateRandomMoneyAmount(MAX, MIN) {
		let amount = parseInt(Math.floor(Math.random() * (MAX - MIN + 1)) + MIN)
		amount = parseInt(Math.floor(amount / 10) * 10)

		return amount
	}

	async clickNextBtn() {
		await this.scrollTextIntoViewByClass(undefined, "NEXT");
		await (await $('//*[@text="NEXT"]')).click();
	}
}

module.exports = new Utility();
