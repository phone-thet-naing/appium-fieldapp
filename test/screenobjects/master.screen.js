class MasterScreen {

    constructor(appType) {
        this.appType = appType
    }

    get viewPager() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/viewPager"]`);
    }

    get interviewBtn() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/btnInterview"]`)
    }

    get spinnerItem() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/tvSpinnerItem"]`)
    }

    get etName() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/etName"]`)
    }

    get edtLoanAmount() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/edtLoanAmount"]`)
    }

    get spinnerLoanProduct() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/spinnerLoanProduct"]`)
    }

    get confirmBtn() {
        return ('//*[@text="သိပြီ"]')
    }

    get spinner() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/spinner"]`)
    }

    get firstRepaymentDate() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/ivFirstRepaymentDate"]`)
    }

    get disbursementDate() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.${this.appType}:id/ivDate"]`)
    }

    get headerDate() {
        return (`//*[@resource-id="android:id/date_picker_header_date"]`)
    }
}

module.exports = MasterScreen