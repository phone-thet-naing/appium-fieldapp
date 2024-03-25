const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper.js')
const HomeScreen = require('../../screenobjects/home.screen.js')
const AppointmentScreen = require('../../screenobjects/appointment.screen.js')

describe("Making a Group Appointment with New Client", () => {
    it("Fill Appointment Data", async () => {
        // Modify clients' information
        const memberList = [
            { name: "Client One", phone: "969998180", dob: null, nrcNo: "123456" },
            { name: "Client Two", phone: "969998181", dob: null, nrcNo: "123456" },
            { name: "Client Three", phone: "969998182", dob: null, nrcNo: "123456" },
        ];

        if (!await $('//*[@text="Clients"]').isDisplayed()) {
			throw new Error("You are currently not in home screen. Go to home screen.");
		}
        
        // Go to appointment from home screen and fill out data as "Group Loan"
        await HomeScreen.goToAppointment();
        await MakeAppointmentHelper.fillAppointmentData("Group Loan");

        await AppointmentScreen.createNewGroup.click();

        // Choose "Create New Member" option
        const actionSpinner = await AppointmentScreen.actionSpinner;
        await actionSpinner.waitForExist();
        await actionSpinner.click();

        const createNewMemberBtn = await $('//*[@text="Create New Member"]');
        await createNewMemberBtn.waitForExist();
        await createNewMemberBtn.click();

        // Add new members defined in `memberList` variable
        await MakeAppointmentHelper.addNewMember(memberList);

        await MakeAppointmentHelper.chooseNewMembersInGroup(memberList.length);

        await MakeAppointmentHelper.chooseLeader()

        await (await AppointmentScreen.createNewNgasayaBtn).click();
    });
})