import { Comparator } from './types/Comparator';
import { PriorityQueueIterator } from './PriorityQueueIterator';

export class PriorityQueue<E> implements Iterable<E> {
    constructor(private comparator: Comparator<E>, private pq: E[] = []) {
        this.pq.sort(this.comparator);
    }

    isEmpty(): boolean {
        return this.pq.length === 0;
    }

    enqueue(e: E): void {
        this.pq.push(e);
        this.pq.sort(this.comparator);
    }

    dequeue(): E {
        const nextValue = this.pq.pop();

        if (!nextValue) {
            throw new Error('Queue is empty');
        }

        return nextValue;
    }

    [Symbol.iterator](): Iterator<E> {
        return new PriorityQueueIterator(this.pq, new PriorityQueue<E>(this.comparator));
    }

    toString(): string {
        return this.pq.toString();
    }
}
