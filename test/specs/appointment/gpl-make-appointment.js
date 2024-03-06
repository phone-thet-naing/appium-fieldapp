const makeAppointmentHelper = require('../../utils/helpers/make-appointment.helper');
const ngasayaContractHelper = require('../../utils/make-ngasaya');
const util = require('../../utils/utility-functions');
const HomeScreen = require("../../screenobjects/home.screen");

const ngasaya_data = require('../../data/input_data.json')['ngasaya_data_gpl_interview'];

describe('Make Group Interview Appointment', () => {
	it.only('Make Group Appointment with New Group', async () => {
		await (await HomeScreen.appointmentIcon).click();

		const numberOfClients = 2; // Enter number of clients here

		await makeAppointmentHelper.makeGroupAppointmentWithNewGroup({
			totalMembers: numberOfClients,
		});
		await ngasayaContractHelper.makeNgaSaYaContract();
	});

	it('Make Group Interview Appointment', async () => {
		await util.goToHomeScreen();

		await makeAppointmentHelper.makeGroupAppointment();
		await ngasayaContractHelper.makeNgaSaYaContract(ngasaya_data);
	});
});
