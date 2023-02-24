// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer {
    constructor(name, id, email, engineer, github) {
        super(name, id, email, engineer);
        this.github = github;
    };
    getName()

    getId()
    
    getEmail()
    
    getRole()
  
    getGithub() {
      console.log(this.github);
    };
};


 
module.exports = Engineer;
