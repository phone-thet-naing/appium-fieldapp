/**
 * This is a ngasaya helper function
 */
const Main = require("../screenobjects/main");

const Scroll = require("../utils/custom-scroll");
const NgasayaScreen = require("../screenobjects/ngasaya-contract.screen");
const Util = require("../utils/utility-functions");
const HomeScreen = require("../screenobjects/home.screen");

class NgasayaContract {
  async makeNgaSaYaContract(ngasayaData) {
    if (!(await $(NgasayaScreen.loanAmountEditText).isDisplayed())) {
      await Util.scrollIntoView(
        undefined,
        "com.hanamicrofinance.FieldApp.uat:id/edtLoanAmount"
      );
    }
    const loanAmountEdtTextList = await driver.$$(
      NgasayaScreen.loanAmountEditText
    );

    // Enter loan amount for each client
    for (const loanAmountEdtText of loanAmountEdtTextList) {
      if ((await loanAmountEdtText.getText()) === "Enter Amount") {
        await loanAmountEdtText.setValue(
          Math.floor(Math.random() * 2 + 8) * 100000
        );
      }
    }

    const loanNameOption = ngasayaData["loan_name"];
    // Choosing Loan Name Option
    while (!(await NgasayaScreen.spinnerLoanProduct.isExisting())) {
      await Util.scrollIntoView(
        undefined,
        "com.hanamicrofinance.FieldApp.uat:id/spinnerLoanProduct"
      );
    }

    await Main.asyncClick(NgasayaScreen.spinnerLoanProduct);

    const loanNameSelector = await $(`//*[@text="${loanNameOption}"]`);

    while (!(await loanNameSelector.isExisting())) {
      await Util.scrollTextIntoViewByClass(
        "android.widget.ListView",
        loanNameOption
      );
    }
    await Main.asyncClick(await loanNameSelector);

    // If "အင်တာဗျူးအသစ်လုပ်ရမည်" was prompted
    if (await NgasayaScreen.confirmBtn.isExisting()) {
      await NgasayaScreen.confirmBtn.click();
    }

    // Repayment Frequency
    const repaymentFrequencyOption = ngasayaData["repayment_frequency"];
    const repaymentFrequencySelector = await $(
      `//*[@text="${repaymentFrequencyOption}"]`
    );
    while (!(await NgasayaScreen.spinnerLoanTermFrequency.isDisplayed())) {
      await Util.scrollIntoView(
        undefined,
        "com.hanamicrofinance.FieldApp.uat:id/spinner"
      );
    }
    await Main.asyncClick(NgasayaScreen.spinnerLoanTermFrequency);

    while (!(await repaymentFrequencySelector.isExisting())) {
      await Util.scrollTextIntoViewByClass(
        "android.widget.ListView",
        repaymentFrequencyOption
      );
    }
    await Main.asyncClick(repaymentFrequencySelector);

    console.log(
      "date picker is displayed => ",
      await NgasayaScreen.firstRepaymentDatePicker.isDisplayed()
    );
    while (!(await NgasayaScreen.firstRepaymentDatePicker.isDisplayed())) {
      await Util.scrollIntoView(
        "android.widget.ScrollView",
        "com.hanamicrofinance.FieldApp.uat:id/ivFirstRepaymentDate"
      );
    }

    // Disbursement Date
    await NgasayaScreen.disbursementDatePicker.click();
    await this.chooseValidDate();
    await NgasayaScreen.btnOk.click();

    // First Repayment Date
    await NgasayaScreen.firstRepaymentDatePicker.click();
    await this.chooseValidDate();
    await $(`//*[@text="OK"]`).click();

    if (!(await $(NgasayaScreen.ivSign).isDisplayed())) {
      await Util.scrollIntoView(
        "android.widget.ScrollView",
        "com.hanamicrofinance.FieldApp.uat:id/ivSign"
      );
    }

    let signFieldList = null;

    // Signature
    if (await $(NgasayaScreen.ivSign).isExisting()) {
      signFieldList = await driver.waitUntil(async () => {
        const tvSignList = await $$(NgasayaScreen.ivSign);

        if (tvSignList.length < 2) {
          return false;
        }

        return tvSignList;
      });
    } else {
      signFieldList = await driver.waitUntil(async () => {
        const tvSignList = await $$(NgasayaScreen.tvSignMultiple);

        if (tvSignList.length < 2) {
          return false;
        }

        return tvSignList;
      });
    }

    for (const currentSignField of signFieldList) {
      await currentSignField.click();
      await driver.pause(1500);
      await Util.drawSignature();
    }

    await NgasayaScreen.saveNgasayaBtn.click(); // save ngasaya

    await NgasayaScreen.confirmBtn.waitForExist({
      timeout: 3000,
    });
    await NgasayaScreen.confirmBtn.click();

    await expect(await HomeScreen.appointmentIcon).toExist();
  }

