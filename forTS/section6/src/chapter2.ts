/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  //필드

  //생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  //메서드
  work() {
    console.log(`${this.name} is working...`);
  }
}

class ExecutiveOfficer extends Employee {
  //필드
  officeNumber: number;

  //생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  //메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("ahweuh", 25, "Developer");
// employee.name = "qweras";
// employee.age = 30;
employee.position = "designer";

console.log(employee);
