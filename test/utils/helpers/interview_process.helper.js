const HomeScreen = require("../../screenobjects/home.screen");
const InterviewProcess = require("../../screenobjects/interview-process.screen");
const Util = require("../utility-functions");
const Main = require("../../screenobjects/main");

class InterviewProcessHelper {
  async navigateToInterview(desiredGroupLeader) {
    // await HomeScreen.toInterview.click()
    // await $(InterviewProcess.interviewTypeTabs).waitForExist({ timeout: 5000 })
    await InterviewProcess.downArrow.waitForExist();
    // click drop-down icon under group loans
    await InterviewProcess.downArrow.click();

    // const groupLeaderNameList = await $$(InterviewProcess.groupLeaderName);
    const groupLeaderNameList = await Main.setMultipleElements(
      InterviewProcess.groupLeaderName
    );
    console.log(groupLeaderNameList, groupLeaderNameList.length);
    await groupLeaderNameList[groupLeaderNameList.length - 1].click();

    // const leaderNameList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvLeaderName"]')

    // for (const leaderName of leaderNameList) {
    //     const trimmedName = (await leaderName.getText()).split('(')[0].trim()
    //     if (desiredGroupLeader == trimmedName) {
    //         await leaderName.click()
    //         break
    //     }
    // }

    // choose the interview
    // await Util.scrollTextIntoViewByResourcdId('com.hanamicrofinance.FieldApp.uat:id/viewPager', data)
    // await $(`//*[@text="${data}"]`).click()
  }

  async chooseIndividualIterview(data) {
    await HomeScreen.toInterview.click();
    await $(InterviewProcess.interviewTypeTabs).waitForExist({
      timeout: 5000
    });
    const items = await $$(InterviewProcess.interviewTypeTabs);
    await items[2].click();
    await Util.scrollTextIntoViewByResourcdId(
      "com.hanamicrofinance.FieldApp.uat:id/viewPager",
      data
    );
    await $(`//*[@text="${data}"]`).click();
  }

  async clientInfoPage(group_data) {
    // Fill client name
    if ((await $(InterviewProcess.clientNameEtBox).getText()) == "") {
      await $(InterviewProcess.clientNameEtBox).setValue("Ba");
    }
    if ((await InterviewProcess.clientNameMMEtBox.getText()) == "") {
      await InterviewProcess.clientNameMMEtBox.setValue("ဟားဟား");
    }

    // Phone Number
    await InterviewProcess.phoneNoInputBox.setValue("969000000");
    // if (await InterviewProcess.phoneNoInputBox.getText() == "") {
    // }

    // fill nrc
    if ((await InterviewProcess.etNrc.getText()) === "") {
      await this.fillNrc();
    }
    // fill dob
    if ((await $(InterviewProcess.dobEtBox).getText()) == "") {
      await $(InterviewProcess.dobEtBox).click();
      await InterviewProcess.okBtn.click();
    }
    if ((await $(InterviewProcess.fatherNameEtBox).getText()) == "") {
      await $(InterviewProcess.fatherNameEtBox).setValue("Ba");
    }

    await Util.scrollToEndByClass();

    if ((await InterviewProcess.fatherNameMMEtBox.getText()) == "") {
      await InterviewProcess.fatherNameMMEtBox.setValue("ဟီးဟီး");
    }

    const houseNo = "no " + Math.floor(Math.random() * 30);
    const streetNo = "no " + Math.floor(Math.random() * 50);
    if ((await InterviewProcess.houseNoInputBox.getText()) == "") {
      await InterviewProcess.houseNoInputBox.setValue(houseNo);
    }
    if ((await InterviewProcess.streetNoInputBox.getText()) == "") {
      await InterviewProcess.streetNoInputBox.setValue(streetNo);
    }
    await InterviewProcess.nextBtn.click();
  }

  async personalDetailPage() {
    await $('//*[@text="PERSONAL DETAIL"]').waitForExist({
      timeout: 6000
    });
    // // ပညာအရည်အချင်း
    // await InterviewProcess.clickDropDown(1)
    // await InterviewProcess.chooseOption(5, 1)
    // // အိမ်ထောင်ရှိမရှိ
    // await InterviewProcess.clickDropDown(2)
    // await InterviewProcess.chooseOption(4, 1)
    // // ကိုးကွယ်သည့်ဘာသာ
    // await InterviewProcess.clickDropDown(3)
    // await InterviewProcess.chooseOption(5, 1)
    // // ဘဏ်စာအုပ်ရှိမရှိ
    // await InterviewProcess.clickRadioBtn(2, 1)
    // // ဘဏ်အမည်
    // await InterviewProcess.clickDropDown2(4)
    // await InterviewProcess.chooseOption(7, 1)
    // click Next
    await InterviewProcess.nextBtn.click();
  }

