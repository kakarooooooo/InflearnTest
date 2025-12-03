/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  //   name: "hello"; // 다시 정의하고자 하는 타입이 원본의 sub타입이어야만 한다.
  //   name: number;
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}
