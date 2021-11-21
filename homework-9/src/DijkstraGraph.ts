import { IGraphVertices, IVertex } from './interfaces';

export class DijkstraGraph {
    constructor(private vertices: IGraphVertices = {}) {}

    public addVertex(vertex: IVertex): void {
        this.vertices[vertex.name] = vertex;
    }

    public findShortestWay(start: string, finish: string): string[] {
        const nodes: { [key: string]: number } = {};

        for (const i in this.vertices) {
            if (this.vertices[i].name === start) {
                this.vertices[i].weight = 0;
            } else {
                this.vertices[i].weight = Number.MAX_VALUE;
            }
            nodes[this.vertices[i].name] = this.vertices[i].weight;
        }

        while (Object.keys(nodes).length !== 0) {
            const sortedVisitedByWeight: string[] = Object.keys(nodes).sort(
                (a, b) => this.vertices[a].weight - this.vertices[b].weight,
            );
            const currentVertex: IVertex = this.vertices[sortedVisitedByWeight[0]];

            for (const j of currentVertex.nodes) {
                const calculateWeight: number = currentVertex.weight + j.weight;
                if (calculateWeight < this.vertices[j.name].weight) {
                    this.vertices[j.name].weight = calculateWeight;
                }
            }

            delete nodes[sortedVisitedByWeight[0]];
        }

        const finishWeight: number = this.vertices[finish].weight;
        const arrayWithVertex: string[] = this.findPointsOfShortestWay(start, finish).reverse();
        arrayWithVertex.push(finish, finishWeight.toString());

        return arrayWithVertex;
    }

    private findPointsOfShortestWay(start: string, finish: string): string[] {
        let nextVertex: string = finish;
        const arrayWithVertex: string[] = [];

        while (nextVertex !== start) {
            let minWeight: number = Number.MAX_VALUE;
            let minVertex = '';

            for (const i of this.vertices[nextVertex].nodes) {
                if (i.weight + this.vertices[i.name].weight < minWeight) {
                    minWeight = this.vertices[i.name].weight;
                    minVertex = i.name;
                }
            }

            arrayWithVertex.push(minVertex);
            nextVertex = minVertex;
        }

        return arrayWithVertex;
    }
}
