// const Test = require('../screen-objects/ngasaya-contract.screen')
const Util = require("../utils/utility-functions")
// const fs = require('fs')
const AppointmentScreen = require("../screenobjects/appointment.screen")
// const loanType = 'Individual Loan'
// const HomeScreen = require('../screen-objects/home.screen')
// const path = require("path");
// const InterviewProcess = require('../screen-objects/interview-process.screen')
const InterviewProcess = require("../screenobjects/interview-process.screen")
const Page = require("../screenobjects/page.screen")
const HomeScreen = require("../screenobjects/home.screen")
const InterviewProcessHelper = require("../utils/helpers/interview_process.helper")
const NgasayaContract = require("../utils/make-ngasaya")
const AppointmentHelper = require("../utils/helpers/make-appointment.helper")
const main = require("../screenobjects/main")

const groupList = require("../data/input_data.json")

const listLabels = [
	"Guarantor Building *",
	"Guarantor Business Photo -1 *",
	"Guarantor Business Photo -2 *",
	"Guarantor Business Photo -2 *",
]

describe("sample", () => {
	it("general testing", async () => {
		// await main.noteIcon.click()

		const { x: xStart, y: yStart } = await main.noteIcon.getLocation()
		console.log("initial coords => ", { xStart, yStart })
		await Util.customScroll(xStart, yStart, 0, 0, 1000)

		// let validClient = false;
		// while (!validClient) {
		//   const selectedMember = await driver.waitUntil(async () => {
		//     const radioList = await $$(
		//       '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/layoutSelectIcon"]'
		//     );
		//     if (radioList.length < 5) {
		//       return false;
		//     }

		//     return radioList[1];
		//   });

		//   await selectedMember.click();
		//   validClient =
		//     (await selectedMember.getAttribute("selected")) == "true"
		//       ? true
		//       : false;
		// }

		// const clientList = await driver.waitUntil(async () => {
		//   const radioList = await $$(
		//     '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/layoutSelectIcon"]'
		//   );

		//   // if (radioList.length < 5) return false;

		//   // return radioList[1];
		//   // let chosenMember = radioList[2];
		//   // let validMember = false;

		//   // while (await chosenMember.getAttribute() == 'false') {
		//   //   chosenMember = radioList[4];
		//   // }

		//   return radioList.length < 5 ? false : radioList;
		// });

		// for await (const client of clientList) {
		//   console.log(await client.getAttribute("checkable"));
		// }

		// await validClient.click();
		// console.log(await validClient.getAttribute("checkable"));

		// for (let i = 0; i < 5; i++) {
		//   await InterviewProcessHelper.businessProfilePage("group");
		//   await expect(await $('//*[@text="BACK"]')).toExist();
		//   await $('//*[@text="BACK"]').click();
		// }

		// for (let i = 0; i < 3; i++) {
		// const numberofworkersInputbox = await $$(InterviewProcess.editText);

		// if ((await numberofworkersInputbox.getText()) == "") {
		// const numberofworkers = Math.floor(Math.random() * 10).toString();
		// await numberofworkersInputbox.click();
		// console.info(numberofworkersInputbox.length);
		//   // }
		// }
	})
})
