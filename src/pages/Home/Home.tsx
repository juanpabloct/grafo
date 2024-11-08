// * IMPORT CLASS GRAPH
import { Graph } from '../../classes/Graph';
// * IMPORT CUSTOM HOOK
import { useGraphTraversal } from '../../hooks/useGraphTraversal';
// * IMPORT COMPONENTS
import GraphView from '../../components/GraphView/GraphView';
import TraverseControls from '../../components/TraverseControl/TraverseControl';
import TraverseLog from '../../components/TraverseLog/TraverseLog';
// * IMPORT STYLES
import styles from './Home.module.scss';

const graph = new Graph();
// * CREATE NODES
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');

// * CREATE ARISTAS
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
      <div>
        <GraphView graph={graph}></GraphView>
        <div className={styles.containerInfo}>
          <TraverseControls
            nodes={Array.from(graph.nodes.keys())}
            onStartTraverse={handleStartTraverse}
          />
          <TraverseLog visitedNodes={visitedNodes} totalCost={totalCost} />
        </div>
      </div>
    </div>
  );
};

export default App;
