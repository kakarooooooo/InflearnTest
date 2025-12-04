/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "qiuhwe",
  age: 44,
  position: "Developer",
  work() {
    console.log("working...");
  },
};

class Employee {
  //필드
  name: string;
  age: number;
  position: string;

  //생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("working...");
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
}

const employeeB = new Employee("qhwe", 33, "Developer");
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
  name: "qiuhgwkje",
  age: 23,
  position: "Work",
  work() {},
};
