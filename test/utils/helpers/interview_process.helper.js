const HomeScreen = require("../../screenobjects/home.screen")
const InterviewProcess = require("../../screenobjects/interview-process.screen")
const Util = require("../utility-functions")
const Main = require("../../screenobjects/main")
const interviewProcessScreen = require("../../screenobjects/interview-process.screen")

function generateRandomName() {
	const words = [
		"ကျော်",
		"ခိုင်",
		"ဝင်း",
		"နိုင်",
		"တိုး",
		"အောင်",
		"မြင်",
		"မြင့်",
		"ဇော်",
		"စည်",
	]

	const [max, min] = [3, 2]
	const wordsLength = words.length
	const nameLength = Math.floor(Math.random() * (max - min + 1)) + min
	let name = ""
	for (let i = 0; i < nameLength; i++) {
		name += words[Math.floor(Math.random() * (wordsLength - 1 + 0 + 1)) + 0]
	}
	return name
}

class InterviewProcessHelper {
	async navigateToInterview(desiredGroupLeader) {
		// await HomeScreen.toInterview.click()
		// await $(InterviewProcess.interviewTypeTabs).waitForExist({ timeout: 5000 })
		await InterviewProcess.downArrow.waitForExist()
		// click drop-down icon under group loans
		await InterviewProcess.downArrow.click()

		// const groupLeaderNameList = await $$(InterviewProcess.groupLeaderName);

		const firstGroup = await driver.waitUntil(async () => {
			const groupLeaderNameList = await $$(InterviewProcess.groupLeaderName)

			if (groupLeaderNameList.length < 0) return false

			return groupLeaderNameList[0]
		})

		await firstGroup.click()

		// const groupLeaderNameList = await Main.setMultipleElements(
		// 	InterviewProcess.groupLeaderName
		// );
		// console.log(groupLeaderNameList, groupLeaderNameList.length);
		// await groupLeaderNameList[groupLeaderNameList.length - 1].click();

		// const leaderNameList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvLeaderName"]')

		// for (const leaderName of leaderNameList) {
		//     const trimmedName = (await leaderName.getText()).split('(')[0].trim()
		//     if (desiredGroupLeader == trimmedName) {
		//         await leaderName.click()
		//         break
		//     }
		// }

		// choose the interview
		// await Util.scrollTextIntoViewByResourcdId('com.hanamicrofinance.FieldApp.uat:id/viewPager', data)
		// await $(`//*[@text="${data}"]`).click()
	}

	async chooseIndividualIterview(data) {
		await HomeScreen.toInterview.click()
		await $(InterviewProcess.interviewTypeTabs).waitForExist({
			timeout: 5000,
		})
		const items = await $$(InterviewProcess.interviewTypeTabs)
		await items[2].click()
		await Util.scrollTextIntoViewByResourcdId(
			"com.hanamicrofinance.FieldApp.uat:id/viewPager",
			data
		)
		await $(`//*[@text="${data}"]`).click()
	}

	async clientInfoPage(group_data) {
		// Fill client name
		if ((await $(InterviewProcess.clientNameEtBox).getText()) == "") {
			await $(InterviewProcess.clientNameEtBox).setValue("Ba")
		}
		if ((await InterviewProcess.clientNameMMEtBox.getText()) == "") {
			await InterviewProcess.clientNameMMEtBox.setValue(generateRandomName())
		}

		// Phone Number
		await InterviewProcess.phoneNoInputBox.setValue("969000000")
		// if (await InterviewProcess.phoneNoInputBox.getText() == "") {
		// }

		// fill nrc
		if ((await InterviewProcess.etNrc.getText()) === "") {
			await this.fillNrc()
		}
		// fill dob
		if ((await $(InterviewProcess.dobEtBox).getText()) == "") {
			await $(InterviewProcess.dobEtBox).click()
			await InterviewProcess.okBtn.click()
		}
		if ((await $(InterviewProcess.fatherNameEtBox).getText()) == "") {
			await $(InterviewProcess.fatherNameEtBox).setValue("Ba")
		}

		await Util.scrollToEndByClass()

		if ((await InterviewProcess.fatherNameMMEtBox.getText()) == "") {
			await InterviewProcess.fatherNameMMEtBox.setValue(generateRandomName())
		}

		const houseNo = "no " + Math.floor(Math.random() * 30)
		const streetNo = "no " + Math.floor(Math.random() * 50)
		if ((await InterviewProcess.houseNoInputBox.getText()) == "") {
			await InterviewProcess.houseNoInputBox.setValue(houseNo)
		}
		if ((await InterviewProcess.streetNoInputBox.getText()) == "") {
			await InterviewProcess.streetNoInputBox.setValue(streetNo)
		}
		await InterviewProcess.nextBtn.click()
	}

