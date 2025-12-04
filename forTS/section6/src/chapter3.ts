/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // 인터페이스 내부의 필드는 무조건 public
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move() {
    console.log(`moving ${this.moveSpeed}`);
  }
}
