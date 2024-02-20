const Main = require("./main");

class InterventionAssessment {
    get createAssessmentBtn() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/fabNewAssessment"]');
    }

    get datePicker() {
        return $('//*[@resource-id="com.hanamicrofinance.FieldApp.uat:id/etDate"]');
    }

    /**
     * @param {string} options.foType - The type of FO (Field Officer). Possible values: "Recovery Field Officer", "Business Field Officer"
     */
    async createAssessment({ foType, region }) {
        const createBtn = await this.createAssessmentBtn;
        await createBtn.click();

        const interventionLabelElement = await $('//*[@text="Intervention Assessment"]');
        await expect(interventionLabelElement).toExist();
        
        const foTypeElement = await $(`//*[@text="${foType}"]`);
        await foTypeElement.click();    

        const meetingDate = await this.datePicker;
        await meetingDate.click();
        await (await Main.okBtn).click();

        const regionMenu = await Main.dropdownMenu;
        await regionMenu.click();
        await (await $(`//*[@text="${region}"]`)).click();
        
    }
}

module.exports = new InterventionAssessment()