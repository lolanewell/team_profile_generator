// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Manager {
    constructor(name, id, email, manager, officeNumber) {
        super(name, id, email, manager);
        this.officeNumber = officeNumber;
    }
    getName()

    getId()
  
    getEmail()
  
    getRole()

    getOfficeNumber() {
       console.log(this.officeNumber);
    };

};


module.exports = Manager;
  