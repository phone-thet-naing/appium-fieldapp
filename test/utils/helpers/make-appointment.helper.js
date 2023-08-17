const HomeScreen = require("../../screen_objects/home.screen")
const AppointmentScreen = require('../../screen_objects/appointment.screen')
const Util = require('../utility-functions')
// const AppointmentScreen = require('../../screen_objects/appointment.screen-debug')

class MakeAppointmentHelper {

    async fillAppointmentData(loanType) {
        await $('//*[@text="MAKE APPOINTMENT"]').waitForExist({ timeout: 3000 })

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

        await AppointmentScreen.dateDropdown.click()
        await AppointmentScreen.dateOkBtn.click()
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
}

module.exports = new MakeAppointmentHelper()