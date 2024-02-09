const Util = require('../../utils/utility-functions')
const MAX_TIMEOUT = 100000
const HomeScreen = require("../../screenobjects/home.screen");

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
        await HomeScreen.navigateToInterventionAssessment();

        
    })

    it("Repayment Type-1a Test", async () => {
        
    })

    it("Repayment Type-2a Test", async () => {

    })
})