//enum

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "name1",
  role: Role.ADMIN, // 0 : 관리자
  language: Language.korean,
};
const user2 = {
  name: "name2",
  role: Role.USER, // 1 : 유저
  language: Language.korean,
};
const user3 = {
  name: "name3",
  role: Role.GUEST, // 2 : guest
  language: Language.english,
};

console.log(user1, user2, user3);
