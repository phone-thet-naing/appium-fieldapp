const MakeAppointmentHelper = require('../../utils/helpers/make-appointment.helper');
const appointmentClientList = require('../../data/input_data.json')[
	'client_list_idl_interview'
];
const homeScreen = require('../../screenobjects/home.screen');

describe('Make Interview Appointment', () => {
	it.only('Make Individual Interview Appointment', async () => {
		// await homeScreen.appointmentIcon.click();
		// for (const desired_client of appointmentClientList) {
		await MakeAppointmentHelper.makeIndividualAppointment();
		// await expect(homeScreen.appointmentIcon).toExist()
		// }
	});

	it('Make appointment with new client', async () => {
		await MakeAppointmentHelper.make_individual_appointment_with_new_client();
	});
});
