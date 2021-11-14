import { PriorityQueue } from './PriorityQueue';

export class PriorityQueueIterator<E> implements Iterator<E> {
    constructor(private pq: E[], private copy: PriorityQueue<E>) {
        for (const e of pq) {
            copy.enqueue(e);
        }
    }

    hasNext(): boolean {
        return !this.copy.isEmpty();
    }

    next(): IteratorResult<E, E> {
        const value = this.copy.dequeue();

        return {
            done: !this.hasNext(),
            value,
        };
    }
}
