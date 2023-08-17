const HomeScreen = require('../../screen_objects/home.screen')
const Util = require('../../utils/utility-functions')
const DisbursementScreen = require('../../screen_objects/disbursement.screen')

describe('Disbursement from Field App', () => {
    it('Disburse Test', async () => {
        // Download Master Data
        // Commenting the master data download process since it takes too much time
        // await Util.download()

        // Go to Disbursement
        await $(HomeScreen.disbursement).click()
        await $('//*[@text="DISBURSEMENT"]').waitForExist({ timeout: 3000 })
        const elementList = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/rvDisbursementItems"]').$$('//*[@class="android.widget.ImageView"]')
        const disbursementCount = await $$(DisbursementScreen.disbursementCount)
        const [toDisburse, disbursedList, unDisbursedList] = [
            {
                element: elementList[0],
                count: parseInt((await disbursementCount[0].getText()).split(' ')[0])
            },
            {
                element: elementList[1],
                count: parseInt((await disbursementCount[1].getText()).split(' ')[0])
            },
            {
                element: elementList[2],
                count: parseInt((await disbursementCount[2].getText()).split(' ')[0])
            }
        ]

        console.log('toDisburse count --> ', toDisburse['count'])
        console.log('disbursedList count --> ', disbursedList['count'])
        console.log('unDisbursedList count --> ', unDisbursedList['count'])

        const totalDisbursementCount = toDisburse.count + disbursedList.count + unDisbursedList.count

        // if there toDisburse > 0
        if (toDisburse.count > 0) {
            // Click To Disburse
            await toDisburse['element'].click()
            await $('//*[@text="TO DISBURSE LIST"]').waitForExist({ timeout: 3000 })

            // Wait for disbursement element (timeout: 60s)
            await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/rvIndividualDisburseList"]').$('//*[@class="android.view.ViewGroup"]').waitForExist({ timeout: 60000 })

            const disburseElement = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/rvIndividualDisburseList"]').$$('//*[@class="android.view.ViewGroup"]')

            console.log('element size --> ', disburseElement.length)

            await $('//*[@class="android.widget.ImageView"]').waitForDisplayed({ timeout: 60000, reverse: false, timeoutMsg: 'The item is still being displayed' })
            for (const currentDisElement of disburseElement) {
                await currentDisElement.click()
                await $(DisbursementScreen.disburseBtn).waitForExist({ timeout: 5000, timeoutMsg: 'The item has not been displayed after timeout' })

                await $(DisbursementScreen.disburseBtn).click()

                // Client Signature
                await Util.drawSignature()
                // FO Signature
                await Util.drawSignature()
            }
            await driver.back()
            await driver.back()

        } else {
            console.log('No disbursement found!')
        }

        await $('//*[@text="DISBURSEMENT"]').waitForExist({ timeout: 3000 })
        if (disbursedList.count + unDisbursedList.count === totalDisbursementCount) {
            console.log('Disbursement Successful')
        } else {
            console.log('Disbursement Failed')
        }
    })
})