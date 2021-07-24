const { exception } = require("console");
const Intern = require("../library/Intern");

describe("Intern", () => {

    var intern = new Intern("ID", "name", "email", "school");
    it("should contain intern ID", () => {
        expect(intern.id).toBe("ID");        
    })

    it("should contain intern name", () => {
        expect(intern.name).toBe("name");        
    })

    it("should contain intern email", () => {
        expect(intern.email).toBe("email");        
    })

    it("should contain intern school name", () => {
        expect(intern.school).toBe("school");        
    })
});