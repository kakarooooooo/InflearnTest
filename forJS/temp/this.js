// const cafe = {
//   brand: "이디야",
//   menu: "아메리카노",

//   print: function () {
//     console.log(this);
//   },
// };

// const myCafe = cafe.print; // 전역
// myCafe();

// cafe.print(); // 지역

//생성자 함수
function Cafe(menu) {
  console.log(this);
  this.menu = menu;
}
let myCafe = new Cafe("latte");
console.log(myCafe);

// //콜백함수
// const cafe = {
//   brand: "이디야",
//   menu: "",
//   setMenu: function (menu) {
//     this.menu = menu;
//   },
// };

// function getMenu(menu, callback) {
//   callback(menu);
// }

// getMenu("핫초코", cafe.setMenu);

// console.log(cafe);
