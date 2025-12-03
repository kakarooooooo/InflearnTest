/**
 * 함수 타입 정의
 */

function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수 타입 정의
 * 선언식과 동일하게 괄호 뒤에
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 필수매개변수가 선택적 매개변수보다 앞에 있어야함
 */

function introduce(name = "name", age: number, tall?: number) {
  console.log(`name : ${name}`);
  if (typeof tall === "number") console.log(`tall : ${tall}`);
}

introduce("이정환", 31, 179);
introduce("안현준", 31);

function getSum(...rest: number[]) {
  //rest parameter -> 전달받은 파라미터를 배열로
  let sum = 0;
  rest.forEach((i) => (sum += i));
  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
