// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, employee) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = employee;
    };
  
  getName() {
    console.log(this.name);
  };
  
  getId() {
    console.log(this.id);
  };
  
  getEmail() {
    console.log(this.email);
  };
  
  getRole() {
    console.log(this.role);
  };
};
const employee = new Employee(this.name, this.id, this.email, this.role);

module.exports = Employee;

  