  async householdDetailPage() {
    // အတူနေမိသားစုဦးရေ
    // await InterviewProcess.nextBtn.click()
    await Main.asyncClick(InterviewProcess.nextBtn);
  }

  async earningFamilyMemberPage() {
    // ဝင်ငွေရှာနိုင်သည့် မိသားစုဝင်အရေအတွက်
    const value = Math.floor(Math.random() * 3 + 1);
    if ((await InterviewProcess.inputBox.getText()) == "") {
      await InterviewProcess.inputBox.setValue(value);
    }
    // await InterviewProcess.nextBtn.click();
    await Main.asyncClick(InterviewProcess.nextBtn);
  }

  async householdVerificationPage() {
    // အိမ်တန်ဖိုး
    await expect(await $('//*[@text="အိမ်တည်နေရာ"]')).toExist();

    const houseValue = Math.floor(Math.random() * 90 + 10) * 100000;
    if ((await InterviewProcess.inputBox.getText()) == "") {
      await InterviewProcess.inputBox.setValue(houseValue);
    }

    await Util.scrollToText("အိမ်အကျယ်အဝန်း - အလျားပေ *");
    // set house length and breadth
    const inputBoxList = await $$(InterviewProcess.editText);
    for (const inputBox of inputBoxList) {
      if ((await inputBox.getText()) == "") {
        await inputBox.setValue(Math.floor(Math.random() * 35 + 15));
      }
    }
    while (!await InterviewProcess.nextBtn.isDisplayed()) {
      await Util.scrollTextIntoViewByClass(undefined, "NEXT");
    }

    await Main.asyncClick(InterviewProcess.nextBtn);
  }

  async currentLoanAndCreditHistoryPage() {
    await expect(
      await $(
        '//*[@text="အခြား microfinance အဖွဲ့အစည်းများတွင် ပြန်ဆပ်ရန်ကျန်ရှိသော ချေးငွေ အရေအတွက် *"]'
      )
    ).toExist();
    if ((await InterviewProcess.inputBox.getText()) == "") {
      await InterviewProcess.inputBox.setValue(
        Math.floor(Math.random() * 3 + 1)
      );
    }
    await InterviewProcess.nextBtn.click();
  }

  async businessProfilePage(interviewType) {

    if (!await $('//*[@text="လုပ်ငန်း အမျိုးအစား *"]').isDisplayed() || !await $('//*[@text="လက်ရှိ လုပ်ငန်းအုပ်စု *"]').isDisplayed()) {
      await Util.scrollToBeginning();
    }

    // Set Business Group and Business Type
    const businessGroupDropdown = await $(InterviewProcess.spinner);
    await businessGroupDropdown.click();
    await $(InterviewProcess.tvItem).waitForExist({
      timeout: 3000
    });
    const businessTypeItems = await $$(InterviewProcess.tvItem);
    await businessTypeItems[Math.floor(Math.random() * 4)].click();
    const inputs = await $$(InterviewProcess.editText);

    // Set input for each text box
    if (interviewType == "individual") {
      for (let i = 0; i < inputs.length; i++) {
        switch (i) {
          case 0:
            // Business Detail
            if ((await inputs[i].getText()) == "") {
              await inputs[i].setValue("Business Detail");
            }
            break;
          case 1:
            // Investment amount
            if ((await inputs[i].getText()) == "") {
              await inputs[i].setValue(1000000);
            }
            break;
          case 2:
            // Business name
            if ((await inputs[i].getText()) == "") {
              await inputs[i].setValue("Business Name");
            }
            break;
          default:
            break;
        }
      }
    } else if (interviewType == "group") {
      for (let i = 0; i < inputs.length; i++) {
        switch (i) {
          case 0:
            // Business Detail
            if ((await inputs[i].getText()) == "") {
              await inputs[i].setValue("Business Detail");
            }
            break;
          case 1:
            // Investment amount
            if ((await inputs[i].getText()) == "") {
              await inputs[i].setValue(1000000);
            }
            break;
          case 2:
            // Business name
            if ((await inputs[i].getText()) == "") {
              await inputs[i].setValue("Business Name");
            }
            break;
          default:
            break;
        }
      }
    }

    await Util.scrollTextIntoViewByClass(
      "android.widget.ScrollView",
      "အလုပ်သမား ဦးရေ *"
    );

    const numberOfWorkers = await $(InterviewProcess.editText);
    if (await numberOfWorkers.getText() == "") {
      await numberOfWorkers.setValue(10);
    }

    // If it was Individual Interview
    if (interviewType == "individual") {
      const advantageOfLocation = await $$(InterviewProcess.checkBoxes);
      await advantageOfLocation[Math.floor(Math.random() * 3)].click();
      await Util.scrollToEndByClass();

      const timeOfConvenienceList = await $$(InterviewProcess.checkBoxes);
      await timeOfConvenienceList[Math.floor(Math.random() * 3)].click();
    }

    // if NEXT button was not displayed in DOM scroll to it
    while (!await InterviewProcess.nextBtn.isDisplayed()) {
      await Util.scrollTextIntoViewByClass(undefined, 'NEXT');
    }
    await InterviewProcess.nextBtn.click();
  }

