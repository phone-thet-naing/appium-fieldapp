const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper.js');
const AppointmentScreen = require('../../screenobjects/appointment.screen.js')

describe("Making an Individual Appointment with New Client", () => {
    it("Fill Appointment Data", async () => {
        await MakeAppointmentHelper.fillAppointmentData("Individual Loan")
    })

    it("Create New Client", async () => {
        const newMember = {
			name: "U Mg Mg",
			phone: "751972062",
			dob: "birthday",
			nrcNo: "983527"
		}

        await MakeAppointmentHelper.addNewMember([newMember])
    })
})