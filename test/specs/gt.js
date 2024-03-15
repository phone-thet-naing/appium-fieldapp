const InterviewScreen = require('../screenobjects/interview.screen')
const MasterScreenClass = require('../screenobjects/master.screen')
const MasterScreen = new MasterScreenClass('uat')
const InterviewProcessHelper = require("../utils/helpers/interview_process.helper")
const Interview = require("../screenobjects/interview-process.screen");

describe("General test suite", () => {
    it("General test case", async () => {
        await InterviewProcessHelper.fillNrc();
    })
})