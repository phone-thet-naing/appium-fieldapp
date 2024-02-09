class NgasayaScreen {
	get confirmBtn() {
		return $('//*[@text="သိပြီ"]')
	}
	get spinnerLoanProduct() {
		return $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinnerLoanProduct"]'
		)
	}
	get spinnerLoanTermFrequency() {
		return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]')
	}
	get loanNameDropdown() {
		return $(
			`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/layoutLoanProduct"]`
		)
	}
	get ivDropDown() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]'
	}
	get idlLoanNameDropdoan() {
		return $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]'
		)
	}
	async amountInputBox(index) {
		return $(
			`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[${
				index + 1
			}]/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText`
		)
	}
	get loanAmountEditText() {
		return `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtLoanAmount"]`
	}
	get repaymentFrequencyDropdown() {
		return $(
			`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout`
		)
	}
	get disbursementDatePicker() {
		return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDate"]')
	}
	get firstRepaymentDatePicker() {
		return $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivFirstRepaymentDate"]'
		)
	}
	async getCurrentSignatureField(index) {
		return $(
			`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.RelativeLayout[4]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[${
				index + 1
			}]/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.FrameLayout`
		)
	}
	get ivDate() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDate"]'
	}
	// get ivSign() {
	//   return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivSign"]');
	// }
	get signatureDoneBtn() {
		return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnDone"]`)
	}
	get saveNgasayaBtn() {
		return $(
			`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnSaveNgaSaYa"]`
		)
	}
	get btnOk() {
		return $(`//*[@resource-id="android:id/button1"]`)
	}
	get btnSubmit() {
		return $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnLetMakeInterview"]'
		)
	}

	get headerDate() {
		return $('//*[@resource-id="android:id/date_picker_header_date"]')
	}

	get tvSignMultiple() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSign"]'
	}

	get ivSign() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivSign"]'
	}

	get interviewBtn() {
		return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnInterview"]');
	}

	get individualContractScreenLabel() {
		return $('//*[@text="Individual Loan"]')
	}
}

module.exports = new NgasayaScreen()
