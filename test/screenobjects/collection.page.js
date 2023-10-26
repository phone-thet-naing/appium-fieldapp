class CollectionPage {

    get todayAllRepaymentTab() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.cardview.widget.CardView[2]/android.widget.RelativeLayout')
    }

    get filter() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivFilter"]')
    }

    get vSavingMenu() {
        return $('~V Saving Deposit');
    }

    get dropDownIcon() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]')
    }

    get applyFilterBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnApplyFilter"]')
    }

    get clearFilterBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnClearFilter"]')
    }

    get collectionItem() {
        return ('//*[@class="android.view.ViewGroup"]')
    }

    get makeRepaymentBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnMakeRepayment"]')
    }

    get repaymentAmountWarning() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvWarningText"]')
    }

    get vSavingDepositSubmitBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnMakeVSavingDeposit"]');
    }

    get totalAmount() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvTotalAmount"]')
    }

    get totalAmountEditText() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etTotalAmount"]')
    }

    get depositAmountEditText() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtTotalDepositPaidAmount"]');
    }

    get remarkEditText() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etRemark"]')
    }

    get overdueCollectionDDItem() {
        return $('//*[@text="Overdue Collection"]');
    }

    get clientName() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvName"]');
    }

    get tvName() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvName"]');
    }

    get repaymentBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnRepayment"]');
    }

    get unknownCollection() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnUnknownCollection"]');
    }

    async filterCollectionType(collectionType) {

    }
}

module.exports = new CollectionPage()