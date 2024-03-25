const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper.js');
const appointmentClientList = require('../../data/input_data.json')[
	'client_list_idl_interview'
];
const HomeScreen = require('../../screenobjects/home.screen');

describe('Make Interview Appointment', () => {
	const input = {
		client_names: ["Thuzar"]
	}

	it.only('Make Individual Interview Appointment', async () => {
		if (!await $('//*[@text="Clients"]').isDisplayed()) {
			throw new Error("You are currently not in home screen. Go to home screen.");
		}
		await HomeScreen.goToAppointment();

		await MakeAppointmentHelper.makeIndividualAppointment();
	});

	it('Make appointment with new client', async () => {
		await MakeAppointmentHelper.makeAppointmentWithNewClient();

		// Data Filling
		await MakeAppointmentHelper.fillAppointmentData("Individual Loan")
	});
});
