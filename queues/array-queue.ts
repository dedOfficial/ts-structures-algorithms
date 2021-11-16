import { IQueue } from './queue.types';

export class ArrayQueue<T> implements IQueue<T> {
  private queue: T[] = [];

  [Symbol.iterator]() {
    let index = 0;
    const queue = this.queue;

    return {
      next() {
        const tmp = index;
        index++;

        return {
          value: queue[tmp],
          done: index === queue.length,
        };
      },
    };
  }

  enqueue(item: T) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. Queue is Empty');

    this.queue.shift();
  }

  peek() {
    if (this.isEmpty())
      throw new Error('Invalid operation exeption. Queue is Empty');

    return this.queue[0];
  }

  isEmpty = () => this.count === 0;

  get count() {
    return this.queue.length;
  }
}
