type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "똘똘이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal;

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "에바",
  price: 33000,
  //   skill: "reactjs", // 초과 property 검사
};

let book3: Book = programmingBook;
function func(book: Book) {}
func({
  name: "한입",
  price: 33000,
  //   skill: "reactjs",
});
func(programmingBook);
