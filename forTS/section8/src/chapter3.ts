/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

//한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ...function
  return {
    id: 1,
    name: "ahuwer",
    age: 26,
  };
}

const user = fetchUser();
// user.name = "123";

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  //...function
}

updateUser({
  //   id: 1,
  //   name: "ahuwer",
  age: 25,
});
