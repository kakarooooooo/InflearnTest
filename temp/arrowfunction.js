// function Counter() {
//   this.count = 0;
//   setInterval(() => {
//     this.count++;
//     console.log(this.count);
//   }, 2000);
// }

// const counter = new Counter();

const cafe = {
  brand: "이디야",
  menu: "아메리카노",
  print: () => {
    // 상위객체인 전역의 this
    console.log(this);
  },
};

cafe.print();
