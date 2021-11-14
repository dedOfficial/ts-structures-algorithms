import { SinglyLinkedNode } from '../linked-lists/nodes';
import { SinglyLinkedList } from '../linked-lists/singly-linked-list';
import { IStack } from './stack.types';

export class LinkedStack<T> implements IStack<T> {
  private readonly list: SinglyLinkedList<T> = new SinglyLinkedList();

  [Symbol.iterator] = this.list[Symbol.iterator];

  peek() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. Stack is Empty');

    const listHead = this.list.head as SinglyLinkedNode<T>;
    return listHead.value;
  }
  pop() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. Stack is Empty');

    const listHead = this.list.head as SinglyLinkedNode<T>;
    const elem = listHead.value;

    this.list.removeFirst();

    return elem;
  }
  push(elem: T) {
    this.list.addFirst(elem);
  }

  isEmpty = () => this.count === 0;

  get count() {
    return this.list.count;
  }
}
