const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper.js');
const AppointmentScreen = require('../../screenobjects/appointment.screen.js')

describe("Making an Individual Appointment with New Client", () => {
    it ('Click Appointment Icon', async () => {
        // TO DO
        return true 
    })
    it("Fill Appointment Data", async () => {
        await MakeAppointmentHelper.fillAppointmentData("Individual Loan")
    })

    it("Create New Client", async () => {
        const newMember = {
			name: "U Tab Log Test",
			phone: "551829736",
			dob: "birthday",
			nrcNo: "983527"
		}

        await MakeAppointmentHelper.addNewMember([newMember])
    })
})