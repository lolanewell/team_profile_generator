// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Intern {
    constructor(name, id, email, intern, school) {
        super(name, id, email, intern)
        this.officeNumber = school;
    };
    getName()

    getId()
  
    getEmail()
  
    getRole()

    getSchool() {
       console.log(this.school);
    };
};

  
module.exports = Intern;