import { ISinglyLinkedList } from './linked-list.types';
import { SinglyLinkedNode } from './nodes';

export class SinglyLinkedList<T> implements ISinglyLinkedList<T> {
  head: SinglyLinkedNode<T> | null = null;
  tail: SinglyLinkedNode<T> | null = null;
  private size: number = 0;

  [Symbol.iterator]() {
    let current = this.head;

    return {
      next() {
        let val: T | null = null;

        if (current) {
          val = current.value;
          current = current.next;
        }

        return {
          value: val,
          done: val === null,
        };
      },
    };
  }

  addFirst(value: T) {
    this._addFirst(new SinglyLinkedNode(value));
  }

  addLast(value: T) {
    this._addLast(new SinglyLinkedNode(value));
  }

  private _addFirst(node: SinglyLinkedNode<T>) {
    // save of the current head
    const tmp = this.head;

    this.head = node;
    // shifting the former header
    this.head.next = tmp;

    this.size++;

    if (this.count === 1) {
      this.tail = this.head;
    }
  }

  private _addLast(node: SinglyLinkedNode<T>) {
    this.tail = node;

    if (this.isEmpty()) this.head = node;
    else this.tail.next = node;

    this.size++;
  }

  removeFirst() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. List is Empty');

    const head = this.head as SinglyLinkedNode<T>;
    this.head = head.next;

    if (this.count === 1) {
      this.tail = null;
    }

    this.size--;
  }

  removeLast() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. List is Empty');

    if (this.count === 1) {
      this.head = this.tail = null;
    } else {
      // find the penultimate node
      let current = this.head;
      while (current && current.next !== this.tail) {
        current = current.next;
      }

      current ? (current.next = null) : null;
      this.tail = current;

      this.size--;
    }
  }

  isEmpty = () => this.count === 0;

  get count() {
    return this.size;
  }
}
