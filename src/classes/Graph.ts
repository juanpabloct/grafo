
import { Node } from "./node";

export class Graph {
    nodes: Map<string, Node>;

    constructor() {
        this.nodes = new Map<string, Node>();
    }

    addNode(name: string) {
        const node = new Node(name);
        // INSERT NEW NODES
        this.nodes.set(name, node);
    }

    addEdge(from: string, to: string, cost: number) {
        const fromNode = this.nodes.get(from);
        const toNode = this.nodes.get(to);
        if (fromNode && toNode) {
            // INSERT ARISTA
            fromNode.addEdge(toNode, cost);
        }
    }
}
