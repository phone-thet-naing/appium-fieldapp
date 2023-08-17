/**
 * This is a ngasaya helper function 
 */

const Scroll = require('../utils/custom-scroll')
const NgasayaScreen = require('../screen_objects/ngasaya-contract.screen')
const Util = require('../utils/utility-functions')

class NgasayaContract {
    async makeNgaSaYaContract(ngasayaData) {

        const loanAmountEdtTextList = await driver.$$(NgasayaScreen.loanAmountEditText)

        // Enter loan amount for each client
        for (const loanAmountEdtText of loanAmountEdtTextList) {
            await loanAmountEdtText.setValue((Math.floor(Math.random() * 2 + 8)) * 100000)
        }

        const loanNameOption = ngasayaData['loan_name']
        console.log('Loan Option -->', loanNameOption)
        await NgasayaScreen.loanNameDropdown.click() // choose loan name
        // const loan_name_selector = $(`//*[@text="${ngasayaData['loan_name']}"]`)
        await Util.scrollOptionIntoView(loanNameOption, 'android:id/text1')
        await $(`//*[@text="${loanNameOption}"]`).click()
        // }

        // If "အင်တာဗျူးအသစ်လုပ်ရမည်" was prompted
        if (await NgasayaScreen.confirmBtn.isExisting()) {
            await NgasayaScreen.confirmBtn.click()
        }

        const repaymentFrequencyOption = ngasayaData['repayment_frequency']
        await NgasayaScreen.repaymentFrequencyDropdown.click() // Repayment Frequency
        await Util.scrollOptionIntoView(repaymentFrequencyOption, 'com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem')
        await $(`//*[@text="${repaymentFrequencyOption}"]`).click()

        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)`)


        // Disbursement Date
        await NgasayaScreen.disbursementDatePicker.click()
        await $(`~${ngasayaData['disbursement_date']}`).click()
        await NgasayaScreen.btnOk.click()

        // First Repayment Date
        await NgasayaScreen.firstRepaymentDatePicker.click()
        await $(`~${ngasayaData['first_repayment_date']}`).click()
        await $(`//*[@text="OK"]`).click()

        // Signature
        await $(NgasayaScreen.ivSign).waitForExist({ timeout: 3000 })
        const signFieldList = await $$(NgasayaScreen.ivSign)

        for (const currentSignField of signFieldList) {
            await currentSignField.click()
            await driver.pause(1500)
            await Util.drawSignature()
        }

        await NgasayaScreen.saveNgasayaBtn.click() // save ngasaya 

        await NgasayaScreen.confirmBtn.waitForExist({ timeout: 3000 })
        await NgasayaScreen.confirmBtn.click()
    }

    async makeIdlContract(ngasayaData) {

        // choose loan name and repayment frequency
        const ivDropDownList = await $$(NgasayaScreen.ivDropDown)
        for (let i = 0; i < ivDropDownList.length; i++) {
            await ivDropDownList[i].click()
            const loanNameOption = ngasayaData['loan_name']
            switch (i) {
                case 0:
                    await Util.scrollTextIntoViewByClass('android.widget.ListView', loanNameOption)
                    await $(`//*[@text="${loanNameOption}"]`).click()
                    // If "အင်တာဗျူးအသစ်လုပ်ရမည်" was prompted
                    if (await NgasayaScreen.confirmBtn.isExisting()) {
                        await NgasayaScreen.confirmBtn.click()
                    }
                    break;

                case 1:
                    const repaymentOption = ngasayaData['repayment_frequency']
                    await Util.scrollTextIntoViewByClass('android.widget.ListView', repaymentOption)
                    await $(`//*[@text="${repaymentOption}"]`).click()
                    break;

                default:
                    break;
            }
        }

        // Enter loan amount for each client
        const loanAmountEdtTextList = await driver.$$(NgasayaScreen.loanAmountEditText)
        for (const loanAmountEdtText of loanAmountEdtTextList) {
            await loanAmountEdtText.setValue((Math.floor(Math.random() * 2 + 8)) * 100000)
        }

        // Disbursement Date
        await NgasayaScreen.disbursementDatePicker.click()
        await $(`~${ngasayaData['disbursement_date']}`).click()
        await NgasayaScreen.btnOk.click()

        // First Repayment Date
        await NgasayaScreen.firstRepaymentDatePicker.click()
        await $(`~${ngasayaData['first_repayment_date']}`).click()
        await $(`//*[@text="OK"]`).click()

        // Click 'အင်တာဗျူးမည်'
        await NgasayaScreen.btnSubmit.click()
    }
}

module.exports = new NgasayaContract()