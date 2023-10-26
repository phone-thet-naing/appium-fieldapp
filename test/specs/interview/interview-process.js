const InterviewProcess = require("../../screen_objects/interview-process.screen");
const NgasayaContract = require("../../utils/make-ngasaya");
const InterviewProcessHelper = require("../../utils/helpers/interview_process.helper");
const clientList = require('../../data/input_data.json')['client_list_idl_interview']

// interview test data
const interviewData = {
    created_date: "Created Date - 2023-07-20",
    phone_number_prefix: "09",
    phone_number: "790900023",
    client_name: 'Daw Win Ni Aye',
    house_no: "no()",
    street_no: "no()",
};

// ngasaya test data
// const ngasayaData = {
//     loan_name: 'Hana Staff Loan 2022',
//     repayment_frequency: 12,
//     disbursement_date: '08 August 2023',
//     first_repayment_date: '30 August 2023'
// }
const ngasayaData = require("../../data/input_data.json")["ngasaya_data_idl_interview"]

const labelList = ["Guarantor Building *", "Guarantor Business Photo -1 *", "Guarantor Business Photo -2 *", "Guarantor Business Photo -2 *"]

const loanInformationData = ['2. Livestock', 'Insurance (Shinning Bright Loan)']



describe("Individual Interview Process", () => {
    it("New Interview", async () => {
        // for (const client of clientList) {
        // const clientId = client.split(' ')[1]
        // let searchKeywords = client.split(' ').slice(1).join(' ')
        // Navigate to a specific interview
        // await InterviewProcessHelper.chooseIndividualIterview(client)

        // If ငစရစာချုပ် has not been made
        // if (await $('//*[@text="Individual Loan"]').isExisting()) {
        //     await NgasayaContract.makeIdlContract(ngasayaData)
        // }

        // Interview Process Starts
        // const interviewBtn = await $(InterviewProcess.btnInterview)
        // await interviewBtn.click()
        // await InterviewProcessHelper.clientInfoPage(interviewData)
        // await InterviewProcessHelper.personalDetailPage()
        // await InterviewProcessHelper.householdDetailPage()
        // await InterviewProcessHelper.earningFamilyMemberPage()
        // await InterviewProcessHelper.householdVerificationPage()
        // await InterviewProcessHelper.currentLoanAndCreditHistoryPage()
        // await InterviewProcessHelper.coApplicant()
        // await InterviewProcessHelper.businessProfilePage()
        // await InterviewProcessHelper.otherIncomePage()
        // await InterviewProcessHelper.businessInocmePage()
        // await InterviewProcessHelper.businessExpensePage()
        // await InterviewProcessHelper.personalExpensePage()
        // await InterviewProcessHelper.currentAssetsPage()
        // await InterviewProcessHelper.longTermAssetsPage()
        // await InterviewProcessHelper.liabilitiesPage()
        // await InterviewProcessHelper.loanInformationPage()
        // await InterviewProcessHelper.familyReference()
        // await InterviewProcessHelper.businessReference()
        // await InterviewProcessHelper.clientAppPage()
        // await InterviewProcessHelper.guarantorPage()
        // await InterviewProcessHelper.esddCheckList()
        await InterviewProcessHelper.attachmentClientPage()
        await InterviewProcessHelper.attachmentLoanPage()
        await InterviewProcessHelper.attachmentCoApplicant()
        await InterviewProcessHelper.attachmentGuarantorPage('individual')
        await InterviewProcessHelper.cashFlowPage()
        await InterviewProcessHelper.evaluationPage()
        await InterviewProcessHelper.loanSummary()
        await InterviewProcessHelper.assetSummary()
        await InterviewProcess.btnSubmit.click()
        // }
    });
});
