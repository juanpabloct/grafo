import { Graph } from "../classes/Graph";

const generateDot = (graph: Graph): string => {
    let dotString = 'digraph G {\n';

    graph.nodes.forEach((node) => {
        node.edges.forEach((edge) => {
            dotString += `  "${node.name}" -> "${edge.to.name}" [label="${edge.cost}"];\n`;
        });
    });

    dotString += '}';
    return dotString;
};
export default generateDot