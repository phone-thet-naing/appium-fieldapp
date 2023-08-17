const Test = require('../screen-objects/ngasaya-contract.screen')
const Util = require('../utils/utility-functions')
const fs = require('fs')
const AppointmentScreen = require('../screen-objects/appointment.screen')
const loanType = 'Individual Loan'
const HomeScreen = require('../screen-objects/home.screen')
const path = require("path");
const InterviewProcess = require('../screen-objects/interview-process.screen')

const listLabels = ["Guarantor Building *", "Guarantor Business Photo -1 *", "Guarantor Business Photo -2 *", "Guarantor Business Photo -2 *"]

describe("sample", () => {
  it('test', async () => {

    const radioBtn = '//*[@class="android.widget.RadioButton"]'
    const radioBtnList = await $$(radioBtn)

    console.log(radioBtnList.length)
    // console.log(userInput)
    // console.log('parameter passed --> ', param)

    const arrayOfObject = [
      { key: 0, value: 'value0' },
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' }
    ]

  })
});
