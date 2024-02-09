const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper.js')
const HomeScreen = require('../../screenobjects/home.screen.js')

describe("Making a Group Appointment with New Client", () => {
    it("Fill Appointment Data", async () => {
        await HomeScreen.goToAppointment()
        await MakeAppointmentHelper.fillAppointmentData("Group Loan")
    })

    it("Create New Client", async () => {
        const newMember = {
			name: "Daw Cho Cho",
			phone: "751972062",
			dob: "birthday",
			nrcNo: "983527"
		}

        await MakeAppointmentHelper.addNewMember([newMember])
    })
})