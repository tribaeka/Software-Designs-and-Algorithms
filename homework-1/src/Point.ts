export class Point {
    constructor(public x = 0, public y = 0) {}

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(x: Point | number, y?: number): number {
        if (x instanceof Point) {
            const otherPoint = x;

            return this.calcDistance(otherPoint.x, otherPoint.y);
        }

        if (x && y) {
            return this.calcDistance(x, y);
        }

        return this.calcDistance(0, 0);
    }

    private calcDistance(x: number, y: number): number {
        return Math.hypot((x - this.x), (y - this.y));
    }
}
