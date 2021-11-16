export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): void;
  peek(): T;
  isEmpty(): boolean;
  get count(): number;
}
