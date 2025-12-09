/**
 * Partial<T>
 * 부분적인,일부분의
 * 특정 개체타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "later title",
  content: "초안",
};

/**
 * Required<T>
 * 필수의, 필수적인
 * 모든 프로퍼티를 필수로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key]; // -? : 필수 프로퍼티
};

const withThumbnailPost: Required<Post> = {
  title: "후기",
  tags: ["ts"],
  content: "",
  thumbnailUrl: "https://...",
};

/**
 * Readonly<T>
 * 읽기전용, 수정불가
 * 모든 프로퍼티를 읽기전용 프로퍼티로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};

// readonlyPost.content = "we";
