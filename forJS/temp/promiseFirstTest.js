const executor = (resolve, reject) => {
  setTimeout(() => {
    resolve("성공");
    reject("실패");
  }, 3000);
};

const promise = new Promise(executor);
console.log(promise);
// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
