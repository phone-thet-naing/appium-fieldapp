const makeAppointmentHelper = require('../../utils/helpers/make-appointment.helper');
const ngasayaContractHelper = require('../../utils/make-ngasaya');
const util = require('../../utils/utility-functions');
const HomeScreen = require("../../screenobjects/home.screen");

const ngasaya_data = require('../../data/input_data.json')['ngasaya_data_gpl_interview'];

const ngasayaInfo = {
	expectedDisbursementDate: "20"
}

describe('Make Group Interview Appointment', () => {
	it.only('Make Group Appointment with New Group', async () => {
		if (!await $('//*[@text="Clients"]').isDisplayed()) {
			throw new Error("You are currently not in home screen. Go to home screen.");
		}
		await HomeScreen.goToAppointment();

		const numberOfClients = 3; // Enter number of clients here

		await makeAppointmentHelper.makeGroupAppointmentWithNewGroup({
			totalMembers: numberOfClients,
		});
		await ngasayaContractHelper.makeNgaSaYaContract(ngasayaInfo);
	});

	it('Make Group Interview Appointment', async () => {
		await util.goToHomeScreen();

		await makeAppointmentHelper.makeGroupAppointment();
		await ngasayaContractHelper.makeNgaSaYaContract(ngasaya_data);
	});
});
