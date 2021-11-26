export interface INodeVertex {
    name: string;
    weight: number;
}

export interface IVertex {
    name: string;
    nodes: INodeVertex[];
    weight: number;
}

export interface IGraphVertices {
    [key: string]: IVertex;
}
