const InterviewScreen = require('../../screenobjects/interview-process.screen');
const InterviewProcessHelper = require('../../utils/helpers/interview_process.helper');
const HomeScreen = require('../../screenobjects/home.screen')
const NgasayaContract = require('../../screenobjects/ngasaya-contract.screen');
const NgasayaUtil = require('../../utils/make-ngasaya');

describe('Creating Individual Interview', () => {
    it('Open Interview', async () => {
        const {interviewProcess} = await driver.waitUntil(async () => {
            const viewGroup = await $$(HomeScreen.viewGroup);
            
            if (viewGroup.length < 40) {
                return false;
            }

            return {interviewProcess: viewGroup[25]}
        })
        await interviewProcess.click();
        return false;
    });

    it('Make Ngasaya Contract', async () => {
        const contractScreenExists = await (await NgasayaContract.individualContractScreenLabel).isDisplayed() || false;

        if (contractScreenExists) {
            await NgasayaUtil.makeIdlContract();
        }

        try {
            await NgasayaContract.interviewBtn.click();
        } catch (error) {
            throw new Error('Interview btn error: ', error);
        }
    });

    it('Interview Client Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="Interview Appointment"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.interviewClientScreen();
        }
    });

    it('Personal Detail Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="PERSONAL DETAIL"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.personalDetailPage();
        }
    })

    it('Household Detail Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="HOUSEHOLD DETAIL"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.householdDetailPage();
        }
    }) 

    it('Earning Family Member Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="EARNING FAMILY MEMBER"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.earningFamilyMemberPage();
        }
    })

    it('Household Verification Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="HOUSEHOLD VERIFICATION"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.householdVerificationPage();
        }
    })

    it('Current Loan & Credit History Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="CURRENT LOAN & CREDIT HISTORY"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.currentLoanAndCreditHistoryPage();
        }
    })

    it('CoApplicant Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="CO-APPLICANT"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.individualCoApplicant();
        }
    })

    it('Business Profile Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="BUSINESS PROFILE"]')).isDisplayed() || false;
        if(desiredTabLabelExists) { await InterviewProcessHelper.
            businessProfilePage("individual");
        }
    })

    it('Agri Business Profile Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="AGRI BUSINESS PROFILE"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.agriBusinessProfile();
        }
    })

    it('Agri Plot Information Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="AGRI PLOT INFORMATION"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.agriPlotInformation();
        }
    })

    it('Agriculture Practices Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="AGRICULTURE PRACTICES"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.agriculturePractices();
        }
    })

    it('AGRI INCOME Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="AGRI INCOME"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.agriIncome();
        }
    })

    it('OTHER INCOME Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="OTHER INCOME"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.otherIncomeIndividual();
        }
    })

    it('AGRI EXPENSE Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="AGRI EXPENSE"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.agriExpense();
        }
    })

    it('PERSONAL EXPENSE Screen', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="PERSONAL EXPENSE"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.personalExpensePage();
        }
    })

    it('CURRENT ASSETS', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="CURRENT ASSETS"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.currentAssetsPage();
        }
    })

    it('LONG  ASSETS', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="LONG  ASSETS"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.longTermAssetsPage();
        }
    })

    it('LIABILITIES', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="LIABILITIES"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.liabilitiesPage();
        }
    })

    it('LOAN INFORMATION', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="LOAN INFORMATION"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.loanInformationPage();
        }
    })

    it('FAMILY REFERENCE', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="FAMILY REFERENCE"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.familyReference();
        }
    })

    it('BUSINESS REFERENCE', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="BUSINESS REFERENCE"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.businessReference();
        }
    })

    it('CLIENT APP', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="CLIENT APP"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.clientAppPage();
        }
    })

    it('GUARANTOR', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="GUARANTOR"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.guarantorPage();
        }
    })

    it('ESDD CHECK LIST', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="ESDD CHECK LIST"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.esddCheckList();
        }
    })

    it('ATTACHMENT - CLIENT', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="ATTACHMENT - CLIENT"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.attachmentClientPage();
        }
    })

    it('ATTACHMENT - LOAN', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="ATTACHMENT - LOAN"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.attachmentLoanPage();
        }
    })

    it('ATTACHMENT - COAPPLICANT', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="ATTACHMENT - COAPPLICANT"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.attachmentCoApplicant();
        }
    })

    it('ATTACHMENT - GUARANTOR', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="ATTACHMENT - GUARANTOR"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.attachmentGuarantorPage();
        }
    })

    it('CASH FLOW', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="CASH FLOW"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.cashFlowPage();
        }
    })

    it('EVALUATION', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="EVALUATION"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.evaluationPage();
        }
    })

    it('LOAN SUMMARY', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="LOAN SUMMARY"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.loanSummary();
        }
    })

    it('ASSET SUMMARY', async () => {
        const desiredTabLabelExists = await (await $('//*[@text="ASSET SUMMARY"]')).isDisplayed() || false;

        if(desiredTabLabelExists) { 
            await InterviewProcessHelper.assetSummary();
        }
    })
})