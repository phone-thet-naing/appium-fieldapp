const HomeScreen = require('../../screenobjects/home.screen');
const AppointmentScreen = require('../../screenobjects/appointment.screen');
const Util = require('../utility-functions');
const { main } = require('appium');
const Main = require('../../screenobjects/main');
const { isMemberName } = require('typescript');
// const AppointmentScreen = require('../../screen_objects/appointment.screen-debug')
var adjective = [
	'Excited',
	'Anxious',
	'Overweight',
	'Demonic',
	'Jumpy',
	'Misunderstood',
	'Squashed',
	'Gargantuan',
	'Broad',
	'Crooked',
	'Curved',
	'Deep',
	'Even',
	'Excited',
	'Anxious',
	'Overweight',
	'Demonic',
	'Jumpy',
	'Misunderstood',
	'Squashed',
	'Gargantuan',
	'Broad',
	'Crooked',
	'Curved',
	'Deep',
	'Even',
	'Flat',
	'Hilly',
	'Jagged',
	'Round',
	'Shallow',
	'Square',
	'Steep',
	'Straight',
	'Thick',
	'Thin',
	'Cooing',
	'Deafening',
	'Faint',
	'Harsh',
	'High-pitched',
	'Hissing',
	'Hushed',
	'Husky',
	'Loud',
	'Melodic',
	'Moaning',
	'Mute',
	'Noisy',
	'Purring',
	'Quiet',
	'Raspy',
	'Screeching',
	'Shrill',
	'Silent',
	'Soft',
	'Squeaky',
	'Squealing',
	'Thundering',
	'Voiceless',
	'Whispering',
];
var object = [
	'Taco',
	'Operating System',
	'Sphere',
	'Watermelon',
	'Cheeseburger',
	'Apple Pie',
	'Spider',
	'Dragon',
	'Remote Control',
	'Soda',
	'Barbie Doll',
	'Watch',
	'Purple Pen',
	'Dollar Bill',
	'Stuffed Animal',
	'Hair Clip',
	'Sunglasses',
	'T-shirt',
	'Purse',
	'Towel',
	'Hat',
	'Camera',
	'Hand Sanitizer Bottle',
	'Photo',
	'Dog Bone',
	'Hair Brush',
	'Birthday Card',
];
var list;

class MakeAppointmentHelper {
	generator() {
		return (
			adjective[Math.floor(Math.random() * adjective.length)] +
			' ' +
			object[Math.floor(Math.random() * object.length)]
		);
	}

