import { DoublyLinkedNode } from './nodes';
import { IDoublyLinkedList } from './linked-list.types';

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private size = 0;

  tail: DoublyLinkedNode<T> | null = null;
  head: DoublyLinkedNode<T> | null = null;

  addFirst(value: T) {
    this._addFirst(new DoublyLinkedNode(value));
  }
  addLast(value: T) {
    this._addLast(new DoublyLinkedNode(value));
  }

  private _addFirst(node: DoublyLinkedNode<T>) {
    // save of the head
    let tmp = this.head;
    // point head to the new node
    this.head = node;
    this.head.next = tmp;

    if (this.isEmpty()) {
      this.tail = this.head;
    } else {
      tmp = tmp as DoublyLinkedNode<T>;
      tmp.prev = this.head;
    }

    this.size++;
  }

  private _addLast(node: DoublyLinkedNode<T>) {
    this.tail = node;
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  removeFirst() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. List is Empty');

    // shift head
    const head = this.head as DoublyLinkedNode<T>;
    this.head = head.next;

    if (this.isEmpty()) {
      this.tail = null;
    } else {
      head.prev = null;
    }

    this.size--;
  }

  removeLast() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. List is Empty');

    if (this.count === 1) {
      this.head = this.tail = null;
    } else {
      const tail = this.tail as DoublyLinkedNode<T>;
      const tailPrev = tail.prev as DoublyLinkedNode<T>;
      tailPrev.next = null;
      this.tail = tailPrev;
    }

    this.size--;
  }

  isEmpty = () => this.count === 0;

  get count() {
    return this.size;
  }
}
