const InterviewScreen = require('../screenobjects/interview.screen')
const MasterScreenClass = require('../screenobjects/master.screen')
const MasterScreen = new MasterScreenClass('uat')
const InterviewProcessHelper = require("../utils/helpers/interview_process.helper")

describe("General test suite", () => {
    it("General test case", async () => {
        await InterviewProcessHelper.attachmentClientPage()
        await InterviewProcessHelper.attachmentLoanPage()
        await InterviewProcessHelper.cashFlowPage()
        await InterviewProcessHelper.evaluationPage()
        await InterviewProcessHelper.loanSummary()
        await InterviewProcessHelper.assetSummary()
    })
})