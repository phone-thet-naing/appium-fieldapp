const Util = require('../../utils/utility-functions')
const MAX_TIMEOUT = 100000

const rfo_type = 0 // 0 -> RFO, 1 -> BFO

const clientInfoList = [
    {
        id: '15748',
        name: 'Daw Kay Thwe Oo',
        phone: '09751987234'
    }
]

describe('Intervention Assessment', () => {
    it('Create New Intervention Assessment', async () => {
        const addBtn = '~'
        const desiredLabel = 'Intervention Assessment'
        const radioBtn = '//*[@class="android.widget.RadioButton"]'
        const datePicker = '//*[@class="android.widget.Spinner"]'
        const dropDown = '//*[@resource-id="react-select-8-input"]'
        const dateSetBtn = '//*[@text="SET"]'
        const chosenDay = '1'
        const chosenRegion = 'Region 5'
        const editText = '//*[@class="android.widget.EditText"]'

        const clientId = clientInfoList[0].id
        const clientName = clientInfoList[0].name
        const clientPhone = clientInfoList[0].phone

        // await Util.scrollToTextWithFirstScrollable(desiredLabel)
        // await $(`//*[@text="${desiredLabel}"]`).click()

        // await $(addBtn).waitForExist({ timeout: MAX_TIMEOUT })
        // await $(addBtn).click()
        // await $('//*[@text="Create Intervention Assessment"]').waitForExist({ timeout: MAX_TIMEOUT })

        // const radioBtnList = await $$(radioBtn)

        // // Choose fo type
        // await radioBtnList[rfo_type].click()

        // // Choose date that the FO met the client
        // await $(datePicker).click()
        // await $(dateSetBtn).waitForExist({ timeout: MAX_TIMEOUT })
        // await $(`//*[@text="${chosenDay}"]`).click()
        // await $(dateSetBtn).click()

        // // Choose Region
        // await $(dropDown).click()
        // await $(`//*[@text="${chosenRegion}"]`).click()

        const editTextList = await $$(editText)

        // Set Client Id
        const clientIdInput = editTextList[1]
        await clientIdInput.click()
        await driver.keys(clientId)
        await driver.back()
        return

        // Set Client Name
        const clientNameInput = editTextList[2]
        await editTextList[2].setValue(clientName)

        // Set Client Phone Number
        await editTextList[3].setValue(clientPhone)

        // Choose if client has own house or not   2 -> yes, 3 -> no
        await radioBtnList[2].click()

    })
})