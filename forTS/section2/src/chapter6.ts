// any
// 특정 변수의 타입을 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 25;
unknownVar = () => {};

// num = unknownVar; 불가능
// unknownVar.toUpperCase() 불가능

if (typeof unknownVar === "number") {
  //타입정제
  num = unknownVar;
}
