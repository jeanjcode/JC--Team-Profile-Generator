// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  renderName() {
    return this.name;
  }
  renderID() {
    return this.id;
  }
  renderEmail() {
    return this.email;
  }
  renderRole() {
    return "Employee";
  }
}

module.exports = Employee;
