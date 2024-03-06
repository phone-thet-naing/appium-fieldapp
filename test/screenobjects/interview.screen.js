const MasterScreenClass = require('../screenobjects/master.screen')
const Util = require("../utils/utility-functions")
const ngasayaScreen = require("./ngasaya-contract.screen");
const util = require("../utils/utility-functions");

class InterviewScreen {
    constructor(appType) {
        this.appType = appType
        this.MasterScreen = new MasterScreenClass(this.appType)
    }

    async interviewClientScreen ({ clientNameEng, phoneNumber }) {
        const { clientNamePrefix, clientNamePrefixMM } = await driver.waitUntil(async () => {
            const spinnerItems = await $$(this.MasterScreen.spinnerItem());

            if (spinnerItems.length < 3) return false

            return {
                clientNamePrefix: spinnerItems[0],
                clientNamePrefixMM: spinnerItems[1]
            }
        })

        const clientNameEngInput = await $(this.MasterScreen.etName())

        await clientNameEngInput.setValue(clientNameEng)
    }

    async makeNgasayaContractGroupLoan ({ loanProduct }) {
        await Util.scrollToBeginning("")

        const loanAmountInputList = await $$(this.MasterScreen.edtLoanAmount())

        for (const loanAmountInput of loanAmountInputList) {
            if (await loanAmountInput.getText() === "Enter Amount") {
                await loanAmountInput.setValue(Math.floor(Math.random() * 2 + 8) * 100000)
            }
        }



    }
}

module.exports = InterviewScreen
