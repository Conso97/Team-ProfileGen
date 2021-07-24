const { exception } = require("console");
const Employee = require("../library/Employee");

describe("Employee", () => {

    var employee = new Employee("ID", "name", "email");
    it("should contain employee ID", () => {
        expect(employee.id).toBe("ID");        
    })

    it("should contain employee name", () => {
        expect(employee.name).toBe("name");        
    })

    it("should contain employee email", () => {
        expect(employee.email).toBe("email");        
    })
});