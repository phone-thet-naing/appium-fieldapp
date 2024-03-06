const appType = "uat" // "uat" or "debug"

const MasterScreenClass = require('../../screenobjects/master.screen')
const InterviewScreenClass = require('../../screenobjects/interview.screen')
const MasterScreen = new MasterScreenClass(appType)
const InterviewScreen = new InterviewScreenClass(appType)

const clientInfos = [
    { clientNameEng: "Hla Hla", phoneNumber: "969998180" },
    { clientNameEng: "Mya Mya", phoneNumber: "969998181" },
    { clientNameEng: "Ya Ya", phoneNumber: "969998182" },
]

const ngasayaInfo = {
    loanProduct: "Existing Business Loan (Regular)",
    loanTerm: "10",
    expectedDisbursementDate: "",
    firstRepaymentDate: "",
}


describe("Group Interview Test", () => {
    it("Making NgaSaYa in Group Interview", async () => {
        await InterviewScreen.makeNgasayaContractGroupLoan(ngasayaInfo)
    })

    it("Complete Interview Flow in Group Interview", async () => {
        const interviewBtnList = await $$(MasterScreen.interviewBtn())

        for await (let i = 0; i < interviewBtnList.length; i++) {
            await interviewBtnList[i].click()

            await InterviewScreen.interviewClientScreen(clientInfos[i])
        }
    })
})