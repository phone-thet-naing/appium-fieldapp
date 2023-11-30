const HomeScreen = require("../../screenobjects/home.screen")
const Utils = require('../../utils/custom-scroll')

const testData = {
	submittedDate: 'JUL 06, 2023',
	clientName: 'Daw Htay Htay Hlaing',
	district: "ကျောက်တန်း (Kyauktan)",
	ward: "အမှတ် (၁) ရပ်ကွက် (No (1) Ward)",
	date: "3 July 2023"
}

const appointment_data = {
	district: ["ကျောက်တန်း (Kyauktan)", "ကမာရွတ် (Kamaryut)"],
	ward: {
		"ကမာရွတ် (Kamaryut)": ["အမှတ် (၁) ရပ်ကွက် (No (1) Ward)"]
	},
	client_name: {
		keyword: 'zaw zaw',
		full_name: 'U Zaw Zaw'
	},
	individual_client: 'ID: 15750',
	// interview_type: 'individual',
	interview_type: 'group',
	create_new_group: true,
	// create_new_group: false,
	new_client_ids: ['ID: 15750', 'ID: 15803', 'ID: 15834']
}
const phoneNumber = '790900023'

const photos = [
	'~Photo taken on Jul 4, 2023 12:43:02 AM', '~Photo taken on Jul 4, 2023 12:42:50 AM', '~Photo taken on Jul 4, 2023 12:42:08 AM',
	'~Photo taken on Jun 26, 2023 10:55:42 AM', '~Photo taken on Jun 26, 2023 10:55:09 AM'
]

const nameList = [
	'Time', 'Past', 'Future', 'Dev',
	'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
	'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
	'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
	'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
	'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
	'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
	'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
	'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
	'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
	'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
	'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
	'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
	'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
	'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
	'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
	'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
	'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
	'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
	'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
	'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

const client_data = [
	{ clientId: '15750', clientName: 'New Form' },
	{ clientId: '15828', clientName: 'U Than Nyunt' },
	{ clientId: '15826', clientName: 'Daw Tin Nu Htwe' },
	{ clientId: '15798', clientName: 'U Aung Aung' },
]

const currentlyWorking = 'no'
const index = 0

function generateName() {
	return nameList[Math.floor(Math.random() * nameList.length)];
};

async function next() {
	await $('//*[@text="NEXT"]').click();
}
async function fillDummy() {
	await $('//*[@text="FILL DUMMY"]').click();
}

describe('component test', () => {

	it("Make Appointment", async () => {
		// click appointment icon from home page
		await $(
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View[5]/android.widget.TextView"
		).click();

		// assertion - expect MAKE APPOINTMENT label
		await expect($('//*[@text="MAKE APPOINTMENT"]')).toExist();

		// click district dropdown
		await $(
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout"
		).click();

		// choose ကျောက်တန်း option
		await $(`//*[@text="${appointment_data['district'][0]}"]`).click();

		// click town dropdown
		await $(
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout"
		).click();

		// choose တံတား option
		await $(
			`//*[@text="တံတား (Tadar Town)"]`
		).click();
		// await $(
		// 	"/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[3]/android.widget.TextView"
		// ).click();

		// click wardleaf dropdown
		await $(
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[3]/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout"
		).click();

		// choose အမှတ် (၁) ရပ်ကွက် (No (1) Ward)
		await $('//*[@text="အမှတ် (၁) ရပ်ကွက် (No (1) Ward)"]').click();

		// click date dropdown
		await $(
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.TextView[2]"
		).click();

		// choose date
		// await $(`//android.view.View[@content-desc="${testData['date']}"]`).click()
		// click ok button
		await $(
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]"
		).click();

		// click loan type dropdown
		await $(
			"/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout/android.widget.TextView"
		).click();

		// Choose Individual loan
		await $('//*[@text="Individual Loan"]').click();

		// click continue
		await $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddClient"]'
		).click();


	});

	it('add existing members', async () => {
		// ---- Add Existing Members ----
		// click 'Add Existing Members' icon
		await $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvAddExistingClients"]'
		).click();

		// search for the client with name, phone number, nrc, finflux id
		await $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtSearchExistingClient"]`).click()
		await driver.keys([...appointment_data['client_name'].split('')])
		await driver.hideDeviceKeyboard('pressKey', 'Done');

		// choose the top person
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.RelativeLayout[1]').click()
		// await $('//*[@text="Daw Thuzar"]').click();
		return;

		await driver.pause(3000)

		await $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddExistingClient"]'
		).waitForExist({ timeout: 3000 })

		// click submit button
		await $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnAddExistingClient"]'
		).click();

		// click create appointment button
		await $(
			'//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnCreateAppointment"]'
		).click();
	})
})

