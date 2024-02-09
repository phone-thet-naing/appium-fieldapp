// const Test = require('../screen-objects/ngasaya-contract.screen')
const util = require('../utils/utility-functions');
// const fs = require('fs')
const AppointmentScreen = require('../screenobjects/appointment.screen');
// const loanType = 'Individual Loan'
// const HomeScreen = require('../screen-objects/home.screen')
// const path = require("path");
// const InterviewProcess = require('../screen-objects/interview-process.screen')
const InterviewProcess = require('../screenobjects/interview-process.screen');
const Page = require('../screenobjects/page.screen');
const HomeScreen = require('../screenobjects/home.screen');
const InterviewProcessHelper = require('../utils/helpers/interview_process.helper');
const NgasayaContract = require('../utils/make-ngasaya');
const AppointmentHelper = require('../utils/helpers/make-appointment.helper');
const Main = require('../screenobjects/main');
const ngasayaContractHelper = require('../utils/make-ngasaya');

const groupList = require('../data/input_data.json');

const { mmFemaleNames, mmMaleNames } = require('../data/data.js');
const interviewProcessScreen = require('../screenobjects/interview-process.screen');
const NgasayaUtil = require("../utils/make-ngasaya");

const listLabels = [
	'Guarantor Building *',
	'Guarantor Business Photo -1 *',
	'Guarantor Business Photo -2 *',	
	'Guarantor Business Photo -2 *',
];

describe('sample', () => {
	it.only('New Member Adding', async () => {
		await InterviewProcessHelper.agriIncome();
	})
})
