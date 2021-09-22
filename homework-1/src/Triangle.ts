import { Shape } from './Shape';
import { Point } from './Point';

export class Triangle extends Shape {
    constructor(
        firstPoint: Point,
        secondPoint: Point,
        thirdPoint: Point,
        color: string,
        filled: boolean
    ) {
        super([firstPoint, secondPoint, thirdPoint], color, filled);
    }

    toString(): string {
        return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
    }

    getType(): string {
        const sides = this.getSides();

        if (sides.every(side => side === sides[0])) {
            return 'equilateral triangle';
        }

        if (sides.filter((side, index) => sides.indexOf(side) !== index).length > 0) {
            return 'isosceles triangle';
        }

        return 'scalene triangle';
    }
}
