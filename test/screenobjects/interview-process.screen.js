const Main = require("./main");

class InterviewProcess {
  get clientNameEtBox() {
    return `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etName"]`;
  }
  get clientNameMMEtBox() {
    return $(
      '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etMMName"]'
    );
  }
  get fatherNameEtBox() {
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etFatherName"]';
  }
  get fatherNameMMEtBox() {
    return $(
      '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etMMFatherName"]'
    );
  }
  get downArrow() {
    return $(
      `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivArrow"]`
    );
  }
  get mobileRadioBtn() {
    return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/rbMb"]`);
  }
  get landlineRadioBtn() {
    return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/rblln"]`);
  }
  get phoneNoInputBox() {
    return $(
      `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etPhoneNo"]`
    );
  }
  get houseNoInputBox() {
    return $(
      `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etHouseNo"]`
    );
  }
  get streetNoInputBox() {
    return $(
      `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etStreetNo"]`
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
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnInterview"]';
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

  get inputBox() {
    return $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etText"]`);
  }
  get editText() {
    return `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etText"]`;
  }
  async setLength(index, length) {
    return $(
      `/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${index}]/android.widget.LinearLayout/android.widget.EditText`
    ).setValue(length);
  }
  get businessGroupDropDown() {
    return $(
      `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]`
    );
  }
  get spinner() {
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]';
  }
  get businessTypeDropDown() {
    return $(
      `//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/autoCompleteTv"]`
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
    return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivSign"]');
  }
  get ivImage() {
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivImage"]';
  }
  get tvItem() {
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvItem"]';
  }
  get etNrc() {
    return $(`//*[@resource-id='com.hanamicrofinance.FieldApp.uat:id/etNrc']`);
  }
  get spinnerState() {
    return $(
      `//*[@resource-id='com.hanamicrofinance.FieldApp.uat:id/spinnerState']`
    );
  }
  get spinnerTownshipCode() {
    return $(
      `//*[@resource-id='com.hanamicrofinance.FieldApp.uat:id/spinnerNrcTownShipCode']`
    );
  }
  get spinnerNrcType() {
    return $(
      `//*[@resource-id='com.hanamicrofinance.FieldApp.uat:id/spinnerNrcType']`
    );
  }
  get etNrcNo() {
    return $(
      `//*[@resource-id='com.hanamicrofinance.FieldApp.uat:id/etNRcNo']`
    );
  }
  get androidIcon() {
    return `//*[@resource-id='android:id/icon']`;
  }
  get btnSubmit() {
    return $(
      '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnSubmit"]'
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
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvLabel"]';
  }
  get cropBtn() {
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/crop_image_menu_crop"]';
  }
  get photoIcons() {
    return '//*[@resource-id="com.sec.android.gallery3d:id/deco_view_layout"]';
  }
  get dobEtBox() {
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etDateOfBirth"]';
  }
  get take_photo_btn() {
    return $(
      '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnCamera"]'
    );
  }
  get btnChooseFromGallery() {
    return "com.hanamicrofinance.FieldApp.uat:id/btnChooseFromGallery";
  }
  get chooseFromGalleryBtn() {
    return $(
      '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnChooseFromGallery"]'
    );
  }
  get groupLeaderName() {
    return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvLeaderName"]';
  }
}

module.exports = new InterviewProcess();
