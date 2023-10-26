const LoginScreen = require('../../screenobjects/login.screen')
const userCredentials = require('../../data/input_data.json').user_credentials

const validCredentials = userCredentials.valid_credentials
const invalidCredentials = userCredentials.invalid_credentials

describe('Login', () => {

    it('Invalid Login Test', async () => {
        // TO DO   

        await $(LoginScreen.logo).waitForExist({ timeout: 5000 })
        await $(LoginScreen.userNameTextBox).setValue(invalidCredentials.userName)
        await $(LoginScreen.passwordTextBox).setValue(invalidCredentials.password)
        await $(LoginScreen.loginBtn).click()
        await expect(await $('//*[@text="Bad Credentials"]')).toExist()

    })

    it('Valid Login Test', async () => {

        await $(LoginScreen.logo).waitForExist({ timeout: 5000 })
        await $(LoginScreen.userNameTextBox).setValue(validCredentials.userName)
        await $(LoginScreen.passwordTextBox).setValue(validCredentials.password)
        await $(LoginScreen.loginBtn).click()

    })
})