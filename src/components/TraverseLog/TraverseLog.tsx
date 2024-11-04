// * IMPORTS CLASS
import { Node } from '../../classes/node';
// * IMPORTS STYLES
import styles from './TraverseLog.module.scss';
type TraverseLogProps = {
  visitedNodes: Node[];
  totalCost: number;
};

const TraverseLog: React.FC<TraverseLogProps> = ({
  visitedNodes,
  totalCost
}) => {
  return (
    <div className={styles.traverse}>
      <h3>Informacion</h3>
      <div className={styles.traverseContainer}>
        <p>
          <strong>Nodos visitados:</strong>{' '}
          {visitedNodes.map((node) => node.name).join(', ')}
        </p>
        <p>
          <strong>Total Costos:</strong> {totalCost}
        </p>
      </div>
    </div>
  );
};

export default TraverseLog;
