class NgasayaScreen {
    get confirmBtn() {
        return $('//*[@text="သိပြီ"]')
    }
    get loanNameDropdown() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/layoutLoanProduct"]`)
    }
    get ivDropDown() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]')
    }
    get idlLoanNameDropdoan() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]')
    }
    async amountInputBox(index) {
        return $(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[${index + 1}]/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`)
    }
    get loanAmountEditText() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtLoanAmount"]`)
    }
    get repaymentFrequencyDropdown() {
        return $(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout`)
    }
    get disbursementDatePicker() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDate"]')
    }
    get firstRepaymentDatePicker() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivFirstRepaymentDate"]')
    }
    async getCurrentSignatureField(index) {
        return $(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout[4]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[${index + 1}]/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.FrameLayout`)
    }
    get ivDate() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDate"]')
    }
    get ivSign() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSign"]')
    }
    get signatureDoneBtn() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnDone"]`)
    }
    get saveNgasayaBtn() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnSaveNgaSaYa"]`)
    }
    get btnOk() {
        return $(`//*[@resource-id="android:id/button1"]`)
    }
    get btnSubmit() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnLetMakeInterview"]')
    }
}

module.exports = new NgasayaScreen()