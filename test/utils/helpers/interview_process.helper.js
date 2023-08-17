const HomeScreen = require('../../screen_objects/home.screen')
const InterviewProcess = require('../../screen_objects/interview-process.screen')
const Util = require('../utility-functions')

class InterviewProcessHelper {
    async navigateToInterview(desiredGroupLeader) {
        await HomeScreen.toInterview.click()
        await $(InterviewProcess.interviewTypeTabs).waitForExist({ timeout: 5000 })
        // click drop-down icon under group loans
        await InterviewProcess.downArrow.click()

        const leaderNameList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvLeaderName"]')

        for (const leaderName of leaderNameList) {
            const trimmedName = (await leaderName.getText()).split('(')[0].trim()
            if (desiredGroupLeader == trimmedName) {
                await leaderName.click()
                break
            }
        }

        // choose the interview
        // await Util.scrollTextIntoViewByResourcdId('com.hanamicrofinance.FieldApp.uat:id/viewPager', data)
        // await $(`//*[@text="${data}"]`).click()
    }

    async chooseIndividualIterview(data) {
        await HomeScreen.toInterview.click()
        await $(InterviewProcess.interviewTypeTabs).waitForExist({ timeout: 5000 })
        const items = await $$(InterviewProcess.interviewTypeTabs)
        await items[2].click()
        await Util.scrollTextIntoViewByResourcdId('com.hanamicrofinance.FieldApp.uat:id/viewPager', data)
        await $(`//*[@text="${data}"]`).click()
    }

