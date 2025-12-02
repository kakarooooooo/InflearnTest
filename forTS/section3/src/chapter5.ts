/**
 * 타입 추론
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "abc",
  profile: {
    nickname: "bcc",
  },
  urls: ["whxheigasdjkrew"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();

const num = 10; // const로 선언시 리터럴타입
const str = "hello";

let arr = [1, "string"]; // union타입으로 추론
