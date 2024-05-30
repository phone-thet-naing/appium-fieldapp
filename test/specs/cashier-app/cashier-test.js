describe("Cashier Test", () => {
    it("Checking if the test works", async () => {
        const { collectionTab } = await driver.waitUntil(async () => {
            const textComponents = await $$('//*[@class="android.widget.TextView"]')

            if (textComponents.length < 9) {
                return false 
            }

            return {
                collectionTab: textComponents[4]
            }
        })

        await expect(collectionTab).toHaveText("Collection")
    })

    it.only("Download test", async function () {
        const downloadBtn = await $('//*[@resource-id="com.hanamicrofinance.cashierapp.uat:id/cvDownload"]')
        await downloadBtn.click()
    })
})