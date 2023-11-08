const MakeAppointmentHelper = require("../../utils/helpers/make-appointment.helper");
const NgasayaContractHelper = require("../../utils/make-ngasaya");
const Util = require("../../utils/utility-functions");

// const appointment_data = {
//     "create_new_group": true,
//     "clients": ["ID: 407439", "ID: 407440"]
// }

const groupList = require("../../data/input_data.json")[
	"group_list_gpl_interview"
];

// import groupList from '../../data/input_data.json'

// Appointment Data
const appointment_data = require("../../data/input_data.json")[
	"appointment_data_gpl_interview"
];

// const ngasaya_data = {
//     loan_name: 'Existing Business Loan (Regular)',
//     repayment_frequency: '12',
//     disbursement_date: '10 August 2023',
//     first_repayment_date: '30 August 2023'
// }
const ngasaya_data = require("../../data/input_data.json")[
	"ngasaya_data_gpl_interview"
];

describe("Make Group Interview Appointment", () => {
	it.only("Make Group Appointment with New Group", async () => {
		await Util.goToHomeScreen();

		await MakeAppointmentHelper.makeGroupAppointmentWithNewGroup({
			totalMembers: 5,
		});
		await NgasayaContractHelper.makeNgaSaYaContract(ngasaya_data);
	});

	it("Make Group Interview Appointment", async () => {
		await Util.goToHomeScreen();

		await MakeAppointmentHelper.makeGroupAppointment();
		await NgasayaContractHelper.makeNgaSaYaContract(ngasaya_data);
	});
});
