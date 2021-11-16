import { SinglyLinkedNode } from '../linked-lists/nodes';
import { SinglyLinkedList } from '../linked-lists/singly-linked-list';
import { IQueue } from './queue.types';

export class LinkedQueue<T> implements IQueue<T> {
  private readonly list: SinglyLinkedList<T> = new SinglyLinkedList();

  [Symbol.iterator] = this.list[Symbol.iterator];

  enqueue(item: T): void {
    this.list.addLast(item);
  }

  dequeue(): void {
    if (this.isEmpty()) {
      throw new Error('Invalid operation exeption. Queue is Empty');
    }

    this.list.removeFirst();
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('Invalid operation exeption. Queue is Empty');
    }

    const head = this.list.head as SinglyLinkedNode<T>;
    return head.value;
  }

  isEmpty = () => this.count === 0;

  get count() {
    return this.list.count;
  }
}
