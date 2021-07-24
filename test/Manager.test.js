const { exception } = require("console");
const Manager = require("../library/Manager");

describe("Manager", () => {

    var manager = new Manager("ID", "name", "email", "1D");
    it("should contain manager ID", () => {
        expect(manager.id).toBe("ID");        
    })

    it("should contain manager name", () => {
        expect(manager.name).toBe("name");        
    })

    it("should contain manager email", () => {
        expect(manager.email).toBe("email");        
    })

    it("should contain manager office number", () => {
        expect(manager.officeNumber).toBe("1D");        
    })
});