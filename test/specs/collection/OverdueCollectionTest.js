const HomeScreen = require("../../screenobjects/home.screen");
const CollectionScreen = require("../../screenobjects/collection.page");
const Main = require("../../screenobjects/main");
const Util = require("../../utils/utility-functions");
const DayClose = require("../../screenobjects/day-close.page");
const { goToSpecificCollection, checkInFODayClose } = require('./CollectionCommonFunc');

// android.widget.ScrollView -> scroll view class

const clientListInCollection = [];

const chooseAClientItem = async () => {
    const collectionItems = await Main.setMultipleElements(CollectionScreen.collectionItem);
    await Main.asyncClick(await collectionItems[collectionItems.length - 1]);
    await Main.asyncClick(CollectionScreen.makeRepaymentBtn);
}

function formatName(name) {
    return name.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

describe("Making Overdue Collection", () => {
    it("Repayment amount should not exceed total amount", async () => {
        await goToSpecificCollection("Overdue Collection");

        await chooseAClientItem();

        const totalAmountText = await CollectionScreen.totalAmount.getText();

        const warningText = "Total amount must not be more than " + totalAmountText;

        const totalAmount = parseInt(
            totalAmountText.split(" ")[0].split(",").join("")
        );

        await Main.asyncSet(CollectionScreen.totalAmountEditText, totalAmount + 1);

        await expect(await CollectionScreen.repaymentAmountWarning).toHaveText(
            warningText
        );
    });

    it('Repayment amount must be more than 0 MMK', async () => {

        if (!(await CollectionScreen.repaymentBtn.isExisting())) {
            while (!(await HomeScreen.appointmentIcon.isExisting())) {
                await driver.back();
            }

            await goToSpecificCollection("Overdue Collection");

            await chooseAClientItem();
        }

        await Main.asyncSet(CollectionScreen.totalAmountEditText, 0);

        await Main.asyncClick(CollectionScreen.repaymentBtn);

        await expect(CollectionScreen.repaymentBtn).toExist()
    });

    it('Repaying the total payable amount', async () => {
        if (!(await CollectionScreen.repaymentBtn.isExisting())) {
            while (!(await HomeScreen.appointmentIcon.isExisting())) {
                await driver.back();
            }
            await goToSpecificCollection("Overdue Collection");

            await chooseAClientItem();
        }

        const clientName = await CollectionScreen.clientName.getText();
        clientListInCollection.push(formatName(clientName));

        const totalAmountText = await CollectionScreen.totalAmount.getText();

        const totalAmount = parseInt(
            totalAmountText.split(" ")[0].split(",").join("")
        );

        await Main.asyncSet(CollectionScreen.totalAmountEditText, totalAmount);

        await Main.asyncClick(CollectionScreen.repaymentBtn);

        await Util.drawSignature()

        const collectionTitle = 'COLLECTION';
        await expect(await $(`//*[@text="${collectionTitle}"]`)).toExist();
    })

    it('Check in Day Close', async () => {
        while (!(await HomeScreen.appointmentIcon.isExisting())) {
            await driver.back();
        }

        await checkInFODayClose(clientListInCollection);
    })

    it ('Upload Collection in Day Close', async () => {
        await driver.back()
        await Main.uploadData()
    })
});
