/**
 * Class
 */

let studentA = {
  name: "ABC",
  grade: "A+",
  age: 32,
  study() {
    console.log("studying");
  },
  introduce() {
    console.log("Hi");
  },
};

class Student {
  // field
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("studying...");
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}.`);
  }
}

class StudentDeveloper extends Student {
  // field
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  //메서드

  programming() {
    console.log(`using ${this.favoriteSkill}`);
  }
}

let studentDeveloper = new StudentDeveloper("hopqwer", "B", 31, "JavaScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("AasqwCC", "A", 28);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
