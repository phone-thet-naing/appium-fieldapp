const ngasayaContractHelper = require('../../utils/make-ngasaya');
const util = require('../../utils/utility-functions');

describe('Ngasaya Contract Maker', () => {
	it('Make Ngasaya Contract', async () => {
		await util.clearNoteIcon(0, 0);
		await ngasayaContractHelper.makeNgaSaYaContract();
	});
});