	async personalDetailPage() {
		await $('//*[@text="PERSONAL DETAIL"]').waitForExist({
			timeout: 6000,
		})
		// // ပညာအရည်အချင်း
		// await InterviewProcess.clickDropDown(1)
		// await InterviewProcess.chooseOption(5, 1)
		// // အိမ်ထောင်ရှိမရှိ
		// await InterviewProcess.clickDropDown(2)
		// await InterviewProcess.chooseOption(4, 1)
		// // ကိုးကွယ်သည့်ဘာသာ
		// await InterviewProcess.clickDropDown(3)
		// await InterviewProcess.chooseOption(5, 1)
		// // ဘဏ်စာအုပ်ရှိမရှိ
		// await InterviewProcess.clickRadioBtn(2, 1)
		// // ဘဏ်အမည်
		// await InterviewProcess.clickDropDown2(4)
		// await InterviewProcess.chooseOption(7, 1)
		// click Next
		await InterviewProcess.nextBtn.click()
	}

	async householdDetailPage() {
		// အတူနေမိသားစုဦးရေ
		// await InterviewProcess.nextBtn.click()
		await Main.asyncClick(InterviewProcess.nextBtn)
	}

	async earningFamilyMemberPage() {
		// ဝင်ငွေရှာနိုင်သည့် မိသားစုဝင်အရေအတွက်
		const value = Math.floor(Math.random() * 3 + 1)
		if ((await InterviewProcess.inputBox.getText()) == "") {
			await InterviewProcess.inputBox.setValue(value)
		}
		// await InterviewProcess.nextBtn.click();
		await Main.asyncClick(InterviewProcess.nextBtn)
	}

	async householdVerificationPage() {
		// အိမ်တန်ဖိုး
		await expect(await $('//*[@text="အိမ်တည်နေရာ"]')).toExist()

		const houseValue = Math.floor(Math.random() * 90 + 10) * 100000
		if ((await InterviewProcess.inputBox.getText()) == "") {
			await InterviewProcess.inputBox.setValue(houseValue)
		}

		await Util.scrollToText("အိမ်အကျယ်အဝန်း - အလျားပေ *")
		// set house length and breadth
		const inputBoxList = await $$(InterviewProcess.editText)
		for (const inputBox of inputBoxList) {
			if ((await inputBox.getText()) == "") {
				await inputBox.setValue(Math.floor(Math.random() * 35 + 15))
			}
		}
		while (!(await InterviewProcess.nextBtn.isDisplayed())) {
			await Util.scrollTextIntoViewByClass(undefined, "NEXT")
		}

		await Main.asyncClick(InterviewProcess.nextBtn)
	}

	async currentLoanAndCreditHistoryPage() {
		await expect(
			await $(
				'//*[@text="အခြား microfinance အဖွဲ့အစည်းများတွင် ပြန်ဆပ်ရန်ကျန်ရှိသော ချေးငွေ အရေအတွက် *"]'
			)
		).toExist()
		if ((await InterviewProcess.inputBox.getText()) == "") {
			await InterviewProcess.inputBox.setValue(Math.floor(Math.random() * 3 + 1))
		}
		await InterviewProcess.nextBtn.click()
	}

