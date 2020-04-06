const genarateUniqueId = require("../../src/utils/generateIniqueId");

describe("Generate Unique Id", () => {
    it("shoult generate an unique ID", () => {
        const id = genarateUniqueId();

        expect(id).toHaveLength(8);
    });
});