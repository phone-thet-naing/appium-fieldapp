const makeAppointmentHelper = require('../../utils/helpers/make-appointment.helper');
const ngasayaContractHelper = require('../../utils/make-ngasaya');
const util = require('../../utils/utility-functions');

const groupList = require('../../data/input_data.json')[
	'group_list_gpl_interview'
];

// Appointment Data
const appointment_data = require('../../data/input_data.json')[
	'appointment_data_gpl_interview'
];
const ngasaya_data = require('../../data/input_data.json')[
	'ngasaya_data_gpl_interview'
];

describe('Make Group Interview Appointment', () => {
	it.only('Make Group Appointment with New Group', async () => {
		// await util.goToHomeScreen();

		// await makeAppointmentHelper.makeGroupAppointmentWithNewGroup({
		// 	totalMembers: 2,
		// });
		await ngasayaContractHelper.makeNgaSaYaContract();
	});

	it('Make Group Interview Appointment', async () => {
		await util.goToHomeScreen();

		await makeAppointmentHelper.makeGroupAppointment();
		await ngasayaContractHelper.makeNgaSaYaContract(ngasaya_data);
	});
});
