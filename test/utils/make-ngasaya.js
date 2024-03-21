/**
 * This is a helper used to process the Ngasaya Contract procedure
 */
const main = require('../screenobjects/main');

const scroll = require('../utils/custom-scroll');
const ngasayaScreen = require('../screenobjects/ngasaya-contract.screen');
const util = require('../utils/utility-functions');
const homeScreen = require('../screenobjects/home.screen');

const ngasayaData = require('../data/input_data.json')[
	'ngasaya_data_gpl_interview'
];

class NgasayaContract {
	/**
	 *	`makeNgaSaYaContract` performs loan contract process
	 */
	async makeNgaSaYaContract({ expectedDisbursementDate }) {
		await util.clearNoteIcon(0, 0);

		/**
		 * Scroll to top if the screen is somewhere in the middle.
		 */
		// const desiredTitle = 'Refinancing Loan';
		// const selector = await $(`//*[@text="${desiredTitle}"]`);
		// if (!(await selector.isDisplayed())) {
		// 	await util.scrollToBeginning(undefined);
		// }
		await util.scrollToBeginning();

		if (!(await $(ngasayaScreen.loanAmountEditText).isDisplayed())) {
			await util.scrollIntoView(
				undefined,
				'com.hanamicrofinance.FieldApp.uat:id/edtLoanAmount'
			);
		}

		const loanAmountEdtTextList = await driver.$$(
			ngasayaScreen.loanAmountEditText
		);

		// Enter loan amount for each client
		for (const loanAmountEdtText of loanAmountEdtTextList) {
			if ((await loanAmountEdtText.getText()) === 'Enter Amount') {
				await loanAmountEdtText.setValue(
					Math.floor(Math.random() * 2 + 8) * 100000
				);
			}
		}

		/**
		 * `loanNameOption` is currentely hardcoded.
		 * Another approch of choosing loan name should be implemented in the future.
		 */
		const loanNameOption = ngasayaData['loan_name'];
		// const loanNameOption = "Existing Business Loan (Regular)"
		// Choosing Loan Name Option
		while (!(await ngasayaScreen.spinnerLoanProduct.isExisting())) {
			await util.scrollIntoView(
				undefined,
				'com.hanamicrofinance.FieldApp.uat:id/spinnerLoanProduct'
			);
		}

		await main.asyncClick(ngasayaScreen.spinnerLoanProduct);

		const loanNameSelector = await $(`//*[@text="${loanNameOption}"]`);

		while (!(await loanNameSelector.isExisting())) {
			await util.scrollTextIntoViewByClass(
				'android.widget.ListView',
				loanNameOption
			);
		}
		await main.asyncClick(await loanNameSelector);

		// If "အင်တာဗျူးအသစ်လုပ်ရမည်" was prompted
		if (await ngasayaScreen.confirmBtn.isExisting()) {
			await ngasayaScreen.confirmBtn.click();
		}

		// Repayment Frequency
		/**
		 * `repaymentFrequencyOption` is currentely hardcoded.
		 * Another approch of choosing repaymentFrequencyOption should be implemented in the future.
		 */
		const repaymentFrequencyOption = ngasayaData['repayment_frequency'];
		// const repaymentFrequencyOption = 12
		const repaymentFrequencySelector = await $(
			`//*[@text="${repaymentFrequencyOption}"]`
		);
		while (!(await ngasayaScreen.spinnerLoanTermFrequency.isDisplayed())) {
			await util.scrollIntoView(
				undefined,
				'com.hanamicrofinance.FieldApp.uat:id/spinner'
			);
		}
		await main.asyncClick(ngasayaScreen.spinnerLoanTermFrequency);

		while (!(await repaymentFrequencySelector.isExisting())) {
			await util.scrollTextIntoViewByClass(
				'android.widget.ListView',
				repaymentFrequencyOption
			);
		}
		await main.asyncClick(repaymentFrequencySelector);

		console.log(
			'date picker is displayed => ',
			await ngasayaScreen.firstRepaymentDatePicker.isDisplayed()
		);
		while (!(await ngasayaScreen.firstRepaymentDatePicker.isDisplayed())) {
			await util.scrollIntoView(
				'android.widget.ScrollView',
				'com.hanamicrofinance.FieldApp.uat:id/ivFirstRepaymentDate'
			);
		}

		// Choosing Disbursement Date
		await ngasayaScreen.disbursementDatePicker.click();
		if (expectedDisbursementDate === "") {
			await this.chooseValidDate();
		} else {
			// const dateSelector = `~${expectedDisbursementDate}`; // Accessibility selector
			const dateSelector = `//*[@text="${expectedDisbursementDate}"]`;
			
			await $(dateSelector).click();
		}
		const okBtn = '//*[@text="OK"]';
		await $(okBtn).click();
		// await ngasayaScreen.btnOk.click();

		// First Repayment Date
		await ngasayaScreen.firstRepaymentDatePicker.click();
		await this.chooseValidDate();
		await $(okBtn).click();

		if (!(await $(ngasayaScreen.ivSign).isDisplayed())) {
			await util.scrollIntoView(
				'android.widget.ScrollView',
				'com.hanamicrofinance.FieldApp.uat:id/ivSign'
			);
		}

		let signFieldList = null;

		// Signature
		if (await $(ngasayaScreen.ivSign).isExisting()) {
			signFieldList = await driver.waitUntil(async () => {
				const tvSignList = await $$(ngasayaScreen.ivSign);

				if (tvSignList.length < 2) {
					return false;
				}

				return tvSignList;
			});
		} else {
			signFieldList = await driver.waitUntil(async () => {
				const tvSignList = await $$(ngasayaScreen.tvSignMultiple);

				if (tvSignList.length < 2) {
					return false;
				}

				return tvSignList;
			});
		}

		for (const currentSignField of signFieldList) {
			await currentSignField.click();
			await driver.pause(1500);
			await util.drawSignature();
		}

		await ngasayaScreen.saveNgasayaBtn.click(); // save ngasaya

		await ngasayaScreen.confirmBtn.waitForExist({
			timeout: 3000,
		});
		await ngasayaScreen.confirmBtn.click();

		await expect(await homeScreen.appointmentIcon).toExist();
	}