  async otherIncomePage() {

    await expect(await $('//*[@text="အခြား ဝင်ငွေ အရေအတွက်"]')).toExist();
    const inputBoxes = await $$(InterviewProcess.editText);
    for (const item of inputBoxes) {
      if ((await item.getText()) == "") {
        await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000);
      }
    }
    if (!(await InterviewProcess.nextBtn.isExisting())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }
  async businessInocmePage() {
    const inputBoxes = await $$(InterviewProcess.editText);
    for (const item of inputBoxes) {
      if ((await item.getText()) == "") {
        await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000);
      }
    }
    if (!(await InterviewProcess.nextBtn.isExisting())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  async businessExpensePage() {
    const inputBoxes = await $$(InterviewProcess.editText);
    for (const item of inputBoxes) {
      if ((await item.getText()) == "") {
        await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000);
      }
    }
    if (!(await InterviewProcess.nextBtn.isExisting())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  async personalExpensePage() {
    let inputBoxList = await $$(InterviewProcess.editText);
    for (const inputBox of inputBoxList) {
      if ((await inputBox.getText()) == "") {
        await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000);
      }
    }
    // await Util.scrollToEndByClass();

    // inputBoxList = await $$(InterviewProcess.editText);
    // for (const inputBox of inputBoxList) {
    //   if ((await inputBox.getText()) == "") {
    //     await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000);
    //   }
    // }
    if (!(await InterviewProcess.nextBtn.isExisting())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  async currentAssetsPage() {
    // let inputBoxList = await $$(InterviewProcess.editText);
    // for (const inputBox of inputBoxList) {
    //   if ((await inputBox.getText()) == "") {
    //     await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000);
    //   }
    // }
    if (!(await InterviewProcess.nextBtn.isExisting())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  async longTermAssetsPage() {
    let inputBoxList = await $$(InterviewProcess.editText);
    for (const inputBox of inputBoxList) {
      if ((await inputBox.getText()) == "") {
        await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000);
      }
    }
    const checkBoxes = await $$(InterviewProcess.checkBoxes);
    await checkBoxes[Util.getRandomIndex(checkBoxes.length - 1, 0)].click();

    if (!(await InterviewProcess.nextBtn.isExisting())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  async liabilitiesPage() {
    let inputBoxList = await $$(InterviewProcess.editText);
    for (const inputBox of inputBoxList) {
      if ((await inputBox.getText()) == "") {
        await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000);
      }
    }

    if (!(await InterviewProcess.nextBtn.isExisting())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  async loanInformationPage(loanInformationData) {
    const inputBoxList = await $$(InterviewProcess.editText);
    for (let i = 0; i < inputBoxList.length; i++) {
      if (i == 0) {
        const randomNumber = Math.floor(Math.random() * 8 + 4);
        console.log("randomNumber --> ", randomNumber);
        await inputBoxList[i].setValue(randomNumber);
      } else if (i == 1) {
        await inputBoxList[i].setValue("Dummy Reason");
      }
    }
    // const spinnerList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]')
    await $(InterviewProcess.spinner).waitForExist({
      timeout: 3000
    });
    const spinnerList = await $$(InterviewProcess.spinner);
    for (let i = 0; i < spinnerList.length; i++) {
      await spinnerList[i].click();
      await $(InterviewProcess.tvItem).waitForExist({
        timeout: 3000
      });
      const items = await $$(InterviewProcess.tvItem);
      const randomIndex = Math.floor(Math.random() * (items.length - 1));
      console.log("item size --> " + items.length);
      console.log("random index --> " + randomIndex);
      await items[randomIndex].click();
    }
    await InterviewProcess.nextBtn.click();
  }

  async clientAppPage() {
    await InterviewProcess.nextBtn.click();
  }

  async fillNrc() {
    await InterviewProcess.etNrc.click();
    await InterviewProcess.spinnerState.waitForExist({
      timeout: 3000
    });
    await InterviewProcess.spinnerState.click();
    await $(`//*[@text="၉"]`).click();
    await InterviewProcess.spinnerTownshipCode.click();
    await $(`//*[@text="မရမ"]`).click();
    await InterviewProcess.spinnerNrcType.click();
    await $(`//*[@text="နိုင်"]`).click();
    await InterviewProcess.etNrcNo.setValue("000123");
    await $(`//*[@text="OK"]`).click();
  }

  async guarantorPage(isGroupInterview = false) {
    const itemList = await $$(InterviewProcess.editText);
    for (let i = 0; i < itemList.length; i++) {
      switch (i) {
        case 0:
          await itemList[i].setValue("Mr. Guarantor");
          break;

        case 1:
          await itemList[i].setValue("U Ba");
          break;

        default:
          break;
      }
    }
    if (isGroupInterview) {
      if (await InterviewProcess.etNrc.isDisplayed()) {
        await this.fillNrc();
      }
    } else {
      let inputBoxes = await $$(InterviewProcess.editText);
      for (let i = 2; i < inputBoxes.length; i++) {
        await inputBoxes[i].setValue(
          Math.floor(Math.random() * 4 + 1) * 100000
        );
      }

      await Util.scrollTextIntoViewByClass(
        "android.widget.ScrollView",
        "လစဉ် အခြားဝင်ငွေများ"
      );
      inputBoxes = await $$(InterviewProcess.editText);
      for (const item of inputBoxes) {
        if ((await item.getText()) == "") {
          await item.setValue(Math.floor(Math.random() * 4 + 1) * 100000);
        }
      }
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  // async uploadPhoto() {
  //     console.log('uploadPhoto init')
  //     await $('//*[@text="Select source"]').waitForExist({ timeout: 5000 })
  //     await $(InterviewProcess.galleryIcon).waitForExist({ timeout: 5000 })
  //     if (await $(InterviewProcess.galleryIcon).isExisting()) {
  //         console.log('Gallery icons found')
  //     } else {
  //         console.log('Gallery icons not found')
  //     }
  //     const icons = await $$(InterviewProcess.galleryIcon)
  //     console.log('Gallery icons found --> ', icons.length) // must be 3
  //     // const icons = await $$(InterviewProcess.androidIcon)
  //     await icons[2].click()
  //     await $('//*[@text="appium"]').waitForExist({ timeout: 3000 })
  //     await $('//*[@text="appium"]').click()
  //     await $('//*[@text="Select item"]').waitForExist({ timeout: 3000 })
  //     await $(InterviewProcess.photoIcons).waitForExist({ timeout: 3000 })
  //     const photos = await $$(InterviewProcess.photoIcons)
  //     console.log('photos size --> ', photos.length)
  //     const photoCount = photos.length
  //     await photos[Math.floor(Math.random() * (photoCount))].click()
  //     await $('//*[@text="CROP"]').waitForExist({ timeout: 3000 })
  //     await $(InterviewProcess.cropBtn).waitForExist({ timeout: 3000 })
  //     await $(InterviewProcess.cropBtn).click()
  //     console.log('uploadPhoto terminate')
  // }

  async uploadPhoto() {
    await InterviewProcess.take_photo_btn.click();
    await Util.tap(542, 2030);
    await InterviewProcess.okBtn.waitForExist();
    await InterviewProcess.okBtn.click();
  }

  async uploadRequiredPhotos(requiredFields) {
    for await (const fieldName of requiredFields) {
      while (!(await $(`//*[@text="${fieldName}"]`).isDisplayed())) {
        await Util.scrollTextIntoViewByClass(
          "android.widget.ScrollView",
          fieldName
        );
      }

      const {
        x,
        y
      } = await $(`//*[@text="${fieldName}"]`).getLocation();
      await Util.tap(x + 100, y + 100);
      if (!(await InterviewProcess.chooseFromGalleryBtn.isExisting())) {
        await driver.back();
        continue;
      }
      await this.uploadPhotoFromGallery();
    }
  }

  async drawRequiredSignature(signFieldName) {
    while (!(await $(`//*[@text="${signFieldName}"]`).isDisplayed())) {
      await Util.scrollTextIntoViewByClass(
        "android.widget.ScrollView",
        signFieldName
      );

      const {
        x,
        y
      } = await $(`//*[@text="${signFieldName}"]`).getLocation();
      // await Util.tap(x + 50, y + 50);
      await await InterviewProcess.signField.click();
      await Util.drawSignature();
    }
  }

  async uploadPhotoFromGallery() {
    await InterviewProcess.chooseFromGalleryBtn.waitForExist({ timeoutMsg: 'gallery button not found' });
    await InterviewProcess.chooseFromGalleryBtn.click();

    const firstPhotoIcon = await driver.waitUntil(async () => {
      const photoIcons = await $$('//*[@resource-id="com.google.android.documentsui:id/icon_thumb"]');
      if (photoIcons.length === 0) {
        return false;
      }

      return photoIcons[0];
    }, {
      timeoutMsg: 'Photo icons not displayed'
    })

    console.log('first photo icon => ', firstPhotoIcon);

    await firstPhotoIcon.click();

    await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/menu_crop"]').waitForExist({ timeoutMsg: 'crop icon not found' })
    await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/menu_crop"]').click();
  }

  async attachmentGuarantorPage() {

    while (!await InterviewProcess.signField.isDisplayed()) {
      await Util.scrollIntoView(undefined, "com.hanamicrofinance.FieldApp.uat:id/ivSign");
    }
    await Main.asyncClick(InterviewProcess.signField);
    await Util.drawSignature();

    while (!(await InterviewProcess.nextBtn.isDisplayed())) {
      await Util.scrollTextIntoViewByClass(undefined, "NEXT");
    }
    await InterviewProcess.nextBtn.click();
  }

  async attachmentClientPage() {
    const requiredFields = [
      "Client Photo *",
      "Client NRC Front *",
      "Client NRC Back *",
      "Client Household list *",
    ];

    await this.uploadRequiredPhotos(requiredFields);

    while (!await InterviewProcess.signField.isDisplayed()) {
      await Util.scrollIntoView(undefined, "com.hanamicrofinance.FieldApp.uat:id/ivSign");
    }
    await Main.asyncClick(InterviewProcess.signField);
    await Util.drawSignature();

    while (!(await InterviewProcess.nextBtn.isDisplayed())) {
      await Util.scrollToEndByClass();
    }
    await InterviewProcess.nextBtn.click();
  }

  async attachmentLoanPage() {
    while (!(await InterviewProcess.nextBtn.isDisplayed())) {
      await Util.scrollTextIntoViewByClass(undefined, 'NEXT');
    }
    await InterviewProcess.nextBtn.click();
  }

  async attachmentCoApplicant() {
    await Util.scrollTextIntoViewByClass(
      "android.widget.ScrollView",
      "Co-applicant photo *"
    );
    const attachmentList = await $$(InterviewProcess.ivImage);
    for (const currentAttachment of attachmentList) {
      await currentAttachment.click();
      await this.uploadPhoto();
    }
    await Util.scrollToEndByClass();
    await InterviewProcess.signField.click();
    await Util.drawSignature();
    await InterviewProcess.nextBtn.click();
  }

  async cashFlowPage() {
    await InterviewProcess.nextBtn.waitForExist({ timeoutMsg: 'next button not displayed on cash flow screen' })
    await InterviewProcess.nextBtn.click();
  }

  async evaluationPage() {

    while (!await InterviewProcess.nextBtn.isDisplayed()) {
      await Util.scrollTextIntoViewByClass(undefined, 'NEXT');
    }
    // await expect(await $(InterviewProcess.editText)).toExist({ timeoutMsg: 'Edit box not found' });
    await $(InterviewProcess.editText).waitUntil(async () => {
      const editTextList = await $$(InterviewProcess.editText);
      return editTextList.length === 3
    }, {
      timeoutMsg: 'edit text not found'
    })

    const textBoxes = await $$(InterviewProcess.editText);
    for (let i = 0; i < textBoxes.length; i++) {
      switch (i) {
        case 0:
          if (await textBoxes[i].getText() == "") {
            await textBoxes[i].setValue("ကောင်း");
          }
          break;

        case 1:
          if (await textBoxes[i].getText() == "") {
            await textBoxes[i].setValue("800000");
          }
          break;

        case 2:
          if (await textBoxes[i].getText() == "") {
            await textBoxes[i].setValue("the reason");
          }
          break;

        default:
          break;
      }
    }

    // try {
    //   if (await $(InterviewProcess.editText).getText() != "") {
    //     while (!await InterviewProcess.nextBtn.isDisplayed()) {
    //       await Util.scrollTextIntoViewByClass(undefined, 'NEXT');
    //     }
    //     await InterviewProcess.nextBtn.click();
    //   }
    // } catch (error) {
    //   throw error
    // }

    await InterviewProcess.nextBtn.waitForExist()
    await InterviewProcess.nextBtn.click()
  }

  async loanSummary() {
    await InterviewProcess.nextBtn.waitForExist();
    await InterviewProcess.nextBtn.click();
  }

  async assetSummary() {
    await Util.scrollToEndByClass();
    await InterviewProcess.doneBtn.click();
  }

  async coApplicant() {
    const edTextList1 = await $$(InterviewProcess.editText);
    for (let i = 0; i < edTextList1.length; i++) {
      switch (i) {
        case 0:
          if (await edTextList1[i].getText() == "") {
            await edTextList1[i].setValue("Mr. Dummy Name");
          }
          break;

        case 1:
          if (await edTextList1[i].getText() == "") {
            await edTextList1[i].setValue("09751999000");
          }
          break;

        default:
          break;
      }
    }
    await this.fillNrc();
    await Util.scrollToEndByClass();

    const addressBox = await driver.waitUntil(async () => {
      const edTextList = await $$(InterviewProcess.editText);
      if (edTextList.length == 0) {
        return false;
      }

      return edTextList[edTextList.length - 1]
    })
    await addressBox.setValue('အမှတ် ၁ နှင်းဆီလမ်း ကမာရွတ်မြို့နယ် ရန်ကုန်မြို့')

    // const edTextList2 = await $$(InterviewProcess.editText);
    // await edTextList2[edTextList2.length - 1].setValue(
    //   "အမှတ် ၁ နှင်းဆီလမ်း ကမာရွတ်မြို့နယ် ရန်ကုန်မြို့"
    // );
    await InterviewProcess.nextBtn.waitForExist()
    await InterviewProcess.nextBtn.click();
  }

  async familyReference() {
    await $(InterviewProcess.editText).waitForExist({
      timeout: 3000
    });
    await $(InterviewProcess.editText).setValue("ကောင်း");
    await InterviewProcess.nextBtn.click();
  }

  async businessReference() {
    const guarantorName = await $(InterviewProcess.editText);
    await guarantorName.setValue("Mr. Guarantor");
    await Util.scrollToEndByClass();
    const edtTextList = await $$(InterviewProcess.editText);
    const monthlyAvgIncome = edtTextList[0];
    const remark = edtTextList[1];
    await monthlyAvgIncome.setValue(150000);
    await remark.setValue("ကောင်း");
    await InterviewProcess.nextBtn.click();
  }

  async esddCheckList() {
    await Util.scrollToEndByClass();
    await InterviewProcess.nextBtn.click();
  }

  // if (loanType === "individual") {
  //   await $(InterviewProcess.ivImage).waitForExist({ timeout: 3000 });
  //   let attachmentList = await $$(InterviewProcess.ivImage);

  //   await attachmentList[attachmentList.length - 1].click();
  //   await this.uploadPhotoFromGallery();
  //   await $('//*[@text="Interview Appointment"]').waitForExist({
  //     timeout: 3000,
  //   });

  //   await Util.scrollToEndByClass("android.widget.ScrollView");

  //   attachmentList = await $$(InterviewProcess.ivImage);
  //   for (let attachment of attachmentList) {
  //     await attachment.click();
  //     await this.uploadPhotoFromGallery();
  //   }
  // } else if (loanType === "group") {
  //   const attachmentList = await $$(InterviewProcess.ivImage);
  //   for (const currentAttachment of attachmentList) {
  //     // await currentAttachment.waitForExist({ timeout: 5000, timeoutMsg: 'Attachment Not Found' })
  //     await currentAttachment.click();
  //     await this.uploadPhotoFromGallery();
  //   }
  // }
}

module.exports = new InterviewProcessHelper();