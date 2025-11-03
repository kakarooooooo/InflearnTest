//객체
//object타입이 아님-> property 접근 불가
//객체 리터럴 타입 사용
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "abc",
};

let config: {
  readonly apiKey: string; // 값 바꾸기 X
} = {
  apiKey: "shaweihd",
};
