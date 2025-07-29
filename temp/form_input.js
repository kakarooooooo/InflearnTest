/*

<!DOCTYPE html>
<html>
  <head>
    <title>Form Test</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <label for="userName">이름:</label>
    <input type="text" id="userName" placeholder="이름을 입력하세요" />

    <label for="password">비밀번호:</label>
    <input type="password" id="password" placeholder="비밀번호를 입력하세요" />

    <button>로그인</button>
    <script src="src/index.js"></script>
  </body>
</html>


*/

const $userName = document.getElementById("userName");
const $password = document.getElementById("password");

const $loginBtn = document.querySelector("button");

// $loginBtn.addEventListener("click", () => {
//   console.log($userName.value);
//   console.log($password.value);
// });

$userName.value = "일이삼";

$password.addEventListener("input", (event) => {
  console.log(event.target.value);
});
