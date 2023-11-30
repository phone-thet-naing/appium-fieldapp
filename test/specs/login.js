describe(" test case", () => {
    it("CASE 1", async () => {
        const username = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/editTextUserName"]');
        const password = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/editTextPassword"]');
        const signinBtn = await $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/cardViewLogin"]');

        await username.setValue("hnineel")
        await password.setValue("train")
        await signinBtn.click();
    })
})