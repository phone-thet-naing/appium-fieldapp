const HomeScreen = require("./home.screen")

class AppointmentScreen {
    get makeAppointmentLabel () {
        return $('//*[@text="MAKE APPOINTMENT"]')
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
    
    get okBtn () {
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

    get createNewGroup() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnCreateNewGroup"]`)
    }

    get actionSpinner() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]`)
    }
    get clearTxtIcon() {
        return $('~Clear text')
    }
    get btnGroupLdr() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/chkGroupLeader"]`)
    }
    get ivDropDown() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]')
    }
    get spinnerItem() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]')
    }
    get checkGroupLeader() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/chkGroupLeader"]`)
    }
    get add_new_client() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddOneMoreClient"]');
    }

    get createNewClientBtn () {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddOneMoreClient"]')
    } 

    get new_member_name_input() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtEnterName"]');
    }
    
    get nameInput() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtEnterName"]')
    }

    get new_member_phone_input() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtEnterPhone"]');
    }
    
    get phoneInput () {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtEnterPhone"]')  
    }

    get new_member_dob_picker() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etDateOfBirth"]');
    }

    get datePicker() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etDateOfBirth"]')
    }

    get new_member_nrc_picker() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etNRcNo"]');
    }

    get new_member_continue_btn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnOk"]');
    }

    async pick_dob() {
        await this.new_member_dob_picker.click();
        await this.dateOkBtn.click();
    }

    get ivDate() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDate"]')
    }

    get radioSelectBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/layoutSelectIcon"]')
    }

    get addNewMemberBtn () {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddNewUser"]');
    }

    get clientNameMp () {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvClientName"]')
    }

    get tvGroupMemberName () {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvGroupMemberName"]';
    }
}

module.exports = new AppointmentScreen()