    async clientInfoPage(group_data) {
        // Phone No
        if (!await InterviewProcess.mobileRadioBtn.isSelected()) {
            await InterviewProcess.mobileRadioBtn.click()
        }
        await InterviewProcess.phoneNoInputBox.setValue(group_data['phone_number'])
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)`)
        await InterviewProcess.houseNoInputBox.setValue(Math.floor(Math.random() * 20))
        await InterviewProcess.streetNoInputBox.setValue(Math.floor(Math.random() * 20))
        await InterviewProcess.nextBtn.click()
        await $('//*[@text="PERSONAL DETAIL"]').waitForExist({ timeout: 6000 })
    }

    async personalDetailPage() {
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
        await InterviewProcess.nextBtn.click()
    }

    async householdDetailPage() {
        // အတူနေမိသားစုဦးရေ
        await InterviewProcess.nextBtn.click()
    }

    async earningFamilyMemberPage() {
        // ဝင်ငွေရှာနိုင်သည့် မိသားစုဝင်အရေအတွက်
        await InterviewProcess.inputBox.setValue(Math.floor(Math.random() * 3 + 1))
        await InterviewProcess.nextBtn.click()
    }

    async householdVerificationPage() {
        // အိမ်တန်ဖိုး
        const houseValue = Math.floor(Math.random() * 90 + 10) * 100000
        await InterviewProcess.inputBox.setValue(houseValue)
        await Util.scrollToText('အိမ်အကျယ်အဝန်း - အလျားပေ *')
        // set house length and breadth
        const inputBoxList = await $$(InterviewProcess.editText)
        for (const inputBox of inputBoxList) {
            await inputBox.setValue(Math.floor(Math.random() * 35 + 15))
        }
        Util.scrollToEndByClass('android.widget.ScrollView')
        await InterviewProcess.nextBtn.click()
    }
    async currentLoanAndCreditHistoryPage() {
        await InterviewProcess.inputBox.setValue(Math.floor(Math.random() * 3 + 1))
        await InterviewProcess.nextBtn.click()
    }
    async businessProfilePage() {
        // Set Business Group and Business Type
        await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'လက်ရှိ လုပ်ငန်းအုပ်စု *')
        const businessGroupDropdown = await $(InterviewProcess.spinner)
        await businessGroupDropdown.click()
        await $(InterviewProcess.tvItem).waitForExist({ timeout: 3000 })
        const businessTypeItems = await $$(InterviewProcess.tvItem)
        await businessTypeItems[Math.floor(Math.random() * 4)].click()
        const inputs = await $$(InterviewProcess.editText)

        // Set input for each text box
        for (let i = 0; i < inputs.length; i++) {
            switch (i) {
                case 0:
                    await inputs[i].setValue('Business Detail')
                    break;

                case 1:
                    await inputs[i].setValue(1000000)
                    break;

                case 2:
                    await inputs[i].setValue('Business Name')
                    break;

                default:
                    break;
            }
        }

        await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'အလုပ်သမား ဦးရေ *')
        const numberOfWorkers = await $(InterviewProcess.editText)

        await numberOfWorkers.setValue(10)
        const advantageOfLocation = await $$(InterviewProcess.checkBoxes)
        await advantageOfLocation[Math.floor(Math.random() * 3)].click()
        await Util.scrollToEndByClass()

        const timeOfConvenienceList = await $$(InterviewProcess.checkBoxes)
        await timeOfConvenienceList
        [Math.floor(Math.random() * 3)].click()
        await InterviewProcess.nextBtn.click()
    }
    async otherIncomePage() {
        const inputBoxes = await $$(InterviewProcess.editText)
        for (const item of inputBoxes) {
            await item.setValue((Math.floor(Math.random() * 4 + 1)) * 100000)
        }
        await InterviewProcess.nextBtn.click()
    }
    async businessInocmePage() {
        const inputBoxes = await $$(InterviewProcess.editText)
        for (const item of inputBoxes) {
            await item.setValue((Math.floor(Math.random() * 4 + 1)) * 100000)
        }
        await InterviewProcess.nextBtn.click()
    }
    async businessExpensePage() {
        const inputBoxes = await $$(InterviewProcess.editText)
        for (const item of inputBoxes) {
            await item.setValue((Math.floor(Math.random() * 4 + 1)) * 100000)
        }
        await InterviewProcess.nextBtn.click()
    }
    async personalExpensePage() {
        let inputBoxList = await $$(InterviewProcess.editText)
        for (const inputBox of inputBoxList) {
            await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
        }
        await Util.scrollToEndByClass()

        inputBoxList = await $$(InterviewProcess.editText)
        for (const inputBox of inputBoxList) {
            if (await inputBox.getText() == '') {
                await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
            }
        }
        await InterviewProcess.nextBtn.click()
    }

    async currentAssetsPage() {
        let inputBoxList = await $$(InterviewProcess.editText)
        for (const inputBox of inputBoxList) {
            await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
        }
        await InterviewProcess.nextBtn.click()
    }

    async longTermAssetsPage() {
        let inputBoxList = await $$(InterviewProcess.editText)
        for (const inputBox of inputBoxList) {
            await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
        }
        const checkBoxes = await $$(InterviewProcess.checkBoxes)
        await checkBoxes[Util.getRandomIndex(checkBoxes.length - 1, 0)].click()

        await Util.scrollToEndByClass()
        await InterviewProcess.nextBtn.click()
    }

    async liabilitiesPage() {
        let inputBoxList = await $$(InterviewProcess.editText)
        for (const inputBox of inputBoxList) {
            await inputBox.setValue(Math.floor(Math.random() * 3 + 1) * 100000)
        }

        await InterviewProcess.nextBtn.click()
    }

    async loanInformationPage(loanInformationData) {
        const inputBoxList = await $$(InterviewProcess.editText)
        for (let i = 0; i < inputBoxList.length; i++) {
            if (i == 0) {
                const randomNumber = Math.floor(Math.random() * 8 + 4)
                console.log('randomNumber --> ', randomNumber)
                await inputBoxList[i].setValue(randomNumber)
            } else if (i == 1) {
                await inputBoxList[i].setValue('Dummy Reason')
            }
        }
        // const spinnerList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]')
        await $(InterviewProcess.spinner).waitForExist({ timeout: 3000 })
        const spinnerList = await $$(InterviewProcess.spinner)
        for (let i = 0; i < spinnerList.length; i++) {
            await spinnerList[i].click()
            await $(InterviewProcess.tvItem).waitForExist({ timeout: 3000 })
            const items = await $$(InterviewProcess.tvItem)
            const randomIndex = Math.floor(Math.random() * (items.length - 1))
            console.log('item size --> ' + items.length)
            console.log('random index --> ' + randomIndex)
            await items[randomIndex].click()
        }
        await InterviewProcess.nextBtn.click()
    }

    async clientAppPage() {
        await InterviewProcess.nextBtn.click()
    }

    async fillNrc() {
        await InterviewProcess.etNrc.click()
        await InterviewProcess.spinnerState.waitForExist({ timeout: 3000 })
        await InterviewProcess.spinnerState.click()
        await $(`//*[@text="၉"]`).click()
        await InterviewProcess.spinnerTownshipCode.click()
        await $(`//*[@text="မရမ"]`).click()
        await InterviewProcess.spinnerNrcType.click()
        await $(`//*[@text="နိုင်"]`).click()
        await InterviewProcess.etNrcNo.setValue('000123')
        await $(`//*[@text="OK"]`).click()
    }

    async guarantorPage(isGroupInterview = false) {
        const itemList = await $$(InterviewProcess.editText)
        for (let i = 0; i < itemList.length; i++) {
            switch (i) {
                case 0:
                    await itemList[i].setValue('Mr. Guarantor')
                    break

                case 1:
                    await itemList[i].setValue('U Ba')
                    break

                default:
                    break
            }
        }
        if (isGroupInterview) {
            await this.fillNrc()
        } else {
            let inputBoxes = await $$(InterviewProcess.editText)
            for (let i = 2; i < inputBoxes.length; i++) {
                await inputBoxes[i].setValue(Math.floor((Math.random() * 4) + 1) * 100000)
            }

            await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'လစဉ် အခြားဝင်ငွေများ')
            inputBoxes = await $$(InterviewProcess.editText)
            for (const item of inputBoxes) {
                if (await item.getText() == '') {
                    await item.setValue(Math.floor((Math.random() * 4) + 1) * 100000)
                }
            }
            await Util.scrollToEndByClass()
        }
        await InterviewProcess.nextBtn.click()
    }

    async uploadPhoto() {
        console.log('uploadPhoto init')
        await $('//*[@text="Select source"]').waitForExist({ timeout: 5000 })
        await $(InterviewProcess.galleryIcon).waitForExist({ timeout: 5000 })
        if (await $(InterviewProcess.galleryIcon).isExisting()) {
            console.log('Gallery icons found')
        } else {
            console.log('Gallery icons not found')
        }
        const icons = await $$(InterviewProcess.galleryIcon)
        console.log('Gallery icons found --> ', icons.length) // must be 3
        // const icons = await $$(InterviewProcess.androidIcon)
        await icons[2].click()
        await $('//*[@text="appium"]').waitForExist({ timeout: 3000 })
        await $('//*[@text="appium"]').click()
        await $('//*[@text="Select item"]').waitForExist({ timeout: 3000 })
        await $(InterviewProcess.photoIcons).waitForExist({ timeout: 3000 })
        const photos = await $$(InterviewProcess.photoIcons)
        console.log('photos size --> ', photos.length)
        const photoCount = photos.length
        await photos[Math.floor(Math.random() * (photoCount))].click()
        await $('//*[@text="CROP"]').waitForExist({ timeout: 3000 })
        await $(InterviewProcess.cropBtn).waitForExist({ timeout: 3000 })
        await $(InterviewProcess.cropBtn).click()
        console.log('uploadPhoto terminate')
    }

    async attachmentGuarantorPage(loanType) {

        if (loanType === 'individual') {
            await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'Guarantor photo')

            await $(InterviewProcess.ivImage).waitForExist({ timeout: 3000 })
            let attachmentList = await $$(InterviewProcess.ivImage)

            await attachmentList[attachmentList.length - 1].click()
            await this.uploadPhoto()
            await $('//*[@text="Interview Appointment"]').waitForExist({ timeout: 3000 })

            await Util.scrollToEndByClass('android.widget.ScrollView')

            attachmentList = await $$(InterviewProcess.ivImage)
            for (let attachment of attachmentList) {
                await attachment.click()
                await this.uploadPhoto()
            }
        } else if (loanType === 'group') {
            const attachmentList = await $$(InterviewProcess.ivImage)
            for (const currentAttachment of attachmentList) {
                // await currentAttachment.waitForExist({ timeout: 5000, timeoutMsg: 'Attachment Not Found' })
                await currentAttachment.click()
                await this.uploadPhoto()
            }
        }

        await InterviewProcess.signField.click()
        await Util.drawSignature()
        await InterviewProcess.nextBtn.click()
    }

    async attachmentClientPage() {
        await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'Client Photo *')
        const attachmentList = await $$(InterviewProcess.ivImage)
        for (const currentAttachment of attachmentList) {
            // await currentAttachment.waitForExist({ timeout: 5000, timeoutMsg: 'Attachment Not Found' })
            await currentAttachment.click()
            await this.uploadPhoto()
        }
        await Util.scrollToEndByClass()
        await InterviewProcess.signField.click()
        await Util.drawSignature()
        await InterviewProcess.nextBtn.click()
    }

    async attachmentLoanPage() {
        await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'Business building')
        const attachmentList = await $$(InterviewProcess.ivImage)
        for (const currentAttachment of attachmentList) {
            // await currentAttachment.waitForExist({ timeout: 5000, timeoutMsg: 'Attachment Not Found' })
            await currentAttachment.click()
            await this.uploadPhoto()
        }

        await Util.scrollToEndByClass()
        await InterviewProcess.nextBtn.click()
    }

    async attachmentCoApplicant() {
        await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'Co-applicant photo *')
        const attachmentList = await $$(InterviewProcess.ivImage)
        for (const currentAttachment of attachmentList) {
            await currentAttachment.click()
            await this.uploadPhoto()
        }
        await Util.scrollToEndByClass()
        await InterviewProcess.signField.click()
        await Util.drawSignature()
        await InterviewProcess.nextBtn.click()
    }

    async cashFlowPage() {
        await InterviewProcess.nextBtn.click()
    }

    async evaluationPage() {
        await $(InterviewProcess.editText).setValue('ကောင်း')
        await Util.scrollToEndByClass()
        const textBoxes = await $$(InterviewProcess.editText)
        for (let i = 0; i < textBoxes.length; i++) {
            if (i == 1) {
                await textBoxes[i].setValue(Math.floor(Math.random() * 2 + 8) * 100000)
            } else {
                await textBoxes[i].setValue('Dummy Text For Testing')
            }
        }
        await InterviewProcess.nextBtn.click()
    }

    async loanSummary() {
        await InterviewProcess.nextBtn.click()
    }

    async assetSummary() {
        await Util.scrollToEndByClass()
        await InterviewProcess.doneBtn.click()
    }

    async coApplicant() {
        const edTextList1 = await $$(InterviewProcess.editText)
        for (let i = 0; i < edTextList1.length; i++) {
            switch (i) {
                case 0:
                    await edTextList1[i].setValue('Mr. Dummy Name')
                    break;

                case 1:
                    await edTextList1[i].setValue('09751999000')
                    break;

                default:
                    break;
            }
        }
        await this.fillNrc()
        await Util.scrollToEndByClass()

        const edTextList2 = await $$(InterviewProcess.editText)
        await edTextList2[edTextList2.length - 1].setValue('အမှတ် ၁ နှင်းဆီလမ်း ကမာရွတ်မြို့နယ် ရန်ကုန်မြို့')
        await InterviewProcess.nextBtn.click()
    }

    async familyReference() {
        await $(InterviewProcess.editText).waitForExist({ timeout: 3000 })
        await $(InterviewProcess.editText).setValue('ကောင်း')
        await InterviewProcess.nextBtn.click()
    }

    async businessReference() {
        const guarantorName = await $(InterviewProcess.editText)
        await guarantorName.setValue('Mr. Guarantor')
        await Util.scrollToEndByClass()
        const edtTextList = await $$(InterviewProcess.editText)
        const monthlyAvgIncome = edtTextList[0]
        const remark = edtTextList[1]
        await monthlyAvgIncome.setValue(150000)
        await remark.setValue('ကောင်း')
        await InterviewProcess.nextBtn.click()
    }

    async esddCheckList() {
        await Util.scrollToEndByClass()
        await InterviewProcess.nextBtn.click()
    }
}

module.exports = new InterviewProcessHelper()