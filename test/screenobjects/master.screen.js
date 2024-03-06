class MasterScreen {

    constructor(appType) {
        this.appType = appType
    }

    viewPager() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/viewPager"]`);
    }

    interviewBtn() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/btnInterview"]`)
    }

    spinnerItem() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/tvSpinnerItem"]`)
    }

    etName() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/etName"]`)
    }

    edtLoanAmount() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/edtLoanAmount"]`)
    }

    selector () {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinnerLoanProduct"]`)
    }
}

module.exports = MasterScreen