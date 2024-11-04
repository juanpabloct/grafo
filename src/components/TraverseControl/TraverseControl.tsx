// components/TraverseControls.tsx
import React, { useState } from 'react';
import styles from './TraverseControl.module.scss';
type TraverseControlsProps = {
  nodes: string[]; // Lista de nombres de nodos
  onStartTraverse: (startNode: string) => void;
};

const TraverseControls: React.FC<TraverseControlsProps> = ({
  nodes,
  onStartTraverse
}) => {
  const [selectedNode, setSelectedNode] = useState(nodes[0] || '');

  const handleStartTraverse = () => {
    if (selectedNode) {
      onStartTraverse(selectedNode);
    }
  };

  return (
    <div className={styles.traverse}>
      <h3>Controles</h3>
      <div className={styles.currentNode}>
        <label htmlFor='startNode'>Nodo inicial:</label>
        <select
          id='startNode'
          className={styles.selectNode}
          value={selectedNode}
          onChange={(e) => setSelectedNode(e.target.value)}
        >
          {nodes.map((node) => (
            <option key={node} value={node}>
              {node}
            </option>
          ))}
        </select>
        <button className={styles.btnTraverse} onClick={handleStartTraverse}>
          Iniciar recorrido
        </button>
      </div>
    </div>
  );
};

export default TraverseControls;
