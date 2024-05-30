

describe("Making CA Review", () => {
    it("Make CA Review to Interview of Given ID", async () => {
        const credentials = {
            username: "chanmk",
            password: "train"
        }

        await browser.maximizeWindow();
        await browser.url(`https://ca-uat.hanamicrofinance.net/login`);

        await DashboardPage.caLogin(credentials.username, credentials.password);
    })
})