import { DijkstraGraph } from './DijkstraGraph';

const graph = new DijkstraGraph();

graph.addVertex({
    name: 'A',
    nodes: [
        { name: 'C', weight: 3 },
        { name: 'E', weight: 7 },
        { name: 'B', weight: 4 },
    ],
    weight: 1,
});
graph.addVertex({
    name: 'B',
    nodes: [
        { name: 'A', weight: 4 },
        { name: 'C', weight: 6 },
        { name: 'D', weight: 5 },
    ],
    weight: 1,
});
graph.addVertex({
    name: 'C',
    nodes: [
        { name: 'A', weight: 3 },
        { name: 'B', weight: 6 },
        { name: 'E', weight: 8 },
        { name: 'D', weight: 11 },
    ],
    weight: 1,
});
graph.addVertex({
    name: 'D',
    nodes: [
        { name: 'B', weight: 5 },
        { name: 'C', weight: 11 },
        { name: 'E', weight: 2 },
        { name: 'F', weight: 2 },
    ],
    weight: 1,
});
graph.addVertex({
    name: 'E',
    nodes: [
        { name: 'A', weight: 7 },
        { name: 'C', weight: 8 },
        { name: 'D', weight: 2 },
        { name: 'G', weight: 5 },
    ],
    weight: 1,
});
graph.addVertex({
    name: 'F',
    nodes: [
        { name: 'D', weight: 2 },
        { name: 'G', weight: 3 },
    ],
    weight: 1,
});
graph.addVertex({
    name: 'G',
    nodes: [
        { name: 'D', weight: 10 },
        { name: 'E', weight: 5 },
        { name: 'F', weight: 3 },
    ],
    weight: 1,
});

console.log(graph.findShortestWay('A', 'F'));
