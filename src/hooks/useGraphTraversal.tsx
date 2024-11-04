// src/hooks/useGraphTraversal.ts
import { useCallback, useState } from 'react';
import { Graph } from '../classes/Graph';
import { Node } from '../classes/node';

interface TraversalResult {
  visitedNodes: Node[];
  totalCost: number;
  currentNode: Node | null;
}

export const useGraphTraversal = (graph: Graph) => {
  const [state, setState] = useState<TraversalResult>({
    visitedNodes: [],
    totalCost: 0,
    currentNode: null
  });

  const traverse = useCallback(
    (startNodeName: string) => {
      const startNode = graph.nodes.get(startNodeName);
      if (!startNode) return;

      const visited: Set<Node> = new Set();
      let currentCost = 0;

      const traverseNode = (node: Node, costIncrement: number) => {
        if (visited.has(node)) return;

        visited.add(node);
        let localCost = 0;

        for (const edge of node.edges) {
          if (!visited.has(edge.to)) {
            // Cálculo del costo
            const costToNextNode = edge.cost + costIncrement;
            currentCost += costToNextNode;
            localCost += edge.cost;

            // Recorrido recursivo hacia el nodo adyacente
            traverseNode(edge.to, 2 * localCost);
          }
        }
      };

      traverseNode(startNode, 0);

      // Actualizar el estado con los nodos visitados y el costo total
      setState({
        visitedNodes: Array.from(visited),
        totalCost: currentCost,
        currentNode: startNode
      });
    },
    [graph]
  );

  return {
    visitedNodes: state.visitedNodes,
    totalCost: state.totalCost,
    currentNode: state.currentNode,
    traverse
  };
};
