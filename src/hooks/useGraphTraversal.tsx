// * IMPORTS HOOKS REACT
import { useCallback, useState } from 'react';

// * IMPORTS CLASS
import { Graph } from '../classes/Graph';
import { Node } from '../classes/node';

interface TraversalResult {
  visitedNodes: Node[];
  totalCost: number;
  currentNode: Node | null;
}

export const useGraphTraversal = (graph: Graph) => {
  // * STATE FOR VISITED NODES
  // * STATE FOR TOTAL COST
  // * STATE FOR CURRENT NODE

  const [state, setState] = useState<TraversalResult>({
    visitedNodes: [],
    totalCost: 0,
    currentNode: null
  });

  const traverse = useCallback(
    (startNodeName: string) => {
      // * GET NODE
      const startNode = graph.nodes.get(startNodeName);
      if (!startNode) return;

      // * GET NODES VISITED
      const visited: Set<Node> = new Set();
      // * STORE COST
      let currentCost = 0;

      const traverseNode = (node: Node, costIncrement: number) => {
        if (visited.has(node)) return;

        // * ADD NODE VISITED
        visited.add(node);
        let localCost = 0;

        for (const edge of node.edges) {
          if (!visited.has(edge.to)) {
            // * CALCULATE COST OF RECORD
            const costToNextNode = edge.cost + costIncrement;
            currentCost += costToNextNode;
            localCost += edge.cost;

            traverseNode(edge.to, 2 * localCost);
          }
        }
      };

      traverseNode(startNode, 0);
      // * UPDATE DATA
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
