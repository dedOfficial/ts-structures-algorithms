export interface IStack<T> {
  peek(): T;
  pop(): T;
  push(elem: T): void;
  isEmpty(): boolean;
  get count(): number;
}
