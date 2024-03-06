const Main = require("./main");

class InterviewProcess {
    get clientNameEtBox() {
        return `//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etName"]`;
    }
    get clientNameMMEtBox() {
        return $(
            '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etMMName"]'
        );
    }
    get fatherNameEtBox() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etFatherName"]';
    }
    get fatherNameMMEtBox() {
        return $(
            '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etMMFatherName"]'
        );
    }
    get downArrow() {
        return $(
            `//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/ivArrow"]`
        );
    }
    get mobileRadioBtn() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/rbMb"]`);
    }
    get landlineRadioBtn() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/rblln"]`);
    }
    get phoneNoInputBox() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etPhoneNo"]');
    }
    get houseNoInputBox() {
        return $(
            `//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etHouseNo"]`
        );
    }
    get streetNoInputBox() {
        return $(
            `//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etStreetNo"]`
        );
    }
    get nextBtn() {
        return $(`//*[@text="NEXT"]`);
    }
    get doneBtn() {
        return $('//*[@text="DONE"]');
    }
    get okBtn() {
        return $('//*[@text="OK"]');
    }
    get btnInterview() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnInterview"]';
    }
    async clickDropDown(index) {
        return $(
            `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${index}]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Spinner`
        ).click();
    }
    async chooseOption(max, min) {
        return $(
            `/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.TextView[${Math.floor(
                Math.random() * (max - min) + min
            )}]`
        ).click();
    }
    async clickDropDown2(index) {
        return $(
            `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${index}]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.Spinner`
        ).click();
    }
    async clickRadioBtn(max, min) {
        $(
            `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[4]/android.widget.LinearLayout/android.widget.RadioGroup/android.widget.RadioButton[${Math.floor(
                Math.random() * (max - min) + min
            )}]`
        ).click();
    }

    get interviewTab() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp:id/tvInterviews"]');
    }

    get inputBox() {
        return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etText"]`);
    }
    get editText() {
        return `//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etText"]`;
    }

    get editTextInputMultiple() {
        return (`//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etText"]`);
    }
    async setLength(index, length) {
        return $(
            `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${index}]/android.widget.LinearLayout/android.widget.EditText`
        ).setValue(length);
    }
    get businessGroupDropDown() {
        return $(
            `//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/spinner"]`
        );
    }
    get spinner() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/spinner"]';
    }
    get businessTypeDropDown() {
        return $(
            `//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/autoCompleteTv"]`
        );
    }
    get businessDetail() {
        return $(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.EditText"
        );
    }
    get businessName() {
        return $(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[4]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.EditText"
        );
    }
    get numberOfWorkers() {
        return $(
            "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[3]/android.widget.LinearLayout/android.widget.EditText"
        );
    }
    async setBusinessExpense(index, amount) {
        return $(
            `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${index}]/android.widget.LinearLayout/android.widget.EditText`
        ).setValue(amount);
    }
    async setPersonalExpense(index, amount) {
        return $(
            `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${index}]/android.widget.LinearLayout/android.widget.EditText`
        ).setValue(amount);
    }
    get signField() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/ivSign"]');
    }
    get ivImage() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/ivImage"]';
    }
    get tvItem() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/tvItem"]';
    }
    get etNrc() {
        return $(`//*[@resource-id='com.hanamicrofinance.FieldApp.debug:id/etNrc']`);
    }
    get spinnerState() {
        return $(
            `//*[@resource-id='com.hanamicrofinance.FieldApp.debug:id/spinnerState']`
        );
    }
    get spinnerTownshipCode() {
        return $(
            `//*[@resource-id='com.hanamicrofinance.FieldApp.debug:id/spinnerNrcTownShipCode']`
        );
    }
    get spinnerNrcType() {
        return $(
            `//*[@resource-id='com.hanamicrofinance.FieldApp.debug:id/spinnerNrcType']`
        );
    }
    get etNrcNo() {
        return $(
            `//*[@resource-id='com.hanamicrofinance.FieldApp.debug:id/etNRcNo']`
        );
    }
    get androidIcon() {
        return `//*[@resource-id='android:id/icon']`;
    }
    get btnSubmit() {
        return $(
            '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnSubmit"]'
        );
    }
    get interviewTypeTabs() {
        return '//*[@class="android.widget.TextView"]';
    }
    get checkBoxes() {
        return '//*[@class="android.widget.CheckBox"]';
    }
    get galleryIcon() {
        return '//*[@resource-id="android:id/icon"]';
    }
    get label() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/tvLabel"]';
    }
    get cropBtn() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/crop_image_menu_crop"]';
    }
    get photoIcons() {
        return '//*[@resource-id="com.sec.android.gallery3d:id/deco_view_layout"]';
    }
    get dobEtBox() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/etDateOfBirth"]';
    }
    get take_photo_btn() {
        return $(
            '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnCamera"]'
        );
    }
    get btnChooseFromGallery() {
        return "com.hanamicrofinance.FieldApp.debug:id/btnChooseFromGallery";
    }
    get chooseFromGalleryBtn() {
        return $(
            '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/btnChooseFromGallery"]'
        );
    }

    get groupLeaderName() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/tvLeaderName"]';
    }

    get tvDropDownTitleMultiple() {
        return '//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/tvDropDownTitle"]'
    }

    get phoneNoPrefixSpinner() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/spnPhNoPrefix"]')
    }

    get tvSpinnerItem() {
        return ('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/tvSpinnerItem"]')
    }

    get interviewsMenu() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/tvInterviews"]');
    }

    get photoCropIcon() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.debug:id/menu_crop"]');
    }
}

module.exports = new InterviewProcess();
