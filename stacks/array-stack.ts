import { IStack } from './stack.types';

export class ArrayStack<T> implements IStack<T> {
  private items: T[] = [];

  [Symbol.iterator]() {
    let index = 0;
    const items = this.items;

    return {
      next() {
        return {
          value: items[index],
          done: index++ >= items.length,
        };
      },
    };
  }

  peek() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. Stack is Empty');

    return this.items[this.count - 1];
  }

  pop() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. Stack is Empty');

    const elem = this.items[this.count - 1];
    this.items.pop();
    return elem;
  }

  push(elem: T) {
    this.items.push(elem);
  }

  isEmpty = () => this.count === 0;

  get count() {
    return this.items.length;
  }

  private set count(value: number) {}
}
