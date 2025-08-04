/*

<!DOCTYPE html>
<html>
  <head>
    <title>Form Test</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <label for="fruitSelect">과일 선택:</label>
    <select id="fruitSelect">
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="cherry">체리</option>
      <option value="grape">포도</option>
    </select>
    <script src="src/index.js"></script>
  </body>
</html>


*/

const $fruitSelect = document.getElementById("fruitSelect");

// $fruitSelect.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

$fruitSelect.remove(1);