	async businessProfilePage(interviewType) {
		if (
			!(await $('//*[@text="လုပ်ငန်း အမျိုးအစား *"]').isDisplayed()) ||
			!(await $('//*[@text="လက်ရှိ လုပ်ငန်းအုပ်စု *"]').isDisplayed())
		) {
			await Util.scrollToBeginning()
		}

		// Set Business Group and Business Type
		const businessGroupDropdown = await $(InterviewProcess.spinner)
		await businessGroupDropdown.click()
		await $(InterviewProcess.tvItem).waitForExist({
			timeout: 3000,
		})
		const businessTypeItems = await $$(InterviewProcess.tvItem)
		await businessTypeItems[Math.floor(Math.random() * 4)].click()
		const inputs = await $$(InterviewProcess.editText)

		// Set input for each text box
		if (interviewType == "individual") {
			for (let i = 0; i < inputs.length; i++) {
				switch (i) {
					case 0:
						// Business Detail
						if ((await inputs[i].getText()) == "") {
							await inputs[i].setValue("Business Detail")
						}
						break
					case 1:
						// Investment amount
						if ((await inputs[i].getText()) == "") {
							await inputs[i].setValue(1000000)
						}
						break
					case 2:
						// Business name
						if ((await inputs[i].getText()) == "") {
							await inputs[i].setValue("Business Name")
						}
						break
					default:
						break
				}
			}
		} else if (interviewType == "group") {
			for (let i = 0; i < inputs.length; i++) {
				switch (i) {
					case 0:
						// Business Detail
						if ((await inputs[i].getText()) == "") {
							await inputs[i].setValue("Business Detail")
						}
						break
					case 1:
						// Investment amount
						if ((await inputs[i].getText()) == "") {
							await inputs[i].setValue(1000000)
						}
						break
					case 2:
						// Business name
						if ((await inputs[i].getText()) == "") {
							await inputs[i].setValue("Business Name")
						}
						break
					default:
						break
				}
			}
		}

		await Util.scrollTextIntoViewByClass(
			"android.widget.ScrollView",
			"အလုပ်သမား ဦးရေ *"
		)

		// Set အလုပ်သမားဦးရေ with a random number
		// const numberofworkersInputbox = await InterviewProcess.inputBox;

		const numberOfWorkersInputbox = await driver.waitUntil(async () => {
			const inputboxList = await $$(InterviewProcess.editText)

			if (inputboxList.length < 0) return false

			if (inputboxList.length > 1) {
				return inputboxList[inputboxList.length - 1]
			} else {
				return inputboxList[0]
			}
		})

		await numberOfWorkersInputbox.click()
		await driver.keys("1")
		await driver.back()
		// // if ((await numberofworkersInputbox.getText()) == "") {
		// const numberofworkers = Math.floor(Math.random() * 10);
		// await numberofworkersInputbox.setValue(numberofworkers);
		// }

		// const numberOfWorkersInputBox = await driver.waitUntil(async () => {
		//   const inputbox = await $$(InterviewProcess.editText);

		//   if (inputbox.length < 1) return false;

		//   return inputbox[0];
		// });

		// if ((await numberOfWorkersInputBox.getText()) == "") {
		//   await numberOfWorkersInputBox.setValue(Math.floor(Math.random() * 10));
		// }

		// If it was Individual Interview
		if (interviewType == "individual") {
			const desiredLabel = "တည်နေရာ အားသာချက် *"

			while (!(await $(`//*[@text="${desiredLabel}"]`).isDisplayed())) {
				await Util.scrollTextIntoViewByClass(undefined, desiredLabel)
			}

			// Setting a random တည်နေရာအားသာချက်
			const randomAdvantage = await driver.waitUntil(async () => {
				const checkboxList = await $$(InterviewProcess.checkBoxes)
				if (checkboxList.length < 4) {
					return false
				}

				let randomIndex = Math.floor(Math.random() * checkboxList.length)

				return checkboxList[randomIndex]
			})

			if ((await randomAdvantage.getAttribute("checked")) === "true") {
				await randomAdvantage.click()
				await randomAdvantage.click()
			} else {
				await randomAdvantage.click()
			}

			await Util.scrollTextIntoViewByClass(undefined, "NEXT")

			const randomTimeOfConvenience = await driver.waitUntil(async () => {
				const checkboxList = await $$(InterviewProcess.checkBoxes)
				if (checkboxList.length < 3) {
					return false
				}

				let randomIndex = Math.floor(Math.random() * checkboxList.length)

				return checkboxList[randomIndex]
			})

			if ((await randomTimeOfConvenience.getAttribute("checked")) === "true") {
				await randomTimeOfConvenience.click()
				await randomTimeOfConvenience.click()
			} else {
				await randomTimeOfConvenience.click()
			}
		}

		// if NEXT button was not displayed in DOM scroll to it
		while (!(await InterviewProcess.nextBtn.isDisplayed())) {
			await Util.scrollTextIntoViewByClass(undefined, "NEXT")
		}
		await InterviewProcess.nextBtn.click()
	}

