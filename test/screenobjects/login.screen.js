class LoginScreen {
	get logo() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/ivLogo"]'
	}

	get userNameTextBox() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/editTextUserName"]'
	}

	get passwordTextBox() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/editTextPassword"]'
	}

	get loginBtn() {
		return '//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/cardViewLogin"]'
	}

	async login(username, password) {
		await $(this.userNameTextBox).setValue(username)
		await $(this.passwordTextBox).setValue(password)
		await $(this.loginBtn).click()
	}
}

module.exports = new LoginScreen()
