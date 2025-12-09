/**
 * Pick<T,K>
 * 고르다.
 * 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnailUrl'
  // 'tktle' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailUrl'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날글",
  content: "옛날 컨텐츠",
};

/**
 * Omit<T,K>
 * 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티 제거
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K='title'
// Pick<Post, Exclude<keyof Post, 'title>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailUrl', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailUrl'>

const noTitlePost: Omit<Post, "title"> = {
  content: "내용",
  tags: ["title"],
  thumbnailUrl: "https://...",
};

/**
 * Record<K,V>
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "midium" | "small" | "watch",
  { url: string; size: number }
>;
