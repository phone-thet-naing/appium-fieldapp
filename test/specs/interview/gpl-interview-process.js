const InterviewProcess = require("../../screen_objects/interview-process.screen");
const NgasayaContract = require("../../utils/make-ngasaya");
const InterviewProcessHelper = require("../../utils/helpers/interview_process.helper");

const group_data = {
    created_date: "Created Date - 2023-03-14",
    phone_number_prefix: "09",
    phone_number: "790900023",
};

const ngasaya_data = {
    loan_name: 'Existing Business Loan (Regular)',
    repayment_frequency: 12,
    disbursement_date: '11 July 2023',
    first_repayment_date: '31 July 2023'
}

const inputData = require('../../data/input_data.json')

const loanInformationData = ['2. Livestock', 'Insurance (Shinning Bright Loan)']

describe("Group Interview Process", () => {
    it("New Interview", async () => {

        const groupList = inputData['group_list_gpl_interview']

        for (const group of groupList) {
            const desiredGroupLeader = group[0]

            // Navigate to a specific interview
            await InterviewProcessHelper.navigateToInterview(desiredGroupLeader)

            // If ငစရစာချုပ် has not been made
            if (await $('//*[@text="ငစရစာချုပ်"]').isExisting()) {
                await NgasayaContract.makeNgaSaYaContract(ngasaya_data)
            }

            // // Interview Process Starts
            const interviewBtnList = await $$(InterviewProcess.btnInterview)
            for (const interviewBtn of interviewBtnList) {
                await interviewBtn.click()
                await InterviewProcessHelper.clientInfoPage(group_data)
                await InterviewProcessHelper.personalDetailPage()
                await InterviewProcessHelper.householdDetailPage()
                await InterviewProcessHelper.earningFamilyMemberPage()
                await InterviewProcessHelper.householdVerificationPage()
                await InterviewProcessHelper.currentLoanAndCreditHistoryPage()
                await InterviewProcessHelper.businessProfilePage()
                await InterviewProcessHelper.otherIncomePage()
                await InterviewProcessHelper.businessInocmePage()
                await InterviewProcessHelper.businessExpensePage()
                await InterviewProcessHelper.personalExpensePage()
                await InterviewProcessHelper.currentAssetsPage()
                await InterviewProcessHelper.longTermAssetsPage()
                await InterviewProcessHelper.liabilitiesPage()
                await InterviewProcessHelper.loanInformationPage(loanInformationData)
                await InterviewProcessHelper.clientAppPage()
                await InterviewProcessHelper.guarantorPage(true)
                await InterviewProcessHelper.attachmentGuarantorPage('group')
                await InterviewProcessHelper.attachmentClientPage()
                await InterviewProcessHelper.attachmentLoanPage()
                await InterviewProcessHelper.cashFlowPage()
                await InterviewProcessHelper.evaluationPage()
                await InterviewProcessHelper.loanSummary()
                await InterviewProcessHelper.assetSummary()
            }
            await InterviewProcess.btnSubmit.click()

        }

    });
});
