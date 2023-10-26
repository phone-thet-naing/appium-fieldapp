const HomeScreen = require("../../screenobjects/home.screen");
const CollectionScreen = require("../../screenobjects/collection.page");
const Main = require("../../screenobjects/main");
const DayClose = require('../../screenobjects/day-close.page');
const Util = require('../../utils/utility-functions');

async function goToSpecificCollection(collectionType) {
    await Main.asyncClick(HomeScreen.collectionMenu)

    await Main.asyncClick(CollectionScreen.filter)

    const collectionTypeDDItem = (await Main.setMultipleElements(CollectionScreen.dropDownIcon))[0];

    await Main.asyncClick(collectionTypeDDItem);

    await Main.asyncClick(await $(`//*[@text="${collectionType}"]`));

    await Main.asyncClick(CollectionScreen.applyFilterBtn);
}

async function checkInFODayClose(clientListInCollection) {
    await HomeScreen.foDayCloseMenu.click();

    await DayClose.todayAllRepaymentTab.click();

    await expect(await $('//*[@text="REPAYMENT COLLECTION"]')).toBeDisplayed();

    const totalClientCount = parseInt(await DayClose.dayCloseClientCount.getText());
    console.log('Client Count -> ', totalClientCount)

    // const clientListInDayClose = await $$(CollectionScreen.tvName).map(async (item) => await item.getText());

    for (const clientName of clientListInCollection) {
        await Util.scrollTextIntoViewByClass('android.widget.ScrollView', clientName);

        await expect(await $(`//*[@text="${clientName}"]`)).toExist();

        if (await $(`//*[@text="${clientName}"]`).isExisting()) {
            await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'SUBMIT REPAYMENT');
            await DayClose.submitBtn.click();
            await expect(DayClose.correctCheckBox).toExist();
            if (await DayClose.correctCheckBox.isExisting()) {
                await DayClose.correctCheckBox.click();
                await DayClose.confirmBtn.click();
                await Util.drawSignature();
                await expect(await $('//*[@text="REPAYMENT COLLECTION"]'));
            }
        }
    }
}

async function checkVSavingInFODayClose(clientListInCollection) {
    await HomeScreen.foDayCloseMenu.click();
    await DayClose.todayAllVSavingDeposit.click();
    await expect(await $('//*[@text="V Saving Deposit"]')).toBeDisplayed();

    // const totalClientCount = parseInt(await DayClose.dayCloseClientCount.getText());
    // console.log('Client Count -> ', totalClientCount)

    // const clientListInDayClose = await $$(CollectionScreen.tvName).map(async (item) => await item.getText());

    for (const clientName of clientListInCollection) {
        await Util.scrollTextIntoViewByClass('android.widget.ScrollView', clientName);

        await expect(await $(`//*[@text="${clientName}"]`)).toExist();

        if (await $(`//*[@text="${clientName}"]`).isExisting()) {
            await Util.scrollTextIntoViewByClass('android.widget.ScrollView', 'SUBMIT REPAYMENT');
            await DayClose.submitBtn.click();
            await expect(DayClose.correctCheckBox).toExist();
            if (await DayClose.correctCheckBox.isExisting()) {
                await DayClose.correctCheckBox.click();
                await DayClose.confirmBtn.click();
                await Util.drawSignature();
                await expect(await $('//*[@text="REPAYMENT COLLECTION"]'));
            }
        }
    }
}

module.exports = { goToSpecificCollection, checkInFODayClose, checkVSavingInFODayClose };