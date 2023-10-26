const HomeScreen = require("./home.screen")

class AppointmentScreen {
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
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnAddClient"]')
    }

    get addExistingMemberIcon() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/tvAddExistingClients"]')
    }
    get addBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnAddExistingClient"]')
    }

    get createAppointmentBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnCreateAppointment"]')
    }

    get searchBar() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/edtSearchExistingClient"]`)
    }

    get createNewNgasayaBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnCreateNewNgasaya"]')
    }

    get createNewGroup() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnCreateNewGroup"]`)
    }

    get actionSpinner() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/spinner"]`)
    }
    get clearTxtIcon() {
        return $('~Clear text')
    }
    get btnGroupLdr() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/chkGroupLeader"]`)
    }
}

module.exports = new AppointmentScreen()