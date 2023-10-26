const HomeScreen = require("../../screenobjects/home.screen");
const CollectionScreen = require("../../screenobjects/collection.page");
const Main = require("../../screenobjects/main");
const Util = require("../../utils/utility-functions");
const { goToSpecificCollection, checkInFODayClose, checkVSavingInFODayClose } = require('./CollectionCommonFunc');

const clientListInCollection = [];

async function goToVSavingMenu() {
    await Main.asyncClick(HomeScreen.collectionMenu);
    await Main.asyncClick(CollectionScreen.vSavingMenu);
    await expect(CollectionScreen.clientName).toExist();
    const firstVSavingClient = (await Main.setMultipleElements(CollectionScreen.tvName))[0];
    await Main.asyncClick(firstVSavingClient);
    await expect(await $('//*[@text="Make V Saving Deposit"]')).toExist();
}

describe("V Saving Collection", () => {
    it("Invalid Saving Amount Case", async () => {
        while (!(await HomeScreen.appointmentIcon.isExisting())) {
            await driver.back();
        }
        await Main.asyncClick(HomeScreen.collectionMenu);
        await Main.asyncClick(CollectionScreen.vSavingMenu);
        await expect(CollectionScreen.clientName).toExist();
        const firstVSavingClient = (await Main.setMultipleElements(CollectionScreen.tvName))[0];
        await Main.asyncClick(firstVSavingClient);
        await expect(await $('//*[@text="Make V Saving Deposit"]')).toExist();

        await Main.asyncSet(CollectionScreen.depositAmountEditText, 0);
        await Main.asyncClick(CollectionScreen.vSavingDepositSubmitBtn);
        await expect(CollectionScreen.repaymentAmountWarning).toExist();
    });

    it("Valid Saving Amount Case", async () => {
        if (!(await CollectionScreen.vSavingDepositSubmitBtn.isExisting())) {
            while (!(await HomeScreen.appointmentIcon.isExisting())) {
                await driver.back();
            }
            await goToVSavingMenu();
        }
        const clientName = await CollectionScreen.clientName.getText();
        clientListInCollection.push(Util.formatName(clientName));
        await Main.asyncSet(CollectionScreen.depositAmountEditText, 10000);
        await Main.asyncClick(CollectionScreen.vSavingDepositSubmitBtn);
        await Util.drawSignature();
        await expect(await $('//*[@text="COLLECTION"]')).toExist();
    })

    it('Check in Day Close', async () => {
        while (!(await HomeScreen.appointmentIcon.isExisting())) {
            await driver.back();
        }
        await checkVSavingInFODayClose(clientListInCollection);
    })
})