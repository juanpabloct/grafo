// App.tsx
import React from 'react';
import { Graph } from '../../classes/Graph';
import { useGraphTraversal } from '../../hooks/useGraphTraversal';
import GraphView from '../../components/GraphView/GraphView';
import TraverseControls from '../../components/TraverseControl/TraverseControl';
import TraverseLog from '../../components/TraverseLog/TraverseLog';
import styles from './Home.module.scss';
const graph = new Graph();
//  CREATE NODES
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');

// CREATE ARISTAS
graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 3);
graph.addEdge('B', 'C', 1);
graph.addEdge('C', 'A', 10);
graph.addEdge('C', 'B', 2);
graph.addEdge('E', 'A', 2);
graph.addEdge('A', 'E', 2);

const App: React.FC = () => {
  const { visitedNodes, totalCost, traverse } = useGraphTraversal(graph);

  const handleStartTraverse = (startNode: string) => {
    traverse(startNode);
  };

  return (
    <div className={styles.Home}>
      <h1 className={`secondary ${styles.title}`}>Visualizador de gráficos</h1>
      <GraphView graph={graph} />
      <TraverseControls
        nodes={Array.from(graph.nodes.keys())}
        onStartTraverse={handleStartTraverse}
      />
      <TraverseLog visitedNodes={visitedNodes} totalCost={totalCost} />
    </div>
  );
};

export default App;