  async makeIdlContract(ngasayaData) {
    // choose loan name and repayment frequency
    const ivDropDownList = await $$(NgasayaScreen.ivDropDown);
    for (let i = 0; i < ivDropDownList.length; i++) {
      await ivDropDownList[i].click();
      const loanNameOption = ngasayaData["loan_name"];
      switch (i) {
        case 0:
          await Util.scrollTextIntoViewByClass(
            "android.widget.ListView",
            loanNameOption
          );
          await $(`//*[@text="${loanNameOption}"]`).click();
          // If "အင်တာဗျူးအသစ်လုပ်ရမည်" was prompted
          if (await NgasayaScreen.confirmBtn.isExisting()) {
            await NgasayaScreen.confirmBtn.click();
          }
          break;

        case 1:
          const repaymentOption = ngasayaData["repayment_frequency"];
          await Util.scrollTextIntoViewByClass(
            "android.widget.ListView",
            repaymentOption
          );
          await $(`//*[@text="${repaymentOption}"]`).click();
          break;

        default:
          break;
      }
    }

    // Enter loan amount for each client
    const loanAmountEdtTextList = await driver.$$(
      NgasayaScreen.loanAmountEditText
    );
    for (const loanAmountEdtText of loanAmountEdtTextList) {
      if ((await loanAmountEdtText.getText()) == "Enter Amount") {
        await loanAmountEdtText.setValue(
          Math.floor(Math.random() * 2 + 8) * 100000
        );
      }
    }

    while (!(await NgasayaScreen.firstRepaymentDatePicker.isDisplayed())) {
      await Util.scrollIntoView(
        "android.widget.ScrollView",
        "com.hanamicrofinance.FieldApp.uat:id/ivFirstRepaymentDate"
      );
    }

    // Disbursement Date
    await NgasayaScreen.disbursementDatePicker.click();
    await this.chooseValidDate();
    // await $(`~${ngasayaData["disbursement_date"]}`).click();
    await NgasayaScreen.btnOk.click();

    // First Repayment Date
    await NgasayaScreen.firstRepaymentDatePicker.click();
    // await $(`~${ngasayaData["first_repayment_date"]}`).click();
    await this.chooseValidDate();
    await $(`//*[@text="OK"]`).click();

    // Click 'အင်တာဗျူးမည်'
    await NgasayaScreen.btnSubmit.click();
  }

  async chooseValidDate() {
    let headerDate = (await Main.asyncGetText(NgasayaScreen.headerDate)).split(
      " "
    );
    let nextDay =
      parseInt(headerDate[headerDate.length - 2]) === NaN
        ? parseInt(headerDate[headerDate.length - 1]) + 1
        : parseInt(headerDate[headerDate.length - 2]) + 1;
    let headerDayofWeek = null;
    let isValid = false;

    while (!isValid) {
      if (!(await $(`//*[@text="${nextDay}"]`).isExisting())) {
        await $('//*[@resource-id="android:id/next"]').click();
        nextDay = 1;
      }
      await $(`//*[@text="${nextDay}"]`).click();
      headerDayofWeek = (
        await Main.asyncGetText(NgasayaScreen.headerDate)
      ).split(" ")[0];
      console.log("day of week => ", headerDayofWeek === "Sat,");
      console.log("isValid => ", isValid);

      if (headerDayofWeek !== "Sat," && headerDayofWeek !== "Sun,") {
        isValid = true;
      } else {
        nextDay++;
      }
    }
  }
}

module.exports = new NgasayaContract();
