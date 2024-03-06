describe('write-off collection test suite', () => {
    it ('write off test', async () => {
        await expect(await $('//*[@text="Write-Off Collection Sheet"]')).toExist()

        
    })
})