class DisbursementScreen {
    get disbursementCount() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvItem"]')
    }

    get disburseBtn() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnDisburse"]')
    }

    get undisburseBtn() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnUnDisburse"]')
    }
}

module.exports = new DisbursementScreen()