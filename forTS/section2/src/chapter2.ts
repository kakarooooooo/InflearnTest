//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["Hello", "im", "winterload"];

let boolArr: Array<boolean> = [true, false, true];

// 배열안에 여러가지 타입
let multiArr: (string | number)[] = [1, "hello"];

//다차원 배열의 타입
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플
//길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["abc", 1],
  ["dev", 2],
  ["qwe", 3],
  ["hua", 4],
];