	async makeIdlContract(ngasayaData = null) {
		await util.clearNoteIcon(0, 0)

		// for loan name, we will choose one of the following 3 options
		// Staff Loan, Individual Loan (1-12M), Individual Loan (Over 12M)
		const loanNameOptions = ['Staff Loan', 'Individual Loan (1-12M)', 'Individual Loan (Over 12M)']

		// choose loan name and repayment frequency
		const ivDropDownList = await $$(ngasayaScreen.ivDropDown);
		for (let i = 0; i < ivDropDownList.length; i++) {
			await ivDropDownList[i].click();
			// const loanNameOption = ngasayaData['loanName'];
			// const chosenLoanName = loanNameOptions[Math.floor(Math.random() * loanNameOptions.length)] // Choosing laon option randomly
			const chosenLoanName = loanNameOptions[0];
			switch (i) {
				case 0:
					console.log(chosenLoanName)
					await util.scrollTextIntoViewByClass(
						'android.widget.ListView',
						chosenLoanName
					);
					await $(`//*[@text="${chosenLoanName}"]`).click();
					// If "အင်တာဗျူးအသစ်လုပ်ရမည်" was prompted
					if (await ngasayaScreen.confirmBtn.isExisting()) {
						await ngasayaScreen.confirmBtn.click();
					}
					break;

				case 1:
					const MIN_ITEM_COUNT = 5
					const repaymentOption = await driver.waitUntil(async () => {
						const spinnerItemList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]')

						if (spinnerItemList.length < MIN_ITEM_COUNT) return false

						return spinnerItemList[Math.floor(Math.random() * spinnerItemList.length)]

					})
					// const repaymentOption = ngasayaData['loanTerm'];
					const text = await repaymentOption.getText()
					await util.scrollTextIntoViewByClass(
						'android.widget.ListView',
						text
					);
					// await $(`//*[@text="${repaymentOption}"]`).click();
					await repaymentOption.click()
					break;

				default:
					break;
			}
		}

		// Getting the minimum and maximum loan amout according to the chosen loan name
		const loanAmountMinMax = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvMaxMinLoanAmount"]').getText()
		const minimumLoanAmount = loanAmountMinMax.split(' ')[1].split(',').join('')
		const maximumLoanAmount = loanAmountMinMax.split(' ')[5].split(',').join('')

		// const randomResult = Math.random() * (maximumLoanAmount - minimumLoanAmount + 1)
		// const floorResult = parseInt(Math.floor(randomResult)) + parseInt(minimumLoanAmount)

		// console.table({
		// 	randomResult: randomResult,
		// 	floorResult: floorResult
		// })

		// Enter loan amount for each client
		const loanAmountEdtTextList = await driver.$$(
			ngasayaScreen.loanAmountEditText
		);
		for (const loanAmountEdtText of loanAmountEdtTextList) {
			if (
				(await loanAmountEdtText.getText()) === 'Enter Amount' ||
				parseInt((await loanAmountEdtText.getText())) < minimumLoanAmount ||
				parseInt((await loanAmountEdtText.getText())) > maximumLoanAmount
			) {
				const randomResult = Math.random() * (maximumLoanAmount - minimumLoanAmount + 1)
				const floorResult = Math.floor(randomResult) + parseInt(minimumLoanAmount)
				const chosenLoanAmount = floorResult

				console.table({
					randomResult: randomResult,
					floorResult: floorResult
				})
				await loanAmountEdtText.setValue(chosenLoanAmount);
			}
		}

		while (!(await ngasayaScreen.firstRepaymentDatePicker.isDisplayed())) {
			await util.scrollIntoView(
				'android.widget.ScrollView',
				'com.hanamicrofinance.FieldApp.uat:id/ivFirstRepaymentDate'
			);
		}

		// Disbursement Date
		await ngasayaScreen.disbursementDatePicker.click();
		await this.chooseValidDate();
		await ngasayaScreen.btnOk.click();

		// First Repayment Date
		await ngasayaScreen.firstRepaymentDatePicker.click();
		await this.chooseValidDate();
		await $(`//*[@text="OK"]`).click();

		// Click 'အင်တာဗျူးမည်'
		await ngasayaScreen.btnSubmit.click();
	}

	async chooseValidDate() {
		let headerDate = (await main.asyncGetText(ngasayaScreen.headerDate)).split(
			' '
		);
		let nextDay =
			parseInt(headerDate[headerDate.length - 2]) === NaN
				? parseInt(headerDate[headerDate.length - 1]) + 1
				: parseInt(headerDate[headerDate.length - 2]) + 1;
		let headerDayofWeek = null;
		let isValid = false;

		while (!isValid) {
			if (!(await $(`//*[@text="${nextDay}"]`).isExisting())) {
				await $('//*[@resource-id="android:id/next"]').click();
				nextDay = 1;
			}
			await $(`//*[@text="${nextDay}"]`).click();
			headerDayofWeek = (await main.asyncGetText(ngasayaScreen.headerDate)).split(
				' '
			)[0];

			if (headerDayofWeek !== 'Sat,' && headerDayofWeek !== 'Sun,') {
				isValid = true;
			} else {
				nextDay++;
			}
		}
	}
}

module.exports = new NgasayaContract();
