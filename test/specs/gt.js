const InterviewScreen = require('../screenobjects/interview.screen')
const MasterScreenClass = require('../screenobjects/master.screen')
const MasterScreen = new MasterScreenClass('uat')
const InterviewProcessHelper = require("../utils/helpers/interview_process.helper")
const Interview = require("../screenobjects/interview-process.screen");
const Main = require("../screenobjects/main.js");

describe("General test suite", () => {
  it("General test case", async () => {
    driver.actions([{
      "type": "pointer",
      "id": "finger1",
      "parameters": { "pointerType": "touch" },
      "actions": [
        { "type": "pointerMove", "duration": 0, "x": 100, "y": 100 },
        { "type": "pointerDown", "button": 0 },
        { "type": "pause", "duration": 500 },
        { "type": "pointerMove", "duration": 1000, "origin": "pointer", "x": -50, "y": 0 },
        { "type": "pointerUp", "button": 0 }
      ]
    }, {
      "type": "pointer",
      "id": "finger2",
      "parameters": { "pointerType": "touch" },
      "actions": [
        { "type": "pointerMove", "duration": 0, "x": 100, "y": 100 },
        { "type": "pointerDown", "button": 0 },
        { "type": "pause", "duration": 500 },
        { "type": "pointerMove", "duration": 1000, "origin": "pointer", "x": 50, "y": 0 },
        { "type": "pointerUp", "button": 0 }
      ]
    }]);

    // release an action
    driver.actions();
  })
})