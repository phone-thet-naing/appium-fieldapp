class HomeScreen {

    async initIcons () {
        const {homeIcon, appointmentIcon, uploadIcon, downloadIcon, settingIcon, profileIcon} = await driver.waitUntil(async () => {
            const icons = await $$('//*[@class="android.widget.TextView"]')
        
            if (icons.length < 0) 
                return false 
        
            return {
                homeIcon: icons[3],
				appointmentIcon: icons[6],
                uploadIcon: icons[9],
				downloadIcon: icons[12],
                settingIcon: icons[15],
				profileIcon: icons[18]
            }
        })

        return {homeIcon, appointmentIcon, uploadIcon, downloadIcon, settingIcon, profileIcon}
    }

    async getHomeIcon () {
        const icons = await this.initIcons()
        return icons.homeIcon
    }

    async getAppointmentIcon () {
        const icons = await this.initIcons()
        return icons.appointmentIcon
    }

    async getUploadIcon () {
        const icons = await this.initIcons()
        return icons.uploadIcon 
    }

    async getDownloadIcon () {
        const icons = await this.initIcons()
        return icons.downloadIcon
    }

    async goToHome () {
        const homeIcon = await this.getHomeIcon()
        await homeIcon.click()
    }

    async goToAppointment () {
        const appointmentIcon = await this.getAppointmentIcon()
        await appointmentIcon.click()
    }

    get clientMenu() {
        return $('//*[@text="Clients"]');
    }

    get viewMoreIcon() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivMore"]');
    }

    get viewGroup() {
        return ('//*[@class="android.view.View"]');
    }

    get foDayCloseMenu() {
        return $('//*[@text="FO Day Close"]');
    }

    get appointmentIcon() {
        // return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[5]/android.widget.TextView") 
        return $('//*[@text=""]');
    }

    get collectionMenu() {
        return $('//*[@text="Collection"]');    
    }

    get toInterview() {
        return $('//*[@text="To Interview"]')
        // /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[6]
    }

    get districtDropdown() {
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout")
    }

    get townDropdown() {
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout")
    }

    get wardLeafDropdown() {
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[3]/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout")
    }

    get dateDropdown() {
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.TextView[2]")
    }

    get dateOkBtn() {
        return $('//*[@text="OK"]')
    }

    get loanTypeDropdown() {
        return $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout/android.widget.TextView")
    }

    get continueBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddClient"]')
    }

    get addExistingMemberIcon() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvAddExistingClients"]')
    }
    get addBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddExistingClient"]')
    }

    get createAppointmentBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnCreateAppointment"]')
    }

    get searchBar() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtSearchExistingClient"]`)
    }

    get createNewNgasayaBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnCreateNewNgasaya"]')
    }

    get disbursement() {
        return ('//*[@text="Disbursement"]')
    }

    get uploadConfirm() {
        return $('//*[@text="UPLOAD"]')
    }

    get nativeDownloadSuccessBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnGoBackSuccess"]');
    }

    get successContinueBtn() {
        return ('//*[@text="CONTINUE"]')
    }

    get downloadBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View[4]/android.view.View[2]');
    }

    get downloadBtn1() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[4]/android.widget.TextView')
    }

    get downloadConfirmBtn() {
        return ('//*[@text="DOWNLOAD"]')
    }

    get downloadWarning() {
        return ('//*[@text="ကျေးဇူးပြု၍ ခဏစောင့်ပေးပါ... ၃ မိနစ်မှ ၅ မိနစ် အထိ ကြာမြင့်နိုင်ပါသည်။ ကျေးဇူးပြု၍ ဖုန်းပိတ်ခြင်း၊ application မှ ထွက်ခြင်းတို့ကို မပြုပါရန်"]')
    }

    get uploadBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[3]/android.widget.TextView')
    }

    get goToSettingBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnGoToSetting"]');
    }

    get permissions() {
        return $('//*[@text="Permissions"]');
    }

    get permissionLocationTab() {
        return $('//*[@text="Location"]');
    }

    get allowAllTheTimeButton() {
        return $('//*[@text="Allow all the time"]');
    }

    async navigateToInterventionAssessment() {
        return true;
    }
}

module.exports = new HomeScreen();
// export default new HomeScreen()