/**
 * 인덱스드 엑세스 타입 - string literal type 사용 -> "author" : index / Post["author"]["id"] 이런 식으로도 가능
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(author: PostList[number]["author"]) {
  console.log(`${author.name} ${author.id}`);
}

const post: PostList[0] = {
  title: "title",
  content: "post contents",
  author: {
    id: 1,
    name: "qhowe",
    age: 32,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNum = Tup[number];
