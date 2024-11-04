import { Graph } from '../../classes/Graph';

// * IMPORT STYLES
import styles from './GraphView.module.scss';

// * IMPORT UTILS
import Graphviz from 'graphviz-react';

// * IMPORT UTILS
import generateDot from '../../utils/generateDot';

interface GraphViewProps {
  graph: Graph;
}

const GraphView: React.FC<GraphViewProps> = ({ graph }) => {
  const dotGraph = generateDot(graph); // * GENERATE NODE FROM GRAPH

  return (
    <div className={styles.GraphView}>
      <h3>Visualización de gráfos</h3>
      <div className={styles.GraphView__container}>
        <Graphviz dot={dotGraph} className={styles.graphviz} />
        <ul>
          {Array.from(graph.nodes.values()).map((node) => (
            <li key={node.name}>
              <strong>Nodo {node.name}:</strong>
              <ul>
                {node.edges.map((edge, index) => (
                  <li key={index}>
                    Hasta {edge.to.name} - Costo: {edge.cost}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GraphView;
