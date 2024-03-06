const InterviewProcess = require('../../screenobjects/interview-process.screen');
const NgasayaContract = require('../../utils/make-ngasaya');
const InterviewProcessHelper = require('../../utils/helpers/interview_process.helper');
const HomeScreen = require("../../screenobjects/home.screen");

// interview test data
const interviewData = {
	created_date: 'Created Date - 2023-07-20',
	phone_number_prefix: '09',
	phoneNumber: '790900023',
	client_name: 'Daw Win Ni Aye',
	house_no: 'no()',
	street_no: 'no()',
};

// ngasaya test data
// const ngasayaData = {
//     loan_name: 'Hana Staff Loan 2022',
//     repayment_frequency: 12,
//     disbursement_date: '08 August 2023',
//     first_repayment_date: '30 August 2023'
// }
const ngasayaData = require('../../data/input_data.json')[
	'ngasaya_data_idl_interview'
];

const labelList = [
	'Guarantor Building *',
	'Guarantor Business Photo -1 *',
	'Guarantor Business Photo -2 *',
	'Guarantor Business Photo -2 *',
];

const loanInformationData = [
	'2. Livestock',
	'Insurance (Shinning Bright Loan)',
];

describe('Individual Interview Process', () => {
	it('New Interview', async () => {
		// const { interviewProcessMenu} = await driver.waitUntil(async () => {
		// 	const componentList = await $$('//*[@class="android.view.View"]')

		// 	if (componentList.length < 42) {
		// 		return false
		// 	}

		// 	console.log('total components found => ', componentList.length)

		// 	return {
		// 		interviewProcessMenu: componentList[27]
		// 	}
		// })

		// await interviewProcessMenu.click()

		// const interviewsMenu = await InterviewProcess.interviewsMenu

		// await expect(interviewsMenu).toExist()
		// await interviewsMenu.click()

		// const { individualLoansTab } = await driver.waitUntil(async () => {
		// 	const components = await $$('//*[@class="android.widget.LinearLayout"]')

		// 	if (components.length < 7) {
		// 		return false 
		// 	}

		// 	return {
		// 		individualLoansTab: components[1]
		// 	}
		// })

		// console.log("label ", await individualLoansTab.getText())

		// await expect(individualLoansTab).toExist()

		// await individualLoansTab.click()

		// const { firstInterview } = await driver.waitUntil(async () => {
		// 	const components = await $$('//*[@class="android.widget.RelativeLayout"]')

		// 	if (components.length < 2) {
		// 		return false 
		// 	}

		// 	if (components.length === 1) {
		// 		throw new Error("No interview found!")
		// 	}

		// 	return {
		// 		firstInterview: components[1]
		// 	}
		// })

		// await expect(firstInterview).toBeClickable()
		// await firstInterview.click()

		if (await $('//*[@text="Individual Loan"]').isExisting()) {
			const { idlNgasayaData } = require('../../data/data');

			await NgasayaContract.makeIdlContract(idlNgasayaData);
		}

		const interviewBtn = await $(InterviewProcess.btnInterview);
		if (await interviewBtn.isDisplayed()) {
			await interviewBtn.click();
		}
		
		await InterviewProcessHelper.clientInfoPage(interviewData);
		await InterviewProcessHelper.personalDetailPage();
		await InterviewProcessHelper.householdDetailPage();
		await InterviewProcessHelper.earningFamilyMemberPage();
		await InterviewProcessHelper.householdVerificationPage();
		await InterviewProcessHelper.currentLoanAndCreditHistoryPage();
		await InterviewProcessHelper.individualCoApplicant();
		await InterviewProcessHelper.businessProfilePage('individual');
		await InterviewProcessHelper.otherIncomeIndividual();
		await InterviewProcessHelper.businessInocmePage();
		await InterviewProcessHelper.businessExpensePage();
		await InterviewProcessHelper.personalExpensePage();
		await InterviewProcessHelper.currentAssetsPage();
		await InterviewProcessHelper.longTermAssetsPage();
		await InterviewProcessHelper.liabilitiesPage();
		await InterviewProcessHelper.loanInformationPage();
		await InterviewProcessHelper.familyReference();
		await InterviewProcessHelper.businessReference();
		await InterviewProcessHelper.clientAppPage();
		await InterviewProcessHelper.individualGuarantorScreen();
		await InterviewProcessHelper.esddCheckList();
		await InterviewProcessHelper.attachmentClientPage();
		await InterviewProcessHelper.attachmentLoanPage();
		await InterviewProcessHelper.attachmentCoApplicant();
		await InterviewProcessHelper.attachmentGuarantorPage('individual');
		await InterviewProcessHelper.cashFlowPage();
		await InterviewProcessHelper.evaluationPageIndividual();
		await InterviewProcessHelper.loanSummary();
		await InterviewProcessHelper.assetSummary();
		await InterviewProcess.btnSubmit.click();
		// }
	});
});
