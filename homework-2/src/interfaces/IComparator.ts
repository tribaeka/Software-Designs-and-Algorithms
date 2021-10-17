export interface IComparator<T> {
    compare(first: T, second: T): number;
}
