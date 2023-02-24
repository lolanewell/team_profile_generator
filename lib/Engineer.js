// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");


class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
  }
  


  module.exports = Engineer;
