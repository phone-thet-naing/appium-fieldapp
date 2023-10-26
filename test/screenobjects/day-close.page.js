class DayClose {
    get todayAllRepaymentTab() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.cardview.widget.CardView[2]/android.widget.RelativeLayout')
    }

    get todayAllVSavingDeposit() {
        return $('//*[@text="Today All V Saving Deposit"]');
    }

    get dayCloseClientCount() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvNoOfClient"]');
    }

    get submitBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnSubmit"]');
    }

    get confirmBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnConfirm"]');
    }

    get correctCheckBox() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ckCorrect"]');
    }
}

module.exports = new DayClose()