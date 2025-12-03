/**
 * 함수 타입 정의
 */
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수 타입 정의
 * 선언식과 동일하게 괄호 뒤에
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = "name", tall) {
    console.log(`name : ${name}`);
    if (typeof tall === "number")
        console.log(`tall : ${tall}`);
}
introduce("이정환", 179);
introduce("안현준");
export {};
