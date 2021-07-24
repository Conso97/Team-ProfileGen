const { exception } = require("console");
const Engineer = require("../library/Engineer");

describe("Engineer", () => {

    var engineer = new Engineer("ID", "name", "email", "github");
    it("should contain engineer ID", () => {
        expect(engineer.id).toBe("ID");        
    })

    it("should contain engineer name", () => {
        expect(engineer.name).toBe("name");        
    })

    it("should contain engineer email", () => {
        expect(engineer.email).toBe("email");        
    })

    it("should contain engineer github account", () => {
        expect(engineer.github).toBe("github");        
    })
});