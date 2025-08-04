/*
html for domapi class

<!DOCTYPE html>
<html>
  <head>
    <title>DOM Tree</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div class="animal-info">
      <div class="info-item" id="name">강아지</div>
      <div class="info-item" id="color">갈색</div>
      <div class="info-item" id="age">2살</div>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>


*/

// let $color = document.getElementById("color");
// console.log($color);

// let $animalInfo = document.querySelector("div.animal-info");
// let $age = document.querySelector("div#age");

// console.log($animalInfo);
// console.log($age);

// let $itemInfo = document.querySelectorAll("div.info-item");
// console.log($itemInfo);

// let $infoItem = document.getElementsByClassName("info-item");
// console.log($infoItem);

// let $div = document.getElementsByTagName("div");
// console.log($div);

// let $name = document.getElementById("name");
// $name.className = "dog-name";

// console.log($name);
// console.log($name.className);

// let $animalInfo = document.querySelector("div.animal-info");
// $animalInfo.id = "animal";

// console.log($animalInfo.id);

// let $color = document.getElementById("color");
// $color.classList.remove("info-item");
// $color.classList.add("dog-color");

// console.log($color);

// let $age = document.getElementById("age");
// $age.textContent = "5살";

// console.log($age);

let $color = document.getElementById("color");
$color.style.color = "brown";
$color.style.fontSize = "30px";
