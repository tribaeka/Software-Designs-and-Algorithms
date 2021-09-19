export class Point {
    public x: number;
    public y: number;

    constructor();
    constructor(x?: number, y?: number) {
        this.x = x || 0;
        this.y = y || 0;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(x?: Point): number;
    distance(x?: any, y?: number): number {
        if (x && y) {
            return this.calcDistance(x, y);
        }

        if (x instanceof Point) {
            const otherPoint = x;

            return this.calcDistance(otherPoint.x, otherPoint.y);
        }

        return this.calcDistance(0, 0);
    }

    private calcDistance(x: number, y: number): number {
        return Math.hypot((x - this.x), (y - this.y));
    }
}
