const InterviewScreen = require('../screenobjects/interview.screen')
const MasterScreenClass = require('../screenobjects/master.screen')
const MasterScreen = new MasterScreenClass('uat')

describe("General test suite", () => {
    it("General test case", async () => {
        const viewPagerElement1 = await $(this.MasterScreen.etName())

        console.table({"viewPagerElement1: ": viewPagerElement1});

        !expect(viewPagerElement1).toExist()
    })
})