	async fillAppointmentData(loanType) {
		await expect(await $('//*[@text="MAKE APPOINTMENT"]')).toBeDisplayed();

		const loanTypeDropdown = await driver.waitUntil(async () => {
			const dropdownList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]'
			);
			if (dropdownList.length < 2) {
				return false;
			}
			return dropdownList[1];
		});

		await loanTypeDropdown.click();
		await $(`//*[@text="${loanType}"]`).click();

		const firstDropdown = await driver.waitUntil(async () => {
			const dropdownList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]'
			);
			if (dropdownList.length < 2) {
				return false;
			}
			return dropdownList[0];
		});

		await firstDropdown.click();

		const randomDistrict = await driver.waitUntil(async () => {
			const districtList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]'
			);
			if (districtList.length < 10) {
				return false;
			}
			return districtList[Math.floor(Math.random() * 6) + 1];
		});

		await randomDistrict.click();

		const secondDropdown = await driver.waitUntil(async () => {
			const dropdownList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]'
			);
			if (dropdownList.length < 2) {
				return false;
			}
			return dropdownList[1];
		});

		await secondDropdown.click();

		const randomTown = await driver.waitUntil(async () => {
			const townList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]'
			);
			if (townList.length < 2) {
				return false;
			}
			return townList[Math.floor(Math.random() * (townList.length - 1)) + 1];
		});

		await randomTown.click();

		const thirdDropdown = await driver.waitUntil(async () => {
			const dropdownList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]'
			);
			if (dropdownList.length < 2) {
				return false;
			}
			return dropdownList[2];
		});

		await thirdDropdown.click();

		const randomLeaf = await driver.waitUntil(async () => {
			const leafList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvSpinnerItem"]'
			);
			if (leafList.length < 2) {
				return false;
			}
			return leafList[Math.floor(Math.random() * (leafList.length - 1)) + 1];
		});

		await randomLeaf.click();

		// await AppointmentScreen.ivDate.waitForClickable()
		const datePickerIcon = await AppointmentScreen.ivDate;
		await datePickerIcon.click();

		// await expect(await AppointmentScreen.dateOkBtn).toBeClickable()
		await AppointmentScreen.dateOkBtn.waitForExist();
		await AppointmentScreen.dateOkBtn.click();

		await AppointmentScreen.continueBtn.click();
	}

	async fillAppointmentDataOld(loanType) {
		await expect(await $('//*[@text="MAKE APPOINTMENT"]')).toBeDisplayed();

		// Choosing address step by step (This code chooses the very first item of every dropdown)
		let optionLeft = true;
		let index = 0;
		while (optionLeft) {
			const optionLabelList = await $$(AppointmentScreen.spinnerItem);
			const currentItem = optionLabelList[index];
			const currentLabel = await currentItem.getText();
			if (currentLabel == 'Select One') {
				await currentItem.click();
				await $(AppointmentScreen.spinnerItem).waitForExist({ timeout: 3000 });
				const options = await $$(AppointmentScreen.spinnerItem);
				await options[1].click();
			} else if (
				currentLabel == 'Group Loan' ||
				currentLabel == 'Individual Loan'
			) {
				await currentItem.click();
				await $(`//*[@text="${loanType}"]`).click();
				optionLeft = false;
				break;
			}
			index++;
		}

		await AppointmentScreen.dateDropdown.waitForEnabled();
		await AppointmentScreen.dateDropdown.click();

		await AppointmentScreen.dateOkBtn.waitForEnabled();
		await AppointmentScreen.dateOkBtn.click();

		await AppointmentScreen.continueBtn.waitForEnabled();
		await AppointmentScreen.continueBtn.click();
	}

	// Use to add member(s) from Existing Clients
	async addMember(totalClients) {
		await expect(await $(`//*[@text="ADD MEMBERS"]`)).toExist();

		while (
			parseInt((await AppointmentScreen.addBtn.getText()).split(' ')[1]) <
			totalClients
		) {
			// If it is the first time, swing first.
			if (
				parseInt((await AppointmentScreen.addBtn.getText()).split(' ')[1]) === 0
			) {
				await Util.flingToEnd(
					'androidx.recyclerview.widget.RecyclerView',
					Math.floor(Math.random() * 4 + 1)
				);
			}
			const selectedMember = await driver.waitUntil(async () => {
				const radioList = await $$(
					'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/layoutSelectIcon"]'
				);

				return radioList.length < 5
					? false
					: radioList[Math.floor(Math.random() * (radioList.length - 1))];
			});

			await selectedMember.click();

			if (
				parseInt((await AppointmentScreen.addBtn.getText()).split(' ')[1]) <
				totalClients
			) {
				await Util.flingToEnd(
					'androidx.recyclerview.widget.RecyclerView',
					Math.floor(Math.random() * 4 + 1)
				);
			}
		}

		await AppointmentScreen.addBtn.click();
	}

	async chooseLeader() {
		const selectedLeader = await driver.waitUntil(async () => {
			const radioList = await $$(AppointmentScreen.checkGroupLeader);

			if (radioList.length < 2) {
				return false;
			}

			return radioList[Math.floor(Math.random() * (radioList.length - 1))];
		});

		await selectedLeader.click();
	}

	async chooseMember() {
		const memberList = await driver.waitUntil(async () => {
			const checkboxList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/cbGroupUser"]'
			);
			if (checkboxList.length < 2) {
				return false;
			}
			return checkboxList;
		});

		const memberNameList = await driver.waitUntil(async () => {
			const tvNameList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvGroupMemberName"]'
			);
			if (tvNameList.length < 2) {
				return false;
			}
			return tvNameList;
		});

		for (let i = 0; i < memberList.length; i++) {
			if ((await memberList[i].getAttribute('checked')) === 'false') {
				await memberNameList[i].click();
			}
		}
	}

	// This code will choose a random group from existing groups
	async chooseRandomGroup() {
		await Util.flingToEnd(
			'androidx.recyclerview.widget.RecyclerView',
			Math.floor(Math.random() * 4 + 1)
		);

		// This will generate a random index for displayed checkbox btns
		const randomGroup = await driver.waitUntil(async () => {
			const chooseBtnList = await $$(
				'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/choose_group_button"]'
			);
			if (chooseBtnList.length < 2) {
				return false;
			}

			return chooseBtnList[Math.floor(Math.random() * (chooseBtnList.length - 1))];
		});

		await randomGroup.click();
	}

	async makeGroupAppointment(group, createNewGroup) {
		// Go to appointment
		await HomeScreen.appointmentIcon.click();

		await this.fillAppointmentData('Group Loan');

		await this.chooseRandomGroup();

		await this.chooseMember();

		await this.chooseLeader();

		await AppointmentScreen.createNewNgasayaBtn.click();
	}

	async makeGroupAppointmentWithNewGroup({ totalMembers }) {
		await HomeScreen.appointmentIcon.click();

		await this.fillAppointmentData('Group Loan');

		await AppointmentScreen.createNewGroup.waitForExist({
			timeoutMsg: 'Create button not found',
		});
		await AppointmentScreen.createNewGroup.click();

		await Main.asyncClick(AppointmentScreen.actionSpinner);
		await Main.asyncClick($(`//*[@text="${'Add Existing Member'}"]`));

		// argument -> number of members
		await this.addMember(totalMembers);

		await this.chooseLeader();

		await AppointmentScreen.createNewNgasayaBtn.click();
	}

	// This code will make an appointment with an existing client
	async makeIndividualAppointment() {
		await HomeScreen.appointmentIcon.click();
		// Fill Appointment Data
		await this.fillAppointmentData('Individual Loan');

		await expect(await AppointmentScreen.addExistingMemberIcon).toExist();
		await AppointmentScreen.addExistingMemberIcon.click();

		await this.addMember(1);

		// const client = desired_client
		// // const clientId = client.slice(4, 9)
		// // await AppointmentScreen.searchBar.setValue(clientId)
		// let searchKeywords = client.split(' ').slice(1).join(' ')
		// await AppointmentScreen.searchBar.setValue(searchKeywords)
		// await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${client}")`)
		// await $(`//*[@text="${client}"]`).waitForExist({ timeout: 60000 })
		// await $(`//*[@text="${client}"]`).click()
		// await driver.pause(1000)

		// await AppointmentScreen.addBtn.click();
		await AppointmentScreen.createAppointmentBtn.click();
	}

	async make_individual_appointment_with_new_client() {
		await HomeScreen.appointmentIcon.click();
		await this.fillAppointmentData('Individual Loan');
		await AppointmentScreen.add_new_client.click();
		await AppointmentScreen.new_member_name_input.setValue(this.generator());
		await AppointmentScreen.new_member_phone_input.setValue('969998180');
		await AppointmentScreen.pick_dob();
		await AppointmentScreen.new_member_nrc_picker.setValue('000123');
		await AppointmentScreen.new_member_continue_btn.click();
		await AppointmentScreen.createAppointmentBtn.click();
	}
}

module.exports = new MakeAppointmentHelper();
