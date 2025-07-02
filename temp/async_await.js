// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("3초 지남");
//     }, ms);
//   });
// };

// const start = async () => {
//   let result = await delay(3000);
//   console.log(result);
//   // delay(3000).then((res) => {
//   //   console.log(res);
//   // });
// }; //async = promise객체반환?

// start();

const workA = (value, callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("A");
    }, 5000);
  });
};
const workB = (value, callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("B");
    }, 3000);
  });
};
const workC = (value, callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("C");
    }, 10000);
  });
};

const start = async () => {
  try {
    let result1 = await workA();
    let result2 = await workB();
    let result3 = await workC();

    console.log(result1);
    console.log(result2);
    console.log(result3); // 18초 (순차실행)

    let result = await Promise.all([workA(), workB(), workC()]);
    console.log(result); // 10초 (동시실행)
  } catch (error) {
    console.log(error);
  }
  // delay(3000).then((res) => {
  //   console.log(res);
  // });
}; //async = promise객체반환?

start();
