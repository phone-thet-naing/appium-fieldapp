const HomeScreen = require("../../screenobjects/home.screen")
const AppointmentScreen = require('../../screenobjects/appointment.screen')
const Util = require('../utility-functions')
// const AppointmentScreen = require('../../screen_objects/appointment.screen-debug')
var adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan", "Broad", "Crooked", "Curved", "Deep", "Even", "Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan", "Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"]
var object = ["Taco", "Operating System", "Sphere", "Watermelon", "Cheeseburger", "Apple Pie", "Spider", "Dragon", "Remote Control", "Soda", "Barbie Doll", "Watch", "Purple Pen", "Dollar Bill", "Stuffed Animal", "Hair Clip", "Sunglasses", "T-shirt", "Purse", "Towel", "Hat", "Camera", "Hand Sanitizer Bottle", "Photo", "Dog Bone", "Hair Brush", "Birthday Card"]
var list;

class MakeAppointmentHelper {

    generator() {
        return adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
    }

    async fillAppointmentData(loanType) {
        await expect(await $('//*[@text="MAKE APPOINTMENT"]')).toBeDisplayed()

        // Choosing address step by step (This code chooses the very first item of every dropdown)
        let optionLeft = true
        let index = 0
        while (optionLeft) {
            const optionLabelList = await $$(AppointmentScreen.spinnerItem)
            const currentItem = optionLabelList[index]
            const currentLabel = await currentItem.getText()
            if (currentLabel == 'Select One') {
                await currentItem.click()
                await $(AppointmentScreen.spinnerItem).waitForExist({ timeout: 3000 })
                const options = await $$(AppointmentScreen.spinnerItem)
                await options[1].click()
            } else if (currentLabel == 'Group Loan' || currentLabel == 'Individual Loan') {
                await currentItem.click()
                await $(`//*[@text="${loanType}"]`).click()
                optionLeft = false
                break
            }
            index++
        }

        await AppointmentScreen.dateDropdown.waitForEnabled()
        await AppointmentScreen.dateDropdown.click()

        await AppointmentScreen.dateOkBtn.waitForEnabled()
        await AppointmentScreen.dateOkBtn.click()

        await AppointmentScreen.continueBtn.waitForEnabled();
        await AppointmentScreen.continueBtn.click();
    }

    async makeGroupAppointment(group, createNewGroup) {
        // Go to appointment
        await HomeScreen.appointmentIcon.click()

        await this.fillAppointmentData('Group Loan')

        // Create New Group
        if (createNewGroup) {
            await AppointmentScreen.createNewGroup.click() // click create new group
            await AppointmentScreen.actionSpinner.click() // click actions spinner
            await $(`//*[@text="${'Add Existing Member'}"]`).click() // click action []
            // await AppointmentScreen.addExistingMemberIcon.click();
            await $(`//*[@text="ADD MEMBERS"]`).waitForExist({ timeout: 3000 })
            for (const client of group) {
                // Get search keywords from 
                let searchKeywords = client.split(' ').slice(1).join(' ')
                await AppointmentScreen.searchBar.setValue(searchKeywords)
                await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${client}")`)
                await $(`//*[@text="${client}"]`).waitForExist({ timeout: 60000 })
                await $(`//*[@text="${client}"]`).click()
                await driver.pause(1000)
            }
            await AppointmentScreen.addBtn.click()
            await driver.pause(1000)
            await $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/chkGroupLeader"]`).click()
            const groupLeaderRadioBtnList = await $$(AppointmentScreen.checkGroupLeader)
            const btnCount = groupLeaderRadioBtnList.length
            await groupLeaderRadioBtnList[Math.floor(Math.random() * btnCount)].click()
            await AppointmentScreen.createNewNgasayaBtn.click()
            // await driver.pause(3000)
            await expect($('//*[@text="ငစရစာချုပ်"]')).toExist()
        }

    }

    async makeIndividualAppointment(desired_client) {

        await HomeScreen.appointmentIcon.click()
        // Fill Appointment Data
        await this.fillAppointmentData('Individual Loan')

        await AppointmentScreen.addExistingMemberIcon.click();
        const client = desired_client
        // const clientId = client.slice(4, 9)
        // await AppointmentScreen.searchBar.setValue(clientId)
        let searchKeywords = client.split(' ').slice(1).join(' ')
        await AppointmentScreen.searchBar.setValue(searchKeywords)
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${client}")`)
        await $(`//*[@text="${client}"]`).waitForExist({ timeout: 60000 })
        await $(`//*[@text="${client}"]`).click()
        await driver.pause(1000)
        await AppointmentScreen.addBtn.click();
        await AppointmentScreen.createAppointmentBtn.click();
    }

    async make_individual_appointment_with_new_client() {
        // await HomeScreen.appointmentIcon.click();
        await this.fillAppointmentData('Individual Loan')
        await AppointmentScreen.add_new_client.click();
        await AppointmentScreen.new_member_name_input.setValue(this.generator());
        await AppointmentScreen.new_member_phone_input.setValue("969998180");
        await AppointmentScreen.pick_dob();
        await AppointmentScreen.new_member_nrc_picker.setValue("000123");
        await AppointmentScreen.new_member_continue_btn.click();
        await AppointmentScreen.createAppointmentBtn.click();
    }
}

module.exports = new MakeAppointmentHelper()