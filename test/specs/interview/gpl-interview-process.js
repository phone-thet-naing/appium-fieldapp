const InterviewProcess = require("../../screenobjects/interview-process.screen")
// const InterviewProcess = require("../../screenobjects/interview-process.debug.screen")
const NgasayaContract = require("../../utils/make-ngasaya")
const InterviewProcessHelper = require("../../utils/helpers/interview_process.helper")
const HomeScreen = require("../../screenobjects/home.screen")
const Util = require("../../utils/utility-functions")
const Main = require("../../screenobjects/main")

const group_data = {
	created_date: "Created Date - 2023-03-14",
	phone_number_prefix: "09",
	phone_number: "790900023",
}

const ngasaya_data = {
	loan_name: "Existing Business Loan (Regular)",
	repayment_frequency: 12,
	disbursement_date: "11 July 2023",
	first_repayment_date: "31 July 2023",
}

const inputData = require("../../data/input_data.json")

const loanInformationData = ["2. Livestock", "Insurance (Shinning Bright Loan)"]

const phoneNumberList = ["969998179", "969998180", "969998181", "969998182"];

describe("Group Interview Process", () => {
	it("New Interview", async () => {
		// Going to Home Screen
		// await Util.goToHomeScreen();

		// await Main.asyncClick(HomeScreen.toInterview);

		// // Navigate to a specific interview
		// await InterviewProcessHelper.navigateToInterview();

		// If ငစရစာချုပ် has not been made
		if (await $('//*[@text="ငစရစာချုပ်"]').isExisting()) {
			await NgasayaContract.makeNgaSaYaContract(ngasaya_data)
		}

		let i = 0;

		// // Interview Process Starts
		const interviewBtnList = await $$(InterviewProcess.btnInterview)
		for await (const interviewBtn of interviewBtnList) {
			await interviewBtn.click();
			await InterviewProcessHelper.clientInfoPage({ phoneNumber: phoneNumberList[i] })
			await InterviewProcessHelper.personalDetailPage()
			await InterviewProcessHelper.householdDetailPage()
			await InterviewProcessHelper.earningFamilyMemberPage()
			await InterviewProcessHelper.householdVerificationPage()
			await InterviewProcessHelper.currentLoanAndCreditHistoryPage()
			await InterviewProcessHelper.businessProfilePage("group")
			await InterviewProcessHelper.otherIncomePage()
			await InterviewProcessHelper.businessInocmePage()
			await InterviewProcessHelper.businessExpensePage()
			await InterviewProcessHelper.personalExpensePage()
			await InterviewProcessHelper.currentAssetsPage()
			await InterviewProcessHelper.longTermAssetsPage()
			await InterviewProcessHelper.liabilitiesPage()
			await InterviewProcessHelper.loanInformationPage()
			await InterviewProcessHelper.clientAppPage()
			await InterviewProcessHelper.groupGuarantorScreen(true)
			await InterviewProcessHelper.attachmentGuarantorPage()
			await InterviewProcessHelper.attachmentClientPage()
			await InterviewProcessHelper.attachmentLoanPage()
			await InterviewProcessHelper.cashFlowPage()
			await InterviewProcessHelper.evaluationPage()
			await InterviewProcessHelper.loanSummary()
			await InterviewProcessHelper.assetSummary()
			i++;
		}
		await InterviewProcess.btnSubmit.click()
		i = 0;
		await Util.goToHomeScreen();

		await HomeScreen.uploadBtn.click();
	})
})
