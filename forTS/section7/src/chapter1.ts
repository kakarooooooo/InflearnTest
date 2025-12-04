/**
 * 타입 변수 응용하기1
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("23", 2);

/**
 * 2번째
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "Hello", "My Name Is"]);
// "Hello"

/**
 * 세 번째
 */
interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); //3

let var2 = getLength("189eh"); //5

let var3 = getLength({ length: 10 }); //10

// let var4 = getLength(10);
