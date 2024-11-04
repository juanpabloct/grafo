// src/classes/Node.ts
export class Edge {
    to: Node;
    cost: number;

    constructor(to: Node, cost: number) {
        this.to = to;
        this.cost = cost;
    }
}

export class Node {
    name: string;
    edges: Edge[];

    constructor(name: string) {
        this.name = name;
        this.edges = [];
    }

    addEdge(to: Node, cost: number) {
        this.edges.push(new Edge(to, cost));
    }
}
