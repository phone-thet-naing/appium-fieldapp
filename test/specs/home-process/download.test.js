describe("Download Test", () => {
	it("Case 1", async () => {
		const androidViewList = await $$('//*[@class="android.view.View"]')

		console.log("androidView count => ", androidViewList.length)
	})
})
