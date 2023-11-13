const ngasayaContractHelper = require("../../utils/make-ngasaya")

describe("Ngasaya Contract Maker", () => {
	it("Make Ngasaya Contract", async () => {
		await ngasayaContractHelper.makeNgaSaYaContract()
	})
})
