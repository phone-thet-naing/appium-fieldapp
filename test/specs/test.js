// const Test = require('../screen-objects/ngasaya-contract.screen')
const util = require('../utils/utility-functions');
// const fs = require('fs')
const AppointmentScreen = require('../screenobjects/appointment.screen');
// const loanType = 'Individual Loan'
// const HomeScreen = require('../screen-objects/home.screen')
// const path = require("path");
// const InterviewProcess = require('../screen-objects/interview-process.screen')
const InterviewProcess = require('../screenobjects/interview-process.screen');
const Page = require('../screenobjects/page.screen');
const HomeScreen = require('../screenobjects/home.screen');
const InterviewProcessHelper = require('../utils/helpers/interview_process.helper');
const NgasayaContract = require('../utils/make-ngasaya');
const AppointmentHelper = require('../utils/helpers/make-appointment.helper');
const main = require('../screenobjects/main');
const ngasayaContractHelper = require('../utils/make-ngasaya');

const groupList = require('../data/input_data.json');

const { mmFemaleNames, mmMaleNames } = require('../data/data.js');
const interviewProcessScreen = require('../screenobjects/interview-process.screen');

const listLabels = [
	'Guarantor Building *',
	'Guarantor Business Photo -1 *',
	'Guarantor Business Photo -2 *',
	'Guarantor Business Photo -2 *',
];

describe('sample', () => {
	it('Evaluation Page for Individual Loan Test', async () => {
		await InterviewProcessHelper.individualCoApplicant()
	})

	it.only('general testing', async function () {
		await util.choosePhoneNumber()
	});

	it('interview client enhancement', async function () {
		// choose client name prefix
		const spinnerMenuList = await driver.waitUntil(async () => {
			const spinnerItems = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]')

			if (spinnerItems.length < 3) return false

			return spinnerItems
		})

		const clientNamePrefix = await spinnerMenuList[0]
		const clientNamePrefixMM = await spinnerMenuList[1]

		const engPrefix = await clientNamePrefix.getText()

		await clientNamePrefixMM.click()

		const spinnerItemList = await driver.waitUntil(async () => {
			const spinnerItems = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]')

			if (spinnerItems.length < 2) return false

			return spinnerItems
		})

		const [malePrefix, femalePrefix] = [...spinnerItemList]

		if (engPrefix === 'Daw') {
			await femalePrefix.click()
		}
		else {
			await malePrefix.click()
		}

		// Fill client name
		const clientName = $(InterviewProcess.clientNameEtBox)
		const clientNameMM = InterviewProcess.clientNameMMEtBox

		if ((await clientName.getText()) == "") {
			await clientName.setValue("Ba")
		}

		if ((await clientNameMM.getText()) == "") {
			await clientNameMM.setValue(generateRandomName())
		}

		// Fill phone number
		if (await InterviewProcess.phoneNoInputBox.getText() == "") {
			const phoneNoSize = phoneNumber.length
			const selectedPhoneNo = phoneNumber[Math.floor(Math.random() * (phoneNoSize - 0 + 1)) + 0]
			await InterviewProcess.phoneNoInputBox.setValue(selectedPhoneNo)
		}

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

		// If the phone number was invalid, this will change the phone number into a valid one
		const nextTabTitle = await $('//*[@text="PERSONAL DETAIL"]')

		if (!(await nextTabTitle.isDisplayed())) {
			await Util.scrollToBeginning()
			const phoneNoSize = phoneNumber.length
			const selectedPhoneNo = phoneNumber[Math.floor(Math.random() * (phoneNoSize - 0 + 1)) + 0]
			await InterviewProcess.phoneNoInputBox.setValue(selectedPhoneNo)
			await Util.scrollToEndByClass(undefined)
			await InterviewProcess.nextBtn.click()
		}


	})

	it('interview client data filling', async () => {
		// await util.choosePhoneNumber()
		// await InterviewProcessHelper.clientInfoPage()
		await InterviewProcessHelper.coApplicant()
	})

	it('loan amount min max choosing', async () => {
		const loanAmountMinMax = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvMaxMinLoanAmount"]').getText()
		const minimumLoanAmount = loanAmountMinMax.split(' ')[1].split(',').join('')
		const maximumLoanAmount = loanAmountMinMax.split(' ')[5].split(',').join('')

		const randomResult = Math.random() * (maximumLoanAmount - minimumLoanAmount + 1)
		const floorResult = parseInt(Math.floor(randomResult)) + parseInt(minimumLoanAmount)

		console.table({
			randomResult: randomResult,
			floorResult: floorResult
		})

	})
})
