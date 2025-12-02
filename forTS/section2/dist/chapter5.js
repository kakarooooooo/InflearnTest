//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 10] = "USER";
    Role[Role["GUEST"] = 11] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
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
export {};