describe.only("Test Appointment", () => {

	it('test', async function () {


	})

	it('intervention assessment', async function () {
		await $('android=new UiScrollabe(new UiSelector().scrollable(true)).scrollToEnd(1, 5)')

		// click add new form button
		await $('//android.view.View[@content-desc=""]/android.view.View/android.widget.TextView').click()


		// check radio btn
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.RadioButton').click()

		// select date
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Spinner').click()
		// set
		await $('//*[@text="SET"]').click()

		// choose region
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[5]/android.view.View').click()
		await $(`//*[@text="Region ${Math.floor((Math.random() * 5) + 1)}"]`).click();

		await driver.pause(2000)

		// fill client id
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]').click()
		await driver.keys([...client_data[index]['clientId'].split('')])
		await driver.touchPerform([
			{ action: 'tap', options: { x: 20, y: 600 } }
		])

		// fill client name
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]').setValue(client_data[index]['clientName'])

		// fill client phone
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[3]').click()
		await driver.keys(['0', '9', ...phoneNumber.split('')])
		await driver.touchPerform([
			{ action: 'tap', options: { x: 20, y: 600 } }
		])

		// owns a house? yes
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[8]/android.widget.RadioButton').click()


		// other properties?
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[4]').setValue('Car, Bike, Wife, Cat, Dog')


		await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)')


		// does client know he has a loan
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.widget.RadioButton').click()

		// is client currently working
		if (currentlyWorking == 'yes') {
			// is client currently working if yes
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[6]/android.widget.RadioButton').click()

			// Choose ချေးငွေအသုံးပြုမည့် လုပ်ငန်းအုပ်စု
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[9]/android.view.View').click()
			await $('//*[@text="3. Production"]').click()

			await Utils.scroll(1)

			// fill other reason
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]').setValue('To buy Mercedes')

			// fill rfo's comment
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]').setValue('Appium Test')

			// Choose negotiation option
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[13]/android.view.View').click()
			await $('//*[@text="1b.)ပမာဏအချို့အားပြန်လည်ပေးဆပ်၍ကျန်ရှိသောငွေပမာဏအား အတိုးနှုန်းဖြင့်ခွဲဆပ်လိုခြင်း"]').click()

			await $('//*[@text="အသင်းသားမှပေးဆပ်လိုက်သောပမာဏ*"]').waitForExist({ timeout: 3000 })

			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]').click()
			await driver.keys('100000')
			await driver.touchPerform([
				{ action: 'tap', options: { x: 20, y: 600 } }
			])
		} else {
			// is client currently working if no
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[7]/android.widget.RadioButton').click()

			// fill မည်သည့်ငွေဖြင့်ပေးဆပ်မည်နည်း
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]').setValue("Some kind of money, I don't know.")

			// Choose ချေးငွေအသုံးပြုမည့် လုပ်ငန်းအုပ်စု
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[10]/android.view.View').click()
			await $('//*[@text="3. Production"]').click()

			// choose ချေးငွေအသုံးပြုမည့် လုပ်ငန်း အမျိုးအစား
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[12]/android.view.View').click()
			await $(`//*[contains(text(),'1000')]`).click()

			// fill အခြားရည်ရွယ်ချက်ဖြစ်ပါကထည့်ရန်
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]').setValue('To buy a Mercedes')

			// RFO ၏မှတ်ချက်
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[3]').setValue('Appium Test')

			// choose negotiation option
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[11]/android.view.View').click()
			await $(`//*[contains(text(), '1a')]`).click()

			// choose အသင်းသားမှပေးဆပ်လိုက်သောပမာဏ
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[3]').click()
			await driver.keys('100000')
			await driver.touchPerform([
				{ action: 'tap', options: { x: 20, y: 600 } }
			])
		}




		// // submit form
		// await $('//*[@text="Submit"]').click()

		// // confirmation
		// await $('//*[@text="RFO Assessment Successfully Created!"]').waitForExist({ timeout: 3000 })
		// await $('//*[@text="OK"]').click()

	})

	it("Make Appointment", async () => {
		async function makeAppointment() {
			await HomeScreen.appointmentIcon.click()
			await expect($('//*[@text="MAKE APPOINTMENT"]')).toExist(); // assertion - expect MAKE APPOINTMENT label
			await HomeScreen.districtDropdown.click();
			await $(`//*[@text="${appointment_data['district'][0]}"]`).click() // choose ကျောက်တန်း option
			await HomeScreen.townDropdown.click();
			await $(`//*[@text="တံတား (Tadar Town)"]`).click()
			await HomeScreen.wardLeafDropdown.click()
			await $('//*[@text="အမှတ် (၁) ရပ်ကွက် (No (1) Ward)"]').click()
			await HomeScreen.dateDropdown.click();
			await HomeScreen.dateOkBtn.click()
			await HomeScreen.loanTypeDropdown.click()
			if (appointment_data['interview_type'] == 'individual') {
				await $('//*[@text="Individual Loan"]').click();
				await HomeScreen.continueBtn.click();
				await HomeScreen.addExistingMemberIcon.click();
				await HomeScreen.searchBar.click()
				await driver.keys(appointment_data['individual_client'].slice(4, 9))
				await $(`//*[@text="${appointment_data['individual_client']}"]`).click()
				await driver.pause(1000)
				await driver.back()
				await HomeScreen.addBtn.click();
				await HomeScreen.createAppointmentBtn.click();
			} else if (appointment_data['interview_type'] == 'group') {
				await $('//*[@text="Group Loan"]').click();
				await HomeScreen.continueBtn.click();
				if (appointment_data['create_new_group']) {
					await $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnCreateNewGroup"]`).click() // click create new group
					await $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/spinner"]`).click() // click actions spinner
					await $(`//*[@text="${'Add Existing Member'}"]`).click() // click action []
					await $(`//*[@text="ADD MEMBERS"]`).waitForExist({ timeout: 3000 })
					for (let i = 0; i < appointment_data['new_client_ids'].length; i++) {
						const id = appointment_data['new_client_ids'][i]
						// await HomeScreen.searchBar.setValue(id.slice(4, 9))
						// await $(`//*[@text="${id}"]`).waitForExist({ timeout: 3000 })
						// await $(`//*[@text="${id}"]`).click()

						i == 0 && await HomeScreen.searchBar.click()
						await driver.keys(`${id.slice(4, 9)}`)
						await $(`//*[@text="${id}"]`).waitForExist({ timeout: 3000 })
						await $(`//*[@text="${id}"]`).click()
						await driver.pause(1000)
						await $('~Clear text').click()
					}
					await driver.back()
					await HomeScreen.addBtn.click()
					await driver.pause(1000)
					await $(`//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/chkGroupLeader"]`).click()
					await HomeScreen.createNewNgasayaBtn.click()
					await driver.pause(3000)
				}
			}
		}

		async function goToHomePage() {
			for (i of '1234') {
				await driver.back()
				await driver.pause(500)
			}
		}

		await makeAppointment()
		// await goToHomePage()
	});

	it('Loan List to Interview First Page', async function () {
		await $(`//*[@text="${testData['submittedDate']}"]`).click();

		// Access Interview btn
		let interviewBtn = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnInterview"]').isDisplayed()
		let makeInterviewBtn = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnLetMakeInterview"]').isDisplayed()
		console.log(interviewBtn, makeInterviewBtn)

		return;

		// ----Interview Process Starts----
		// If data for chosen interview has not been filled
		if (newInterview) {
			// ----First Page Starts----
			// click Loan Name drop-down
			await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivDropDown"]').click();

			// choose loan name e.g <Staff Loan>
			await $('//*[@text="Staff Loan"]').click();

			// Add Loan Amount 
			await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/edtLoanAmount"]').setValue('1000000');

			// Click Loan Term drop-down
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.RelativeLayout/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.Spinner/android.widget.LinearLayout').click();
			// Choose Loan Term
			await $('//*[@text="12"]').click();

			// Click Disbursement Date
			await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvDatePreview"]').click();
			// Choose Disbursement Date
			await $('~03 July 2023').click();
			// Click OK
			await $('//*[@text="OK"]').click();

			// Click First Repayment Date
			await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/tvFirstRepaymentDate"]').click();
			// Click Next month icon
			await $('~Next month').click();
			// Choose First Repayment Date
			await $('~03 August 2023').click();
			// Click OK
			await $('//*[@text="OK"]').click();

			// Click Submit button <အင်တာဗျူးမည်>
			await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnLetMakeInterview"]').click();
			// ----First Page Ends----
		}

		// If data has been filled
		// Preview Interview Info and Click "Interview" button
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnInterview"]').click();
	})

	it('Client Info Page | Interview Appointment', async function () {
		// set phone number
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etPhoneNo"]').setValue(phoneNumber)
		// set father name
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etFatherName"]').setValue('Mr. Father')
		// Scroll to end
		await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
		// set house no and street no
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etHouseNo"]').setValue(20)
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etStreetNo"]').setValue('Hnin Si Street')
		// Click Next button
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/btnNext"]').click();
	})


	it('Personal Detail', async function () {
		await next()
	})
	it('Household Detail', async function () {
		await next()
	})
	it('Earning Family Member', async function () {
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etText"]').setValue(2);
		await next()
	})
	it('Household Verification', async function () {
		await Utils.scroll(2)
		await fillDummy()
		await next()
	})
	it('Current Loan & Credit History', async function () {
		// number of loan that the client has to repay to other mfi companies
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etText"]').setValue(1);
		await next()
	})
	it('Co-Applicant', async () => {
		// set name
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.EditText').setValue(generateName())
		await Utils.scroll(1)
		// set phone no
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[5]/android.view.ViewGroup/android.widget.EditText').setValue('09' + phoneNumber)
		await next()
	})
	it("Interview Menu to ESDD Check List", async () => {

		// ----BUSINESS PROFILE----
		// Fill Dummy
		// await $('//*[@text="FILL DUMMY"]').click();
		// Click လုပ်ငန်းအုပ်စု
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.Spinner/android.widget.TextView').click();
		// choose 2. live stock
		await $('//*[@text="2. Livestock"]').click();
		// add လုပ်ငန်းအသေးစိတ်
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.EditText').setValue('ကြက်၊ ဘဲမွေးမြူရေး');
		// add လုပ်ငန်းအမည်
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[4]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.EditText').setValue('Hana ကြက်၊ ဘဲမွေးမြူရေး');
		// add အလုပ်သမားဦးရေ
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[4]/android.widget.LinearLayout/android.widget.EditText').setValue(10);
		await Utils.scroll(...scrollParam, 2)
		await $('//*[@text="NEXT"]').click();

		// ----OTHER INCOME----
		await $('//*[@text="NEXT"]').click();
		// ----BUSINESS INCOME----

		await $('//*[@text="NEXT"]').click();

		// ----BUSINESS EXPENSE----
		await $('//*[@text="NEXT"]').click();

		// ----PERSONAL EXPENSE----
		await Utils.scroll(...scrollParam, 1)
		await $('//*[@text="NEXT"]').click();

		// ----CURRENT ASSETS----
		await $('//*[@text="NEXT"]').click();

		// ----LONG TERM ASSETS----
		await Utils.scroll(...scrollParam, 1)
		await $('//*[@text="NEXT"]').click();

		// ----LIABILITIES----
		await $('//*[@text="NEXT"]').click();

		// ----LOGN INFORMATION----
		// add လက်ရှိထုတ်ချေးမည့် ချေးငွေအကြိမ်
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.EditText').setValue(12)
		await $('//*[@text="NEXT"]').click();

		// ----FAMILY REFERENCE----
		await $('//*[@text="NEXT"]').click();

		// ----BUSINESS REFERENCE----
		await Utils.scroll(...scrollParam, 1)
		await $('//*[@text="NEXT"]').click();

		// ----CLIENT APP----
		await $('//*[@text="NEXT"]').click();

		// ----GUARANTOR----
		await Utils.scroll(...scrollParam, 2)
		await $('//*[@text="FILL DUMMY"]').click();
		await $('//*[@text="NEXT"]').click();

		// ----ESDD CHECK LIST----
		await Utils.scroll(...scrollParam, 2)
		await $('//*[@text="NEXT"]').click();


	});

	it('Atachment Client', async () => {
		for (let i = 0; i < 4; i++) {
			// click attachment 
			await $(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${i + 1}]/android.view.ViewGroup/android.widget.ImageView`).click()
			'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.ImageView'


			const elem = await $('//*[@text="Select source"]')
			await elem.waitForExist({ timeout: 2000, reverse: false });

			// click gallery
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.ScrollView/android.widget.LinearLayout/com.android.internal.widget.RecyclerView[2]/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ImageView').click()
			// click recent items
			// await $('//*[@text="Recent"]').click()
			await $('//*[@text="Download"]').click()
			// choose an image
			// await $(`(//android.widget.FrameLayout[@content-desc="Button"])[${i + 1}]/android.widget.FrameLayout[2]`).click()
			await $(`${photos[i]}`).click()
			// crop image
			await $('//*[@text="CROP"]').click()
		}

		// scroll down
		await Utils.scroll(...scrollParam, swipe = 3)


		// // click Applicant Signature field
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivSign"]').click()

		// draw signature
		const signatureScreen = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View')
		await signatureScreen.touchAction([
			'press',
			{ action: 'moveTo', x: 50, y: 100 },
			'release'
		])

		// click ပြီးပါပြီ submit button
		await $('//*[@text="ပြီးပါပြီ"]').click()

		// click next
		await next();
	})

	it('Attachment Loan', async () => {
		await Utils.scroll(...scrollParam, 6)

		await next()
	})

	it('Attachment Coapplicant', async () => {
		for (let i = 0; i < 4; i++) {
			// click attachment 
			await $(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${i + 1}]/android.view.ViewGroup/android.widget.ImageView`).click()

			const elem = await $('//*[@text="Select source"]')
			await elem.waitForExist({ timeout: 2000, reverse: false });

			// click gallery
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.ScrollView/android.widget.LinearLayout/com.android.internal.widget.RecyclerView[2]/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ImageView').click()
			// click recent items
			// await $('//*[@text="Recent"]').click()
			await $('//*[@text="Download"]').click()
			// choose an image
			// await $(`(//android.widget.FrameLayout[@content-desc="Button"])[${i + 1}]/android.widget.FrameLayout[2]`).click()
			await $(`${photos[i]}`).click()
			// crop image
			await $('//*[@text="CROP"]').click()
		}

		// scroll down
		await Utils.scroll(...scrollParam, swipe = 1)


		// // click Applicant Signature field
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivSign"]').click()

		// draw signature
		const signatureScreen = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View')
		await signatureScreen.touchAction([
			'press',
			{ action: 'moveTo', x: 50, y: 100 },
			'release'
		])

		// click ပြီးပါပြီ submit button
		await $('//*[@text="ပြီးပါပြီ"]').click()

		// click next
		await next();
	})

	it('Attachment Guarantor', async () => {
		await Utils.scroll(...scrollParam, 1)

		for (let i = 0; i < 4; i++) {
			// click attachment 
			await $(`/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[${i + 1}]/android.view.ViewGroup/android.widget.ImageView`).click()

			const elem = await $('//*[@text="Select source"]')
			await elem.waitForExist({ timeout: 2000, reverse: false });

			// click gallery
			await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.TabHost/android.widget.LinearLayout/android.widget.FrameLayout/com.android.internal.widget.ViewPager/android.widget.ScrollView/android.widget.LinearLayout/com.android.internal.widget.RecyclerView[2]/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ImageView').click()
			// click recent items
			// await $('//*[@text="Recent"]').click()
			await $('//*[@text="Download"]').click()
			// choose an image
			// await $(`(//android.widget.FrameLayout[@content-desc="Button"])[${i + 1}]/android.widget.FrameLayout[2]`).click()
			await $(`${photos[i]}`).click()
			// crop image
			await $('//*[@text="CROP"]').click()
		}

		// scroll down
		await Utils.scroll(...scrollParam, swipe = 1)


		// // click Applicant Signature field
		await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivSign"]').click()

		// draw signature
		const signatureScreen = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.View')
		await signatureScreen.touchAction([
			'press',
			{ action: 'moveTo', x: 50, y: 100 },
			'release'
		])

		// click ပြီးပါပြီ submit button
		await $('//*[@text="ပြီးပါပြီ"]').click()

		// click next
		await next();
	})

	it('Cash Flow', async () => {
		await click()
	})

	it('Evaluation', async () => {
		await Utils.scroll(...scrollParam, 3)

		await fillDummy()

		// Fill Fo/IFO ထောက်ခံသည့်ပမာဏ
		await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[5]/android.widget.LinearLayout/android.widget.EditText').setValue(1000000)

		await next()
	})

	it('Asset Summary', async function () {
		await Utils.scroll(...scrollParam, 1)

		// click done
		await $('//*[@text="DONE"]').click()
	})
});
