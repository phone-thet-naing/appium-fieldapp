const HomeScreen = require('../../screenobjects/home.screen');
const AppointmentScreen = require('../../screenobjects/appointment.screen');
const Util = require('../utility-functions');
const { main } = require('appium');
const Main = require('../../screenobjects/main');
const { isMemberName } = require('typescript');
// const AppointmentScreen = require('../../screen_objects/appointment.screen-debug')

const { adjective, object } = require('../../data/data');

class MakeAppointmentHelper {
	generator() {
		return (
			adjective[Math.floor(Math.random() * adjective.length)] +
			' ' +
			object[Math.floor(Math.random() * object.length)]
		);
	}

	/**
	 * 
	 * @param {["Individual Loan", "Group Loan"]} loanType 
	 */
	async fillAppointmentData(loanType) {
		await expect(await $('//*[@text="MAKE APPOINTMENT"]')).toBeDisplayed();
		console.log({loanType})

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

	// This function adds member(s) from Existing Clients
	async addMember(totalClients, clientNames = []) {
		await expect(await $(`//*[@text="ADD MEMBERS"]`)).toExist();

		while (
			parseInt((await AppointmentScreen.addBtn.getText()).split(' ')[1]) <
			totalClients
		) {
			// If name was provided
			if (clientNames.length > 0) {
				const searchBoxInput = await AppointmentScreen.searchBar;

				for (let i = 0; i < clientNames.length; i++) {
					await searchBoxInput.setValue(clientNames[i]);

					const selectedMember = await driver.waitUntil(async () => {
						const radioList = await $$('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/layoutSelectIcon"]');
		
						return radioList.length < 1
							? false
							: radioList[0];
					});

					const clientNameDisplayed = await (await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvExistingClientName"]')).getText()
					const lastName = clientNameDisplayed.replace(/Daw|U/g, "").trim()

					if (clientNames[i] == lastName) {
						await selectedMember.click();
					} else {
						throw new Error("Client name does not exist")
					}
				}				

				await AppointmentScreen.addBtn.click();

				return;
			}
			// Swing the first time.
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
		await Util.flingToEnd('androidx.recyclerview.widget.RecyclerView', Math.floor(Math.random() * 4 + 1));

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
		await this.fillAppointmentData('Group Loan');
		await AppointmentScreen.createNewGroup.waitForExist({
			timeoutMsg: 'Create button not found',
		});
		await AppointmentScreen.createNewGroup.click();
		await Main.asyncClick(AppointmentScreen.actionSpinner);
		await Main.asyncClick($(`//*[@text="${'Add Existing Member'}"]`));
		await this.addMember(totalMembers);
		await this.chooseLeader();
		await AppointmentScreen.createNewNgasayaBtn.click();
	}

	// This code will make an appointment with an existing client
	async makeIndividualAppointment(input) {
		
		// Fill Appointment Data
		await this.fillAppointmentData('Individual Loan');

		await expect(await AppointmentScreen.addExistingMemberIcon).toExist();
		await AppointmentScreen.addExistingMemberIcon.click();

		await this.addMember(1, input?.client_names);

		await AppointmentScreen.createAppointmentBtn.click();
	}

	async makeAppointmentWithNewClient() {
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

	/**
	 * 
	 * @param {{name: string, phone: string, dob: string, nrcNo: string}[]} members
	 */
	async addNewMember(members) {
		for (let i = 0; i < members.length; i++) {
			await AppointmentScreen.createNewClientBtn.click();

			const addNewMemberBtn = await AppointmentScreen.addNewMemberLabel;

			await expect(addNewMemberBtn).toExist();
			await addNewMemberBtn.click();

			const { namePrefix, phonePrefix } = await driver.waitUntil(async () => {
				const spinnerItems = await $$(AppointmentScreen.spinnerItem)

				return spinnerItems.length === 2 ? { namePrefix: spinnerItems[0], phonePrefix: spinnerItems[1]} : false;
			})

			const validPrefixList = ["Daw", "U"];

			const namePrefixExists = validPrefixList.includes(members[i].name.split(" ")[0]);

			let namePrefixValue

			if (namePrefixExists) {
				const namePrefixValue = validPrefixList.includes(members[i].name.split(" ")[0]) ? members[i].name.split(" ")[0] : "U";
				const lastNameValue = members[i].name.split(" ").slice(1).join(" ");
			}

			if ((await namePrefix.getText()).trim() !== namePrefixValue) {
				await namePrefix.click();
				await $(`//*[@text="${namePrefixValue}"]`).click();
			}		

			await AppointmentScreen.nameInput.setValue(lastNameValue)

			await AppointmentScreen.phoneInput.setValue(members[i].phone)

			await AppointmentScreen.datePicker.click()
			await AppointmentScreen.dateOkBtn.click()

			await Util.fillNrc(false)

			await AppointmentScreen.okBtn.click()			
		}

		await AppointmentScreen.createAppointmentBtn.click()
	}
}

module.exports = new MakeAppointmentHelper();
