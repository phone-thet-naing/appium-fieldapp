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
	async makeNgaSaYaContract() {
		// console.log("ngasaya data =>", ngasayaData)
		/**
		 * `clearNoteIcon` removes the note icon to avoid potential click event conflicts
		 */
		await util.clearNoteIcon({ toX: 0, toY: 0 });

		/**
		 * Scroll to top if the screen is somewhere in the middle.
		 */
		const desiredTitle = 'Refinancing Loan';
		const selector = await $(`//*[@text="${desiredTitle}"]`);
		if (!(await selector.isDisplayed())) {
			await util.scrollToBeginning(undefined);
		}

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

		// Disbursement Date
		await ngasayaScreen.disbursementDatePicker.click();
		await this.chooseValidDate();
		await ngasayaScreen.btnOk.click();

		// First Repayment Date
		await ngasayaScreen.firstRepaymentDatePicker.click();
		await this.chooseValidDate();
		await $(`//*[@text="OK"]`).click();

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

	async makeIdlContract(ngasayaData) {
		// choose loan name and repayment frequency
		const ivDropDownList = await $$(ngasayaScreen.ivDropDown);
		for (let i = 0; i < ivDropDownList.length; i++) {
			await ivDropDownList[i].click();
			const loanNameOption = ngasayaData['loan_name'];
			switch (i) {
				case 0:
					await util.scrollTextIntoViewByClass(
						'android.widget.ListView',
						loanNameOption
					);
					await $(`//*[@text="${loanNameOption}"]`).click();
					// If "အင်တာဗျူးအသစ်လုပ်ရမည်" was prompted
					if (await ngasayaScreen.confirmBtn.isExisting()) {
						await ngasayaScreen.confirmBtn.click();
					}
					break;

				case 1:
					const repaymentOption = ngasayaData['repayment_frequency'];
					await util.scrollTextIntoViewByClass(
						'android.widget.ListView',
						repaymentOption
					);
					await $(`//*[@text="${repaymentOption}"]`).click();
					break;

				default:
					break;
			}
		}

		// Enter loan amount for each client
		const loanAmountEdtTextList = await driver.$$(
			ngasayaScreen.loanAmountEditText
		);
		for (const loanAmountEdtText of loanAmountEdtTextList) {
			if ((await loanAmountEdtText.getText()) == 'Enter Amount') {
				await loanAmountEdtText.setValue(
					Math.floor(Math.random() * 2 + 8) * 100000
				);
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
		// await $(`~${ngasayaData["disbursement_date"]}`).click();
		await ngasayaScreen.btnOk.click();

		// First Repayment Date
		await ngasayaScreen.firstRepaymentDatePicker.click();
		// await $(`~${ngasayaData["first_repayment_date"]}`).click();
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
			console.log('day of week => ', headerDayofWeek === 'Sat,');
			console.log('isValid => ', isValid);

			if (headerDayofWeek !== 'Sat,' && headerDayofWeek !== 'Sun,') {
				isValid = true;
			} else {
				nextDay++;
			}
		}
	}
}

module.exports = new NgasayaContract();
