// components/GraphView.tsx
import React from 'react';
import { Graph } from '../../classes/Graph';
import styles from './GraphView.module.scss';
import Graphviz from 'graphviz-react';
import generateDot from '../../utils/generateDot';
type GraphViewProps = {
  graph: Graph;
};

const GraphView: React.FC<GraphViewProps> = ({ graph }) => {
  const dotGraph = generateDot(graph);

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