	async otherIncomeIndividual() {
		const incomeInputList = await driver.waitUntil(async () => {
			const editBoxList = await $$(InterviewProcess.editText)

			if (editBoxList.length < 3) {
				return false
			}
			return editBoxList
		})

		for await (const inputbox of incomeInputList) {
			if ((await inputbox.getText()) == "") {
				await inputbox.setValue(Math.floor(Math.random() * 7 + 1) * 100000)
			}
		}

		await InterviewProcess.nextBtn.click()
	}

	async otherIncomePage() {
		await expect(await $('//*[@text="အခြား ဝင်ငွေ အရေအတွက်"]')).toExist()
		const inputBoxes = await $$(InterviewProcess.editText)
		for (const item of inputBoxes) {
			if ((await item.getText()) == "") {
				await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000)
			}
		}
		if (!(await InterviewProcess.nextBtn.isExisting())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}
	async businessInocmePage() {
		const inputBoxes = await $$(InterviewProcess.editText)
		for (const item of inputBoxes) {
			if ((await item.getText()) == "") {
				await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000)
			}
		}
		if (!(await InterviewProcess.nextBtn.isExisting())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async businessExpensePage() {
		const inputBoxes = await $$(InterviewProcess.editText)
		for (const item of inputBoxes) {
			if ((await item.getText()) == "") {
				await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000)
			}
		}
		if (!(await InterviewProcess.nextBtn.isExisting())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async personalExpensePage() {
		let inputBoxList = await $$(InterviewProcess.editText)
		for (const inputBox of inputBoxList) {
			if ((await inputBox.getText()) == "") {
				await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
			}
		}
		// await Util.scrollToEndByClass();

		// inputBoxList = await $$(InterviewProcess.editText);
		// for (const inputBox of inputBoxList) {
		//   if ((await inputBox.getText()) == "") {
		//     await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000);
		//   }
		// }
		if (!(await InterviewProcess.nextBtn.isExisting())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async currentAssetsPage() {
		// let inputBoxList = await $$(InterviewProcess.editText);
		// for (const inputBox of inputBoxList) {
		//   if ((await inputBox.getText()) == "") {
		//     await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000);
		//   }
		// }
		if (!(await InterviewProcess.nextBtn.isExisting())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async longTermAssetsPage() {
		let inputBoxList = await $$(InterviewProcess.editText)
		for (const inputBox of inputBoxList) {
			if ((await inputBox.getText()) == "") {
				await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
			}
		}
		const checkBoxes = await $$(InterviewProcess.checkBoxes)
		await checkBoxes[Util.getRandomIndex(checkBoxes.length - 1, 0)].click()

		if (!(await InterviewProcess.nextBtn.isExisting())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async liabilitiesPage() {
		let inputBoxList = await $$(InterviewProcess.editText)
		for (const inputBox of inputBoxList) {
			if ((await inputBox.getText()) == "") {
				await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
			}
		}

		if (!(await InterviewProcess.nextBtn.isExisting())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async loanInformationPage(loanInformationData) {
		const inputBoxList = await $$(InterviewProcess.editText)
		for (let i = 0; i < inputBoxList.length; i++) {
			if (i == 0) {
				const randomNumber = Math.floor(Math.random() * 8 + 4)
				console.log("randomNumber --> ", randomNumber)
				await inputBoxList[i].setValue(randomNumber)
			} else if (i == 1) {
				await inputBoxList[i].setValue("Dummy Reason")
			}
		}
		// const spinnerList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]')
		await $(InterviewProcess.spinner).waitForExist({
			timeout: 3000,
		})
		const spinnerList = await $$(InterviewProcess.spinner)
		for (let i = 0; i < spinnerList.length; i++) {
			await spinnerList[i].click()
			await $(InterviewProcess.tvItem).waitForExist({
				timeout: 3000,
			})
			const items = await $$(InterviewProcess.tvItem)
			const randomIndex = Math.floor(Math.random() * (items.length - 1))
			console.log("item size --> " + items.length)
			console.log("random index --> " + randomIndex)
			await items[randomIndex].click()
		}
		await InterviewProcess.nextBtn.click()
	}

	async clientAppPage() {
		await InterviewProcess.nextBtn.click()
	}

	async fillNrc() {
		await InterviewProcess.etNrc.click()
		await InterviewProcess.spinnerState.waitForExist({
			timeout: 3000,
		})
		await InterviewProcess.spinnerState.click()
		await $(`//*[@text="၉"]`).click()
		await InterviewProcess.spinnerTownshipCode.click()
		await $(`//*[@text="မရမ"]`).click()
		await InterviewProcess.spinnerNrcType.click()
		await $(`//*[@text="နိုင်"]`).click()
		await InterviewProcess.etNrcNo.setValue("000123")
		await $(`//*[@text="OK"]`).click()
	}

	async fillNrcNew() {
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

			const index = Math.floor(Math.random() * (dropdownItemList.length - 0)) + 1

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
		const randomNrcNo = Math.floor(Math.random() - (MAX - MIN + 1)) + MIN
		await InterviewProcess.etNrcNo.setValue(randomNrcNo)
		await $(`//*[@text="OK"]`).click()

	}



	async individualGuarantorScreen() {
		// TO DO

		const { guarantorTabRequiredFieldLabels: requiredFields } = require('../../data/data')

		const labelSize = requiredFields.length


		for (let i = 0; i < labelSize; i++) {
			const desiredLabel = requiredFields[i].label
			const value = requiredFields[i].value

			await Util.scrollTextIntoViewByClass(undefined, desiredLabel)
			
		}

		/**
		 * Do not delete the following code, might need in the future
		 */

		// const inputBoxes = await driver.waitUntil(async () => {

		// 	const editBoxList = await $$(InterviewProcess.editText)

		// 	if (editBoxList.length < 4) {
		// 		return false
		// 	}

		// 	return editBoxList

		// })

		// const totalInputBox = inputBoxes.length
		// for (let i = 0; i < totalInputBox; i++) {

		// 	switch (i) {

		// 		case 0: // guarantor myanmar name
		// 			const mmName = 'ဦးအောင်မျိုးလင်း'
		// 			await inputBoxes[i].setValue(mmName)
		// 			break

		// 		case 1: 
		// 			const engName = 'Aung Myo Linn'
		// 			await inputBoxes[i].setValue(engName)
		// 			break

		// 	}

		// }

	}


	async guarantorPage(isGroupInterview = false) {
		const itemList = await $$(InterviewProcess.editText)
		for (let i = 0; i < itemList.length; i++) {
			switch (i) {
				case 0:
					await itemList[i].setValue("Mr. Guarantor")
					break

				case 1:
					await itemList[i].setValue("U Ba")
					break

				default:
					break
			}
		}
		if (isGroupInterview) {
			if (await InterviewProcess.etNrc.isDisplayed()) {
				await this.fillNrc()
			}
		} else {
			let inputBoxes = await $$(InterviewProcess.editText)
			for (let i = 2; i < inputBoxes.length; i++) {
				await inputBoxes[i].setValue(Math.floor(Math.random() * 4 + 1) * 100000)
			}

			await Util.scrollTextIntoViewByClass(
				"android.widget.ScrollView",
				"လစဉ် အခြားဝင်ငွေများ"
			)
			inputBoxes = await $$(InterviewProcess.editText)
			for (const item of inputBoxes) {
				if ((await item.getText()) == "") {
					await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000)
				}
			}
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	// async uploadPhoto() {
	//     console.log('uploadPhoto init')
	//     await $('//*[@text="Select source"]').waitForExist({ timeout: 5000 })
	//     await $(InterviewProcess.galleryIcon).waitForExist({ timeout: 5000 })
	//     if (await $(InterviewProcess.galleryIcon).isExisting()) {
	//         console.log('Gallery icons found')
	//     } else {
	//         console.log('Gallery icons not found')
	//     }
	//     const icons = await $$(InterviewProcess.galleryIcon)
	//     console.log('Gallery icons found --> ', icons.length) // must be 3
	//     // const icons = await $$(InterviewProcess.androidIcon)
	//     await icons[2].click()
	//     await $('//*[@text="appium"]').waitForExist({ timeout: 3000 })
	//     await $('//*[@text="appium"]').click()
	//     await $('//*[@text="Select item"]').waitForExist({ timeout: 3000 })
	//     await $(InterviewProcess.photoIcons).waitForExist({ timeout: 3000 })
	//     const photos = await $$(InterviewProcess.photoIcons)
	//     console.log('photos size --> ', photos.length)
	//     const photoCount = photos.length
	//     await photos[Math.floor(Math.random() * (photoCount))].click()
	//     await $('//*[@text="CROP"]').waitForExist({ timeout: 3000 })
	//     await $(InterviewProcess.cropBtn).waitForExist({ timeout: 3000 })
	//     await $(InterviewProcess.cropBtn).click()
	//     console.log('uploadPhoto terminate')
	// }

	async uploadPhoto() {
		await InterviewProcess.take_photo_btn.click()
		await Util.tap(542, 2030)
		await InterviewProcess.okBtn.waitForExist()
		await InterviewProcess.okBtn.click()
	}

	async uploadRequiredPhotos(requiredFields) {
		for await (const fieldName of requiredFields) {
			while (!(await $(`//*[@text="${fieldName}"]`).isDisplayed())) {
				await Util.scrollTextIntoViewByClass("android.widget.ScrollView", fieldName)
			}

			const { x, y } = await $(`//*[@text="${fieldName}"]`).getLocation()
			await Util.tap(x + 100, y + 100)
			if (!(await InterviewProcess.chooseFromGalleryBtn.isExisting())) {
				await driver.back()
				continue
			}
			await this.uploadPhotoFromGallery()
		}
	}

	async drawRequiredSignature(signFieldName) {
		while (!(await $(`//*[@text="${signFieldName}"]`).isDisplayed())) {
			await Util.scrollTextIntoViewByClass(
				"android.widget.ScrollView",
				signFieldName
			)

			const { x, y } = await $(`//*[@text="${signFieldName}"]`).getLocation()
			// await Util.tap(x + 50, y + 50);
			await await InterviewProcess.signField.click()
			await Util.drawSignature()
		}
	}

	async uploadPhotoFromGallery() {
		await InterviewProcess.chooseFromGalleryBtn.waitForExist({
			timeoutMsg: "gallery button not found",
		})
		await InterviewProcess.chooseFromGalleryBtn.click()

		const firstPhotoIcon = await driver.waitUntil(
			async () => {
				const photoIcons = await $$(
					'//*[@resource-id="com.google.android.documentsui:id/icon_thumb"]'
				)
				if (photoIcons.length === 0) {
					return false
				}

				return photoIcons[0]
			},
			{
				timeoutMsg: "Photo icons not displayed",
			}
		)

		console.log("first photo icon => ", firstPhotoIcon)

		await firstPhotoIcon.click()

		const cropIcon = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/menu_crop"]')

		await expect(cropIcon).toExist()
		console.log('crop icon is displayed => ', await cropIcon.isDisplayed())
		await cropIcon.click()

		// await $(
		// 	'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/menu_crop"]'
		// ).waitForExist({ timeoutMsg: "crop icon not found" })
		// await $(
		// 	'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/menu_crop"]'
		// ).click()
	}

	async attachmentGuarantorPage() {
		while (!(await InterviewProcess.signField.isDisplayed())) {
			await Util.scrollIntoView(
				undefined,
				"com.hanamicrofinance.FieldApp.uat:id/ivSign"
			)
		}
		await Main.asyncClick(InterviewProcess.signField)
		await Util.drawSignature()

		while (!(await InterviewProcess.nextBtn.isDisplayed())) {
			await Util.scrollTextIntoViewByClass(undefined, "NEXT")
		}
		await InterviewProcess.nextBtn.click()
	}

	async attachmentClientPage() {
		const requiredFields = [
			"Client Photo *",
			"Client NRC Front *",
			"Client NRC Back *",
			"Client Household list *",
		]

		await this.uploadRequiredPhotos(requiredFields)

		while (!(await InterviewProcess.signField.isDisplayed())) {
			await Util.scrollIntoView(
				undefined,
				"com.hanamicrofinance.FieldApp.uat:id/ivSign"
			)
		}
		await Main.asyncClick(InterviewProcess.signField)
		await Util.drawSignature()

		while (!(await InterviewProcess.nextBtn.isDisplayed())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async attachmentLoanPage() {
		while (!(await InterviewProcess.nextBtn.isDisplayed())) {
			await Util.scrollTextIntoViewByClass(undefined, "NEXT")
		}
		await InterviewProcess.nextBtn.click()
	}

	async attachmentCoApplicant() {
		const requiredFields = [
			"Co-applicant photo *",
			"Co-applicant NRC Front *",
			"Co-applicant NRC Back *",
			"Co-applicant household list *",
		]

		await this.uploadRequiredPhotos(requiredFields)

		while (!(await InterviewProcess.signField.isDisplayed())) {
			await Util.scrollIntoView(
				undefined,
				"com.hanamicrofinance.FieldApp.uat:id/ivSign"
			)
		}
		await Main.asyncClick(InterviewProcess.signField)
		await Util.drawSignature()

		while (!(await InterviewProcess.nextBtn.isDisplayed())) {
			await Util.scrollToEndByClass()
		}
		await InterviewProcess.nextBtn.click()
	}

	async cashFlowPage() {
		await InterviewProcess.nextBtn.waitForExist({
			timeoutMsg: "next button not displayed on cash flow screen",
		})
		await InterviewProcess.nextBtn.click()
	}

	async evaluationPage() {

		// const foAssessment = await $(InterviewProcess.inputBox);	

		// if (await foAssessment.isDisplayed()) {
		// 	if (await foAssessment.getText() == '') {
		// 		await foAssessment.setValue('Good')
		// 	} 
		// }

		while (!(await InterviewProcess.nextBtn.isDisplayed())) {
			await Util.scrollTextIntoViewByClass(undefined, "NEXT")
		}
		// await expect(await $(InterviewProcess.editText)).toExist({ timeoutMsg: 'Edit box not found' });
		await $(InterviewProcess.editText).waitUntil(
			async () => {
				const editTextList = await $$(InterviewProcess.editText)
				return editTextList.length === 3
			},
			{
				timeoutMsg: "edit text not found",
			}
		)

		const textBoxes = await $$(InterviewProcess.editText)
		for (let i = 0; i < textBoxes.length; i++) {
			switch (i) {
				case 0:
					if ((await textBoxes[i].getText()) == "") {
						await textBoxes[i].setValue("ကောင်း")
					}
					break

				case 1:
					if ((await textBoxes[i].getText()) == "") {
						await textBoxes[i].setValue("800000")
					}
					break

				case 2:
					if ((await textBoxes[i].getText()) == "") {
						await textBoxes[i].setValue("the reason")
					}
					break

				default:
					break
			}
		}

		// try {
		//   if (await $(InterviewProcess.editText).getText() != "") {
		//     while (!await InterviewProcess.nextBtn.isDisplayed()) {
		//       await Util.scrollTextIntoViewByClass(undefined, 'NEXT');
		//     }
		//     await InterviewProcess.nextBtn.click();
		//   }
		// } catch (error) {
		//   throw error
		// }

		await InterviewProcess.nextBtn.waitForExist()
		await InterviewProcess.nextBtn.click()
	}

	async loanSummary() {
		await InterviewProcess.nextBtn.waitForExist()
		await InterviewProcess.nextBtn.click()
	}

	async assetSummary() {
		// await Util.scrollToEndByClass();
		await Util.scrollTextIntoViewByClass(undefined, "DONE")
		await InterviewProcess.doneBtn.click()
	}

	async coApplicant() {
		const desiredLabel = "အတူလျှောက်ထားသူ၏အမည် *"

		while (!(await $(`//*[@text="${desiredLabel}"]`).isDisplayed())) {
			await Util.scrollTextIntoViewByClass(undefined, desiredLabel)
		}

		const coapplicantName = await driver.waitUntil(async () => {
			const editText = await $$(InterviewProcess.editText)

			if (editText.length < 1) {
				return false
			}

			return editText[0]
		})

		if ((await coapplicantName.getText()) == "") {
			await coapplicantName.setValue("Mr. CoApplicant")
		}
		await this.fillNrc()

		const coapplicantPhoneLabel = "NEXT"
		while (!(await $(`//*[@text="${coapplicantPhoneLabel}"]`).isExisting())) {
			await Util.scrollTextIntoViewByClass(undefined, coapplicantPhoneLabel)
		}

		const coapplicantPhone = await driver.waitUntil(async () => {
			const editText = await $$(InterviewProcess.editText)

			if (editText.length < 2) {
				return false
			}

			return editText[0]
		})

		await coapplicantPhone.setValue("09790900023")

		// const edTextList1 = await $$(InterviewProcess.editText);
		// for (let i = 0; i < edTextList1.length; i++) {
		//   switch (i) {
		//     case 0:
		//       if (await edTextList1[i].getText() == "") {
		//         await edTextList1[i].setValue("Mr. Dummy Name");
		//       }
		//       break;

		//     case 1:
		//       if (await edTextList1[i].getText() == "") {
		//         await edTextList1[i].setValue("09751999000");
		//       }
		//       break;

		//     default:
		//       break;
		//   }
		// }
		await Util.scrollToEndByClass()

		const addressBox = await driver.waitUntil(async () => {
			const edTextList = await $$(InterviewProcess.editText)
			if (edTextList.length == 0) {
				return false
			}

			return edTextList[edTextList.length - 1]
		})
		await addressBox.setValue("အမှတ် ၁ နှင်းဆီလမ်း ကမာရွတ်မြို့နယ် ရန်ကုန်မြို့")

		// const edTextList2 = await $$(InterviewProcess.editText);
		// await edTextList2[edTextList2.length - 1].setValue(
		//   "အမှတ် ၁ နှင်းဆီလမ်း ကမာရွတ်မြို့နယ် ရန်ကုန်မြို့"
		// );
		await InterviewProcess.nextBtn.waitForExist()
		await InterviewProcess.nextBtn.click()
	}

	async familyReference() {
		await $(InterviewProcess.editText).waitForExist({
			timeout: 3000,
		})
		await $(InterviewProcess.editText).setValue("ကောင်း")
		await InterviewProcess.nextBtn.click()
	}

	async businessReference() {
		const guarantorName = await $(InterviewProcess.editText)
		await guarantorName.setValue("Mr. Guarantor")
		await Util.scrollToEndByClass()
		const edtTextList = await $$(InterviewProcess.editText)
		const monthlyAvgIncome = edtTextList[0]
		const remark = edtTextList[1]
		await monthlyAvgIncome.setValue(150000)
		await remark.setValue("ကောင်း")
		await InterviewProcess.nextBtn.click()
	}

	async esddCheckList() {
		await Util.scrollToEndByClass()
		await InterviewProcess.nextBtn.click()
	}
}

module.exports = new InterviewProcessHelper()
