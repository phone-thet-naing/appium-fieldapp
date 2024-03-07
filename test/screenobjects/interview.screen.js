const MasterScreenClass = require('../screenobjects/master.screen')
const Util = require("../utils/utility-functions")
const ngasayaScreen = require("./ngasaya-contract.screen");
const util = require("../utils/utility-functions");

class InterviewScreen {
    constructor(appType) {
        this.appType = appType
        this.MasterScreen = new MasterScreenClass(this.appType)
    }

    async chooseValidDate() {
        let headerDate = await $(this.MasterScreen.headerDate).getText().split(" ")

        let nextDay = isNaN(parseInt(headerDate[headerDate.length - 2]))
            ? parseInt(headerDate[headerDate.length - 1]) + 1
            : parseInt(headerDate[headerDate.length - 2]) + 1

        let headerDayOfWeek = null;
        let isValid = false;
        const nextDayElement = await $(`//*[@text=${nextDay}]`)

        while (!isValid) {
            if (!(await nextDayElement.isExisting())) {
                await $('//*[@resource-id="android:id/next"]').click();
                nextDay = 1
            }

            await nextDayElement.click()
            headerDayOfWeek = await $(this.MasterScreen.headerDate).getText().split(" ")[0]

            if (headerDayOfWeek !== 'Sat,' && headerDayOfWeek !== 'Sun,') {
                isValid = true;
            } else {
                nextDay++;
            }
        }
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

    async makeNgasayaContractGroupLoan ({ loanProduct, loanTerm }) {
        await Util.scrollToBeginning("")

        const loanAmountInputList = await $$(this.MasterScreen.edtLoanAmount)

        for (const loanAmountInput of loanAmountInputList) {
            if (await loanAmountInput.getText() === "Enter Amount") {
                await loanAmountInput.setValue(Math.floor(Math.random() * 2 + 8) * 100000)
            }
        }

        // Choosing loan product
        const loanProductSpinner = await $(this.MasterScreen.spinnerLoanProduct)
        const loanProductSpinnerExists = await loanProductSpinner.isExisting()

        while (!loanProductSpinnerExists) {
            await Util.scrollIntoView(undefined, this.MasterScreen.spinnerLoanProduct)
        }

        await loanProductSpinner.click()
 
        const loanProductElement = await $(`//*[@text="${loanProduct}"]`)
        const loanProductExists = await loanProductElement.isExisting()

        while (!loanProductExists) {
            await Util.scrollTextIntoViewByClass(undefined, loanProduct)
        }
        await loanProductElement.click()

        const confirmBtn = await $(this.MasterScreen.confirmBtn)
        const confirmBtnExists = await confirmBtn.isExisting()
        if (confirmBtnExists) {
            await this.MasterScreen.confirmBtn.click()
        }

        // Choosing loan term
        const loanTermSpinner = await $(this.MasterScreen.spinner)
        const loanTermSpinnerExists = await loanTermSpinner.isExisting()

        while (!loanTermSpinnerExists) {
            await Util.scrollIntoView(undefined, this.MasterScreen.spinner)
        }

        await loanTermSpinner.click()

        const loanTermElement = await $(`//*[@text="${loanTerm}"]`)
        const loanTermElementExists = await loanTermElement.isExisting()
        while (!loanTermElementExists) {
            await Util.scrollTextIntoViewByClass(undefined, loanTerm)
        }

        await loanTermElement.click()

        while (!(await $(this.MasterScreen.firstRepaymentDate).isDisplayed())) {
            await Util.scrollIntoView(undefined, this.MasterScreen.firstRepaymentDate)
        }

        await $(this.MasterScreen.disbursementDate).click()
        await this.chooseValidDate()

    }
}

module.exports = InterviewScreen
