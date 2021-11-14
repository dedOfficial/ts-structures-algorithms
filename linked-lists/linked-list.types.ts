import { SinglyLinkedNode } from './nodes';
import { DoublyLinkedNode } from './nodes';

export interface ISinglyLinkedList<T> {
  head: SinglyLinkedNode<T> | null;
  tail: SinglyLinkedNode<T> | null;
  get count(): number;
  addFirst(value: T): void;
  addLast(value: T): void;
  removeFirst(): void;
  removeLast(): void;
  isEmpty(): boolean;
}

export interface IDoublyLinkedList<T>
  extends Omit<ISinglyLinkedList<T>, 'head' | 'tail'> {
  head: DoublyLinkedNode<T> | null;
  tail: DoublyLinkedNode<T> | null;
}
