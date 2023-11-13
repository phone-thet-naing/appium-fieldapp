const loginScreen = require("../../screenobjects/login.screen")
const userCredentials = require("../../data/input_data.json").user_credentials

const validCredentials = userCredentials.valid_credentials
const invalidCredentials = userCredentials.invalid_credentials

describe("Login", () => {
	it("Invalid Login Test", async () => {
		// TO DO
		await $(loginScreen.logo).waitForExist({ timeout: 5000 })
		await $(loginScreen.userNameTextBox).setValue(invalidCredentials.userName)
		await $(loginScreen.passwordTextBox).setValue(invalidCredentials.password)
		await $(loginScreen.loginBtn).click()
		await expect(await $('//*[@text="Bad Credentials"]')).toExist()
	})

	it.only("Valid Login Test", async () => {
		await expect(await $(loginScreen.logo)).toExist()
		await loginScreen.login(validCredentials.userName, validCredentials.password)
	})
})
