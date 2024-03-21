describe("action test", () => {
    it("gesture", async () => {
        await driver.touchAction([
            { action: 'press', x: 300, y: 700 },
            { action: 'moveTo', x: 700, y: 900 },
            'release'
        ])
    })
})