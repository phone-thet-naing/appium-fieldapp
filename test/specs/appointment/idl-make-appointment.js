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
		await homeScreen.appointmentIcon.click();

		await MakeAppointmentHelper.makeIndividualAppointment(input);
	});

	it('Make appointment with new client', async () => {
		await MakeAppointmentHelper.makeAppointmentWithNewClient();

		// Data Filling
		await MakeAppointmentHelper.fillAppointmentData("Individual Loan")
	});
});
