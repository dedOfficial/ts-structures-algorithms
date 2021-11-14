export class SinglyLinkedNode<T> {
  value: T;
  next: SinglyLinkedNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedNode<T> extends SinglyLinkedNode<T> {
  next: DoublyLinkedNode<T> | null = null;
  prev: DoublyLinkedNode<T> | null = null;
}
