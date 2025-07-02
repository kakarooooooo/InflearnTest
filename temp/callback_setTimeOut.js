const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5);
  }, 5000);
};
const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3);
  }, 3000);
};
const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 10000);
};

workA(10, (resA) => {
  console.log(`workA : ${resA}`);
  workB(resA, (resB) => {
    console.log(`workB : ${resB}`);
    workC(resB, (resC) => {
      console.log(`workC : ${resC}`);
    });
  });
});

//콜백의 가독성이 떨어지고 아래와 같이 처리가 가능

// const workA = (value) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value + 5);
//     }, 5000);
//   });
//   return promise;
// };
// const workB = (value) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value - 3);
//     }, 3000);
//   });
//   return promise;
// };
// const workC = (value) => {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(value + 10);
//     }, 10000);
//   });
//   return promise;
// };

// workA(10)
//   .then((resA) => {
//     console.log(`1. ${resA}`);
//     return workB(resA);
//   })
//   .then((resB) => {
//     console.log(`2. ${resB}`);
//     return workC(resB);
//   })
//   .then((resC) => {
//     console.log(`3. ${resC}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
