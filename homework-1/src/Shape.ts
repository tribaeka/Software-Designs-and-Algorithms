import { Point } from './Point';

export const DEFAULT_COLOR = 'green';

export abstract class Shape {
    constructor(
        protected points: Point[],
        protected color = DEFAULT_COLOR,
        protected filled = true
    ) {
        if (points.length < 3) {
            throw new Error('The shape should has at least 3 points');
        }
    }

    abstract getType(): string;

    toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}.`
            + ` Points: ${this.points.join(', ')}.`;
    }

    getPerimeter(): number {
        return this.getSides().reduce((perimeter = 0, side) => perimeter + side);
    }

    protected getSides(): number[] {
        const sides = [];

        for (let i = 0; i < this.points.length; i++) {
            const triangleSide = this.points[i].distance(this.points[i + 1] || this.points[0]);

            sides.push(Math.round(triangleSide));
        }

        return sides;
    }
}
