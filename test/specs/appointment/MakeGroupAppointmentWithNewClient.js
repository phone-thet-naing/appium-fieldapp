const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper.js')
const HomeScreen = require('../../screenobjects/home.screen.js')

describe("Making a Group Appointment with New Client", () => {
    it("Fill Appointment Data", async () => {
        await HomeScreen.goToAppointment();
        await MakeAppointmentHelper.fillAppointmentData("Group Loan");
    })

    it("Create New Client", async () => {

        const memberList = [
            { name: "Client One", phone: "969998180", dob: "<dob>", nrcNo: "123456" },
            { name: "Client Two", phone: "969998180", dob: "<dob>", nrcNo: "123456" },
            { name: "Client Three", phone: "969998180", dob: "<dob>", nrcNo: "123456" },
        ];

        await MakeAppointmentHelper.addNewMember(memberList);
    })
})