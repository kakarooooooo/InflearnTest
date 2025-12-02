//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "ashder",
  nickname: "hwbehs",
  birth: "1994.02.23",
  bio: "hi",
  location: "Seoul",
};

let user2: User = {
  id: 2,
  name: "sadew",
  nickname: "tqwert",
  birth: "1994.02.23",
  bio: "hello",
  location: "Seoul",
};

//인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
}; //전부 지워서 빈 객체도 가능함

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  China: "cn",
};

type CountryNumberCodes = {
  [key: string]: number; // 다르면 문제가 생긴다?
  Korea: number;
};
let countryNumberAndStringCodes: CountryNumberCodes = {
  Korea: 410,
  //   UnidedState: 840,
  //   UnitedKingdom: 826,
};
