export class TimelineRingBuffer<T> {
  private buffer: (T | null)[];
  private pointer = 0;

  constructor(public readonly capacity: number = 1024) {
    this.buffer = new Array(capacity).fill(null);
  }

  push(item: T): void {
    this.buffer[this.pointer] = item;
    this.pointer = (this.pointer + 1) % this.capacity;
  }

  toArray(): T[] {
    return this.buffer.filter((item): item is T => item !== null);
  }
}
