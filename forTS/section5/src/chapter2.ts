/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  //   name: "string"; // 합침에서 같은 이름 선언시 sub type도 안됨
  age: number;
}

interface Developer extends Person {
  name: "Hi";
}
const person: Person = {
  name: "",
  age: 1,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
