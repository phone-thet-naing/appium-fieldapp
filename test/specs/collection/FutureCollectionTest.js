const HomeScreen = require("../../screenobjects/home.screen");
const CollectionScreen = require("../../screenobjects/collection.page");
const Main = require("../../screenobjects/main");
const Util = require("../../utils/utility-functions");
const { goToSpecificCollection, checkInFODayClose } = require('./CollectionCommonFunc');

const clientListInCollection = [];

async function goToListItem() {
    await Main.asyncClick(CollectionScreen.unknownCollection);

    await CollectionScreen.clientName.waitForExist({ timeout: 10000 });
    const viewGroupList = await Main.setMultipleElements(CollectionScreen.collectionItem);
    const unknownCollectionList = viewGroupList.slice(3, viewGroupList.length);
    const firstCollectionItem = unknownCollectionList[0];

    await Main.asyncClick(firstCollectionItem);
    await Main.asyncClick(CollectionScreen.repaymentBtn);
}

describe("Making Future Collection", () => {
    it('Unknown Collection Total Repayment 0 Case', async () => {
        while (!(await HomeScreen.appointmentIcon.isExisting())) {
            await driver.back();
        }

        await goToSpecificCollection("Future Collection");

        await goToListItem();

        await Main.asyncSet(CollectionScreen.totalAmountEditText, 0);
        await Main.asyncSet(CollectionScreen.remarkEditText, 'Appium Unknown Collection Repayment 0 Case :)');

        await Main.asyncClick(CollectionScreen.repaymentBtn);
        await expect(CollectionScreen.repaymentBtn).toExist();
    });

    it('Unknown Collection Total Repayment > 0 Case', async () => {
        if (!(await CollectionScreen.repaymentBtn.isExisting())) {
            while (!(await HomeScreen.appointmentIcon.isExisting())) {
                await driver.back();
            }
            await goToSpecificCollection("Future Collection");

            await goToListItem();
        }
        const clientName = await CollectionScreen.clientName.getText();
        clientListInCollection.push(Util.formatName(clientName));

        await Main.asyncSet(CollectionScreen.totalAmountEditText, 15000);
        await Main.asyncSet(CollectionScreen.remarkEditText, 'Appium Unknown Collection Repayment > 0 Case :)');

        await Main.asyncClick(CollectionScreen.repaymentBtn);
        await Util.drawSignature();
        await expect(await $('//*[@text="UNKNOWN COLLECTION"]')).toExist();
    })

    it('Check in Day Close', async () => {
        while (!(await HomeScreen.appointmentIcon.isExisting())) {
            await driver.back();
        }

        await checkInFODayClose(clientListInCollection);
    })
})