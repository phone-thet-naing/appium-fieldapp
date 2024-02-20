const Util = require('../../utils/utility-functions')
const MAX_TIMEOUT = 100000
const HomeScreen = require("../../screenobjects/home.screen");
const interventionAssessmentScreen = require('../../screenobjects/intervention-assessment.screen');

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
        const isInFormCreationScreen = await (await $('//*[@text="Intervention Assessment"]')).isDisplayed();
        if (!isInFormCreationScreen) {
            await HomeScreen.navigateToInterventionAssessment();
        }   

        await interventionAssessmentScreen.createAssessment({foType: "Recovery Field Officer", region: "Region 5",});
    })

    it("Repayment Type-1a Test", async () => {
        
    })

    it("Repayment Type-2a Test", async () => {

    })
})