const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper.js');
const appointmentClientList = require('../../data/input_data.json')[
	'client_list_idl_interview'
];
const homeScreen = require('../../screenobjects/home.screen');

describe('Make Interview Appointment', () => {
	const input = {
		client_names: ["Po Po Chit"]
	} 

	it.only('Make Individual Interview Appointment', async () => {
		// Click on appointment icon to go to the appointment screen
		await homeScreen.appointmentIcon.click();
		// for (const desired_client of appointmentClientList) {
		await MakeAppointmentHelper.makeIndividualAppointment(input);
		// await expect(homeScreen.appointmentIcon).toExist()
		// }
	});

	it('Make appointment with new client', async () => {
		await MakeAppointmentHelper.makeAppointmentWithNewClient();

		// Data Filling
		await MakeAppointmentHelper.fillAppointmentData("Individual Loan")
	});
});
